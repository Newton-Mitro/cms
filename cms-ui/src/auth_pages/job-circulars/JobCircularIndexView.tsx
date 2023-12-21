import { IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import MySearchInput from 'shared/components/MySearchInput';
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
import { IJobCircular } from 'shared/interfaces/IJobCircular';
import { ILink } from 'shared/interfaces/ILink';
import { IResponseModel } from 'shared/interfaces/IResponseModel';
import Swal from 'sweetalert2';
import RecordsPerPage from '../../shared/components/data_table/RecordsPerPage';
import JobCircularCreateView from './JobCircularCreateView';
import JobCircularEditView from './JobCircularEditView';
import JobCircularSingleView from './JobCircularSingleView';
import { initialCreateJobCircularInputState } from './constants/initialCreateJobCircularInputState';
import useCreateJobCircularInputState from './hooks/useCreateJobCircularInputState';
import useSelectedJobCircularAsState from './hooks/useSelectedJobCircularAsState';

const TABLE_HEAD = [
  'Position',
  'Vacancy',
  'Education',
  'Experience',
  'Deadline',
  'Status',
  '',
];

const JobCircularIndexView: React.FC = () => {
  const [recordPerPage, setRecordPerPage] = useState<string>('10');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [searchText, setSearchText] = useState<string>('');
  const searchInputRef = React.createRef<any>();

  const [createPageUrl, setCreatePageUrl] = useState<string | null>(null);
  const [pageUpdateUrl, setPageUpdateUrl] = useState<string | null>(null);
  const [pageViewUrl, setPageViewUrl] = useState<string | null>(null);

  const {
    createJobCircularInputState,
    setCreateJobCircularInputState,
    updateCreateJobCircularInputState,
  } = useCreateJobCircularInputState();

  const {
    selectedJobCircularAsState,
    setSelectedJobCircularAsState,
    updateSelectedJobCircularAsState,
  } = useSelectedJobCircularAsState();

  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const {
    loading: jobCircularLoading,
    data: jobCircular,
    setData: setJobCircular,
    executeQuery: executeJobCircularQuery,
  } = useQuery<IResponseModel<IJobCircular>>();

  const {
    loading: processingJobCircularDelete,
    data: deletedJobCircular,
    setData: setDeletedJobCircular,
    executeDeleteCommand: executeJobCircularDeleteCommand,
  } = useDeleteCommand<IJobCircular>();

  const {
    loading: processingJobCircularUpdate,
    data: updatedJobCircular,
    setData: setUpdatedJobCircular,
    error: updateJobCircularErrors,
    executeUpdateCommand: executeJobCircularUpdateCommand,
  } = useUpdateCommand<IJobCircular>();

  const {
    loading: processingJobCircularCreate,
    data: createdJobCircular,
    setData: setCreatedJobCircular,
    error: createJobCircularErrors,
    executePostCommand: executeJobCircularCreateCommand,
  } = usePostCommand<IJobCircular>();

  console.log(createdJobCircular);

  const {
    loading: processingJobCircularPublish,
    data: publishedJobCircular,
    setData: setPublishedJobCircular,
    executePatchCommand: executeJobCircularPublishCommand,
  } = usePatchCommand<IJobCircular>();

  const {
    loading: processingJobCircularDraft,
    data: draftedJobCircular,
    setData: setDraftedJobCircular,
    executePatchCommand: executeJobCircularDraftCommand,
  } = usePatchCommand<IJobCircular>();

  const {
    loading: loadingJobCirculars,
    data: jobCirculars,
    executeQuery: executeReloadJobCircularsQuery,
  } = useQuery<IResponseModel<IJobCircular[]>>();

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

  const jobCircularRemoveActionHandler = (url: string) => {
    executeJobCircularDeleteCommand(url, HEADERS);
  };

  const jobCircularUpdateActionHandler = (url: string) => {
    executeJobCircularUpdateCommand(
      url,
      JSON.stringify(selectedJobCircularAsState),
      HEADERS
    );
  };

  const jobCircularPublishActionHandler = (url: string) => {
    const pageStatus = { publishStatus: 'Published' };
    executeJobCircularPublishCommand(url, JSON.stringify(pageStatus), HEADERS);
  };

  const jobCircularDraftActionHandler = (url: string) => {
    const pageStatus = { publishStatus: 'Draft' };
    executeJobCircularDraftCommand(url, JSON.stringify(pageStatus), HEADERS);
  };

  const jobCircularCreateActionHandler = (url: string) => {
    executeJobCircularCreateCommand(
      url,
      JSON.stringify(createJobCircularInputState),
      HEADERS
    );
  };

  useEffect(() => {
    executeReloadJobCircularsQuery(
      `${process.env.REACT_APP_BASE_URL}/api/job-circulars?page=${currentPage}&per_page=${recordPerPage}&search_text=${searchText}`,
      HEADERS
    );
    if (deletedJobCircular) {
      setDeletedJobCircular(null);
      setPageViewUrl(null);
      Swal.fire('Deleted!', 'Your job circular has been deleted.', 'success');
    }
    if (createdJobCircular) {
      setCreateJobCircularInputState(initialCreateJobCircularInputState);
      setCreatedJobCircular(null);
      setCreatePageUrl(null);
      Swal.fire('Created!', 'Your job circular has been created.', 'success');
    }

    if (updatedJobCircular) {
      setUpdatedJobCircular(null);
      setPageUpdateUrl(null);
      setSelectedJobCircularAsState(null);
      Swal.fire('Updated!', 'Your job circular has been updated.', 'success');
    }
    if (publishedJobCircular) {
      updateSelectedJobCircularAsState('publishStatus', 'Published');
      setPublishedJobCircular(null);
      Swal.fire(
        'Published!',
        'Your job circular has been published.',
        'success'
      );
      executeJobCircularQuery(pageViewUrl!, HEADERS);
    }
    if (draftedJobCircular) {
      updateSelectedJobCircularAsState('publishStatus', 'Draft');
      setDraftedJobCircular(null);
      Swal.fire('Draft!', 'Your job circular has been drafted.', 'success');
      executeJobCircularQuery(pageViewUrl!, HEADERS);
    }

    if (jobCircular) {
      setSelectedJobCircularAsState(jobCircular.data);
      setJobCircular(null);
    }
  }, [
    jobCircular,
    deletedJobCircular,
    createdJobCircular,
    updatedJobCircular,
    publishedJobCircular,
    draftedJobCircular,
    pageViewUrl,
    recordPerPage,
    searchText,
    currentPage,
  ]);

  return (
    <div className="">
      <Loading
        isLoading={
          loadingJobCirculars ||
          processingJobCircularDelete ||
          processingJobCircularCreate ||
          processingJobCircularUpdate ||
          processingJobCircularPublish ||
          processingJobCircularDraft ||
          jobCircularLoading
        }
      />
      <MyModal
        openDialogue={pageViewUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setJobCircular(null);
          setSelectedJobCircularAsState(null);
          setPageViewUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Job Circular Details`}</span>
              </div>

              <div className="flex items-center gap-4">
                {selectedJobCircularAsState?.links?.map((link: ILink) => {
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
                                  jobCircularRemoveActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'publish') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: 'You are going to publish this job circular. It will be visible to the public.',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Publish',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  jobCircularPublishActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'draft') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: "You are making this job circular draft, it won't be visible to the public.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Draft',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  jobCircularDraftActionHandler(link.url);
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
                      setJobCircular(null);
                      setSelectedJobCircularAsState(null);
                      setPageViewUrl(null);
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
            <JobCircularSingleView
              jobCircularInputState={selectedJobCircularAsState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}

            {/* End of modal footer */}
          </div>
        </div>
      </MyModal>

      <MyModal
        openDialogue={pageUpdateUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setJobCircular(null);
          setSelectedJobCircularAsState(null);
          setPageUpdateUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Edit Job Circular`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setJobCircular(null);
                    setSelectedJobCircularAsState(null);
                    setPageUpdateUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}
            <JobCircularEditView
              jobCircularInputState={selectedJobCircularAsState}
              errors={updateJobCircularErrors}
              updatePageInputState={updateSelectedJobCircularAsState}
            />

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                onClick={() => {
                  jobCircularUpdateActionHandler(pageUpdateUrl!);
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
        openDialogue={createPageUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setCreatePageUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Create Job Circular`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setCreatePageUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}

            {/* Start of modal body */}
            <JobCircularCreateView
              jobCircularInputState={createJobCircularInputState}
              errors={createJobCircularErrors}
              updatePageInputState={updateCreateJobCircularInputState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
                onClick={() => {
                  jobCircularCreateActionHandler(
                    jobCirculars?.createNew
                      ? jobCirculars.createNew?.url
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
              <p className="text-2xl font-bold">Job Circulars</p>
              <p className="mt-1 font-normal">
                See information about all job circulars
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {jobCirculars?.createNew && (
                <button
                  className="flex items-center gap-3 rounded bg-primary px-4 py-2 text-onPrimary"
                  onClick={() => {
                    setCreatePageUrl(jobCirculars?.createNew?.url!);
                  }}
                >
                  <i className="fa-brands fa-page4"></i>
                  {jobCirculars.createNew.label}
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
                <MySearchInput
                  label="Search"
                  inputRef={searchInputRef}
                  name={''}
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
                {jobCirculars &&
                  jobCirculars.data?.map(
                    (jobCircular: IJobCircular, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="flex w-full flex-col flex-wrap border-b border-blue-gray-50 last:border-b-0 even:bg-blue-gray-600/5 md:table-row"
                        >
                          <td className="border px-2">
                            <label className="md:hidden">Position</label>
                            <p className="font-semibold md:font-normal">
                              {jobCircular.jobPosition}
                            </p>
                          </td>
                          <td className="border px-2">
                            <label className="md:hidden">Vacancy</label>
                            <p className="font-semibold md:font-normal">
                              {jobCircular.totalNumberVacancy}
                            </p>
                          </td>
                          <td className="border px-2">
                            <label className="md:hidden">Education</label>
                            <p className="font-semibold md:font-normal">
                              {jobCircular.educationalRequirement}
                            </p>
                          </td>
                          <td className="border px-2">
                            <label className="md:hidden">Experience</label>
                            <p className="font-semibold md:font-normal">
                              {jobCircular.experienceRequirements}
                            </p>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Deadline</label>
                            <span
                              className={`w-fit rounded-md ${
                                new Date(jobCircular.applicationDeadline) >=
                                new Date()
                                  ? 'bg-green-600'
                                  : 'bg-gray-600'
                              } py-0.5 px-1 text-white shadow`}
                            >
                              {jobCircular.applicationDeadline}
                            </span>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Status</label>
                            <span
                              className={`w-fit rounded-md ${
                                jobCircular.publishStatus !== 'Published'
                                  ? 'bg-orange-600 '
                                  : 'bg-green-600 '
                              } py-0.5 px-1 text-white shadow`}
                            >
                              {jobCircular.publishStatus}
                            </span>
                          </td>

                          <td className="h-full border px-2">
                            <div className="flex h-full">
                              {jobCircular.links?.map(
                                (link: ILink, index: number) => {
                                  if (link) {
                                    return (
                                      <Tooltip content={link.label} key={index}>
                                        <IconButton
                                          variant="text"
                                          onClick={() => {
                                            if (link.rel === 'show') {
                                              executeJobCircularQuery(
                                                link.url,
                                                HEADERS
                                              );
                                              setPageViewUrl(link.url);
                                            }
                                            if (link.rel === 'update') {
                                              executeJobCircularQuery(
                                                link.url,
                                                HEADERS
                                              );
                                              setPageUpdateUrl(link.url);
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
                                                  jobCircularRemoveActionHandler(
                                                    link.url
                                                  );
                                                }
                                              });
                                            }
                                            if (link.rel === 'publish') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: 'You are going to publish this job circular. It will be visible to the public.',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, Make it Publish',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  jobCircularPublishActionHandler(
                                                    link.url
                                                  );
                                                }
                                              });
                                            }
                                            if (link.rel === 'draft') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: "You are making this job circular draft, it won't be visible to the public.",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, Make it Draft',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  jobCircularDraftActionHandler(
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
                    }
                  )}
              </tbody>
            </table>
          </div>
        </div>
        <MyPagination
          currentPage={currentPage}
          meta={jobCirculars?.meta}
          setCurrentPage={setCurrentPage}
        />
      </motion.div>
    </div>
  );
};

export default JobCircularIndexView;
