import {
  IconButton,
  Input,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import originalLogo from 'assets/brand/logo_original.png';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import MyPagination from 'shared/components/data_table/MyPagination';
import MyModal from 'shared/components/my_modal/MyModal';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import { Size } from 'shared/enums/Size';
import useDeleteCommand from 'shared/hooks/useDeleteCommand';
import usePatchCommand from 'shared/hooks/usePatchCommand';
import usePostCommand from 'shared/hooks/usePostCommand';
import useQuery from 'shared/hooks/useQuery';
import useUpdateCommand from 'shared/hooks/useUpdateCommand';
import { ILink } from 'shared/interfaces/ILink';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';
import Swal from 'sweetalert2';
import RecordsPerPage from '../../shared/components/data_table/RecordsPerPage';
import ServiceCreateView from './ServiceCreateView';
import ServiceEditView from './ServiceEditView';
import ServiceSingleView from './ServiceSingleView';
import { initialCreateServiceInputState } from './constants/initialCreateServiceInputState';
import useCreateServiceInputState from './hooks/useCreateServiceInputState';
import useSelectedServiceAsState from './hooks/useSelectedServiceAsState';

const TABLE_HEAD = ['Title', 'Slug', 'Order', 'Image', 'Status', ''];

const ServiceIndexView: React.FC = () => {
  const [recordPerPage, setRecordPerPage] = useState<string>('10');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [searchText, setSearchText] = useState<string>('');
  const searchInputRef = React.createRef<any>();

  const [createServiceUrl, setCreateServiceUrl] = useState<string | null>(null);
  const [serviceUpdateUrl, setServiceUpdateUrl] = useState<string | null>(null);
  const [serviceViewUrl, setServiceViewUrl] = useState<string | null>(null);

  const {
    createServiceInputState,
    setCreateServiceInputState,
    updateCreateServiceInputState,
  } = useCreateServiceInputState();

  const {
    selectedServiceAsState,
    setSelectedServiceAsState,
    updateSelectedServiceAsState,
  } = useSelectedServiceAsState();

  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const {
    loading: serviceLoading,
    data: service,
    setData: setService,
    executeQuery: executeServiceQuery,
  } = useQuery<IResponseModel<IPost>>();

  const {
    loading: processingServiceDelete,
    data: deletedService,
    setData: setDeletedService,
    executeDeleteCommand: executeServiceDeleteCommand,
  } = useDeleteCommand<IPost>();

  const {
    loading: processingServiceUpdate,
    data: updatedService,
    setData: setUpdatedService,
    error: updateServiceErrors,
    executeUpdateCommand: executeServiceUpdateCommand,
  } = useUpdateCommand<IPost>();

  const {
    loading: processingServiceCreate,
    data: createdService,
    setData: setCreatedService,
    error: createServiceErrors,
    executePostCommand: executeServiceCreateCommand,
  } = usePostCommand<IPost>();

  const {
    loading: processingServicePublish,
    data: publishedService,
    setData: setPublishedService,
    executePatchCommand: executeServicePublishCommand,
  } = usePatchCommand<IPost>();

  const {
    loading: processingServiceDraft,
    data: draftedService,
    setData: setDraftedService,
    executePatchCommand: executeServiceDraftCommand,
  } = usePatchCommand<IPost>();

  const {
    loading: loadingServices,
    data: services,
    executeQuery: executeReloadServicesQuery,
  } = useQuery<IResponseModel<IPost[]>>();

  const searchClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchText(searchInputRef.current?.value);
  };

  const HEADERS = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authUser?.access_token}`,
    },
  };

  const serviceRemoveActionHandler = (url: string) => {
    executeServiceDeleteCommand(url, HEADERS);
  };

  const serviceUpdateActionHandler = (url: string) => {
    executeServiceUpdateCommand(
      url,
      JSON.stringify(selectedServiceAsState),
      HEADERS
    );
  };

  const servicePublishActionHandler = (url: string) => {
    const pageStatus = { publishStatus: 'Published' };
    executeServicePublishCommand(url, JSON.stringify(pageStatus), HEADERS);
  };

  const serviceDraftActionHandler = (url: string) => {
    const pageStatus = { publishStatus: 'Draft' };
    executeServiceDraftCommand(url, JSON.stringify(pageStatus), HEADERS);
  };

  const serviceCreateActionHandler = (url: string) => {
    executeServiceCreateCommand(
      url,
      JSON.stringify(createServiceInputState),
      HEADERS
    );
  };

  useEffect(() => {
    executeReloadServicesQuery(
      `${process.env.REACT_APP_BASE_URL}/api/our-services?page=${currentPage}&per_page=${recordPerPage}&search_text=${searchText}`,
      HEADERS
    );
    if (deletedService) {
      setDeletedService(null);
      setServiceViewUrl(null);
      Swal.fire('Deleted!', 'Your service has been deleted.', 'success');
    }
    if (createdService) {
      setCreateServiceInputState(initialCreateServiceInputState);
      setCreatedService(null);
      setCreateServiceUrl(null);
      Swal.fire('Created!', 'Your service has been created.', 'success');
    }

    if (updatedService) {
      setUpdatedService(null);
      setServiceUpdateUrl(null);
      setSelectedServiceAsState(null);
      Swal.fire('Updated!', 'Your service has been updated.', 'success');
    }
    if (publishedService) {
      updateSelectedServiceAsState('publishStatus', 'Published');
      setPublishedService(null);
      Swal.fire('Published!', 'Your service has been published.', 'success');
      executeServiceQuery(serviceViewUrl!, HEADERS);
    }
    if (draftedService) {
      updateSelectedServiceAsState('publishStatus', 'Draft');
      setDraftedService(null);
      Swal.fire('Draft!', 'Your service has been drafted.', 'success');
      executeServiceQuery(serviceViewUrl!, HEADERS);
    }

    if (service) {
      setSelectedServiceAsState(service.data);
      setService(null);
    }
  }, [
    service,
    deletedService,
    createdService,
    updatedService,
    publishedService,
    draftedService,
    serviceViewUrl,
    recordPerPage,
    searchText,
    currentPage,
  ]);

  return (
    <div className="">
      <Loading
        isLoading={
          loadingServices ||
          processingServiceDelete ||
          processingServiceCreate ||
          processingServiceUpdate ||
          processingServicePublish ||
          processingServiceDraft ||
          serviceLoading
        }
      />
      <MyModal
        openDialogue={serviceViewUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setService(null);
          setSelectedServiceAsState(null);
          setServiceViewUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Service Details`}</span>
              </div>

              <div className="flex items-center gap-4">
                {selectedServiceAsState?.links?.map((link: ILink) => {
                  if (
                    link?.rel === 'destroy' ||
                    link?.rel === 'publish' ||
                    link?.rel === 'draft'
                  ) {
                    return (
                      <Tooltip content={link.label}>
                        <IconButton
                          variant="text"
                          onClick={() => {
                            if (link.rel === 'destroy') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, delete it!',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  serviceRemoveActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'publish') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: 'You are going to publish this service. It will be visible to the public.',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Publish',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  servicePublishActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'draft') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: "You are making this service draft, it won't be visible to the public.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Draft',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  serviceDraftActionHandler(link.url);
                                }
                              });
                            }
                          }}
                        >
                          <i
                            className={`text-xl text-primary dark:text-white ${link.icon}`}
                          ></i>
                        </IconButton>
                      </Tooltip>
                    );
                  }
                  return null;
                })}

                <Tooltip content={'Close'}>
                  <IconButton
                    variant="text"
                    onClick={() => {
                      setService(null);
                      setSelectedServiceAsState(null);
                      setServiceViewUrl(null);
                    }}
                  >
                    <i
                      className={`fa-solid fa-circle-xmark text-xl text-primary dark:text-white`}
                    ></i>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}

            {/* Start of modal body */}
            <ServiceSingleView pageInputState={selectedServiceAsState} />
            {/* Start of modal body */}

            {/* Start of modal footer */}

            {/* End of modal footer */}
          </div>
        </div>
      </MyModal>

      <MyModal
        openDialogue={serviceUpdateUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setService(null);
          setSelectedServiceAsState(null);
          setServiceUpdateUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Edit Service`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setService(null);
                    setSelectedServiceAsState(null);
                    setServiceUpdateUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}
            <ServiceEditView
              pageInputState={selectedServiceAsState}
              errors={updateServiceErrors}
              updatePageInputState={updateSelectedServiceAsState}
            />

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                onClick={() => {
                  serviceUpdateActionHandler(serviceUpdateUrl!);
                }}
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
              >
                Update
              </button>
            </div>
            {/* End of modal footer */}
          </div>
        </div>
      </MyModal>

      <MyModal
        openDialogue={createServiceUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setCreateServiceUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Create Service`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setCreateServiceUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}

            {/* Start of modal body */}
            <ServiceCreateView
              pageInputState={createServiceInputState}
              errors={createServiceErrors}
              updatePageInputState={updateCreateServiceInputState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
                onClick={() => {
                  serviceCreateActionHandler(
                    services?.createNew
                      ? services.createNew?.url
                      : 'Unauthorized'
                  );
                }}
              >
                Submit
              </button>
            </div>
            {/* End of modal footer */}
          </div>
        </div>
      </MyModal>

      <motion.div
        initial={{ opacity: 1, x: '100vw', skewX: '-30deg' }}
        animate={{
          x: 0,
          y: 0,
          skewX: '0deg',
          opacity: 1,
          transition: { velocity: 10 },
        }}
        className="m-2 h-[calc(100vh-130px)] w-[calc(100vw-74px)] rounded bg-surface p-2 shadow-sm dark:bg-blue-gray-900"
      >
        <div className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <p className="text-2xl font-bold">Services</p>
              <p className="mt-1 font-normal">
                See information about all services
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {services?.createNew && (
                <button
                  className="flex items-center gap-3 rounded bg-primary px-4 py-2 text-onPrimary"
                  onClick={() => {
                    setCreateServiceUrl(services?.createNew?.url!);
                  }}
                >
                  <i className="fa-brands fa-page4"></i>
                  {services.createNew.label}
                </button>
              )}
            </div>
          </div>
          <div className="my-2 flex flex-col items-center justify-between gap-4 md:flex-row">
            <RecordsPerPage onClickHandler={setRecordPerPage} />
            <div className="w-full md:w-72">
              <form
                action=""
                onSubmit={(event) => {
                  searchClickHandler(event);
                }}
              >
                <Input
                  label="Search"
                  inputRef={searchInputRef}
                  icon={
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass hover:cursor-pointer hover:text-primary"></i>
                    </button>
                  }
                />
              </form>
            </div>
          </div>
        </div>
        <div className="overflow-scroll px-0">
          <div className="h-[calc(100vh-430px)] overflow-auto md:h-[calc(100vh-350px)]">
            <table className="whitespace-no-wrap relative w-full table-auto border-collapse border">
              <thead className="w-full">
                <tr className="sticky -top-0 hidden h-14 w-full shadow-sm md:table-row">
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50  p-4 transition-colors hover:bg-blue-gray-50 dark:bg-gray-900 dark:text-white"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none dark:text-white"
                      >
                        {head}
                        {index !== TABLE_HEAD.length - 1 && (
                          <i className="fa-solid fa-up-down"></i>
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="flex-1 sm:flex-none">
                {services &&
                  services.data?.map((service: IPost, index: number) => {
                    return (
                      <tr
                        key={index}
                        className="flex w-full flex-col flex-wrap border-b border-blue-gray-50 last:border-b-0 even:bg-blue-gray-600/5 md:table-row"
                      >
                        <td className="border px-2">
                          <label className="md:hidden">Title</label>
                          <p className="font-semibold md:font-normal">
                            {service.title}
                          </p>
                        </td>
                        <td className="border px-2">
                          <label className="md:hidden">Slug</label>
                          <p className="font-semibold md:font-normal">
                            {service.slug}
                          </p>
                        </td>
                        <td className="border px-2">
                          <label className="md:hidden">Order</label>
                          <p className="font-semibold md:font-normal">
                            {service.order}
                          </p>
                        </td>

                        <td className="border px-2">
                          <label className="md:hidden">Image</label>
                          <img
                            src={
                              service.thumbnailAttachmentUrl
                                ? service.thumbnailAttachmentUrl
                                : originalLogo
                            }
                            alt={service.title}
                            className="h-10 w-10 rounded-full"
                          />
                        </td>
                        <td className="border px-2">
                          <label className="md:hidden">Status</label>
                          <span
                            className={`w-fit rounded-md ${
                              service.publishStatus !== 'Published'
                                ? 'bg-orange-600 '
                                : 'bg-green-600 '
                            } py-0.5 px-1 text-white shadow`}
                          >
                            {service.publishStatus}
                          </span>
                        </td>

                        <td className="h-full border px-2">
                          <div className="flex h-full">
                            {service.links?.map(
                              (link: ILink, index: number) => {
                                if (link) {
                                  return (
                                    <Tooltip content={link.label} key={index}>
                                      <IconButton
                                        variant="text"
                                        onClick={() => {
                                          if (link.rel === 'show') {
                                            executeServiceQuery(
                                              link.url,
                                              HEADERS
                                            );
                                            setServiceViewUrl(link.url);
                                          }
                                          if (link.rel === 'update') {
                                            executeServiceQuery(
                                              link.url,
                                              HEADERS
                                            );
                                            setServiceUpdateUrl(link.url);
                                          }
                                          if (link.rel === 'destroy') {
                                            Swal.fire({
                                              title: 'Are you sure?',
                                              text: "You won't be able to revert this!",
                                              icon: 'warning',
                                              showCancelButton: true,
                                              confirmButtonColor: '#222d67',
                                              cancelButtonColor: '#b12e06',
                                              confirmButtonText:
                                                'Yes, delete it!',
                                            }).then((result) => {
                                              if (result.isConfirmed) {
                                                serviceRemoveActionHandler(
                                                  link.url
                                                );
                                              }
                                            });
                                          }
                                          if (link.rel === 'publish') {
                                            Swal.fire({
                                              title: 'Are you sure?',
                                              text: 'You are going to publish this service. It will be visible to the public.',
                                              icon: 'warning',
                                              showCancelButton: true,
                                              confirmButtonColor: '#222d67',
                                              cancelButtonColor: '#b12e06',
                                              confirmButtonText:
                                                'Yes, Make it Publish',
                                            }).then((result) => {
                                              if (result.isConfirmed) {
                                                servicePublishActionHandler(
                                                  link.url
                                                );
                                              }
                                            });
                                          }
                                          if (link.rel === 'draft') {
                                            Swal.fire({
                                              title: 'Are you sure?',
                                              text: "You are making this service draft, it won't be visible to the public.",
                                              icon: 'warning',
                                              showCancelButton: true,
                                              confirmButtonColor: '#222d67',
                                              cancelButtonColor: '#b12e06',
                                              confirmButtonText:
                                                'Yes, Make it Draft',
                                            }).then((result) => {
                                              if (result.isConfirmed) {
                                                serviceDraftActionHandler(
                                                  link.url
                                                );
                                              }
                                            });
                                          }
                                        }}
                                      >
                                        <i
                                          className={`text-xl text-primary dark:text-white ${link.icon}`}
                                        ></i>
                                      </IconButton>
                                    </Tooltip>
                                  );
                                }
                                return null;
                              }
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <MyPagination
          currentPage={currentPage}
          meta={services?.meta}
          setCurrentPage={setCurrentPage}
        />
      </motion.div>
    </div>
  );
};

export default ServiceIndexView;
