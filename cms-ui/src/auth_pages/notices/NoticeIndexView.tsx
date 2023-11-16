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
import RecordsPerPage from 'shared/components/data_table/RecordsPerPage';
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
import NoticeCreateView from './NoticeCreateView';
import NoticeEditView from './NoticeEditView';
import NoticeSingleView from './NoticeSingleView';
import { initialCreateNoticeInputState } from './constants/initialCreateNoticeInputState';
import useCreateNoticeInputState from './hooks/useCreateNoticeInputState';
import useSelectedNoticeAsState from './hooks/useSelectedNoticeAsState';

const TABLE_HEAD = ['Title', 'Slug', 'Order', 'Image', 'Status', ''];

const NoticeIndexView: React.FC = () => {
  const [recordPerPage, setRecordPerPage] = useState<string>('10');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [searchText, setSearchText] = useState<string>('');
  const searchInputRef = React.createRef<any>();

  const [createNoticeUrl, setCreateNoticeUrl] = useState<string | null>(null);
  const [noticeUpdateUrl, setNoticeUpdateUrl] = useState<string | null>(null);
  const [noticeViewUrl, setNoticeViewUrl] = useState<string | null>(null);

  const {
    createNoticeInputState,
    setCreateNoticeInputState,
    updateCreateNoticeInputState,
  } = useCreateNoticeInputState();

  const {
    selectedNoticeAsState,
    setSelectedNoticeAsState,
    updateSelectedNoticeAsState,
  } = useSelectedNoticeAsState();

  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const {
    loading: noticeLoading,
    data: notice,
    setData: setNotice,
    executeQuery: executeNoticeQuery,
  } = useQuery<IResponseModel<IPost>>();

  const {
    loading: processingNoticeDelete,
    data: deletedNotice,
    setData: setDeletedNotice,
    executeDeleteCommand: executeNoticeDeleteCommand,
  } = useDeleteCommand<IPost>();

  const {
    loading: processingNoticeUpdate,
    data: updatedNotice,
    setData: setUpdatedNotice,
    error: updateNoticeErrors,
    executeUpdateCommand: executeNoticeUpdateCommand,
  } = useUpdateCommand<IPost>();

  const {
    loading: processingNoticeCreate,
    data: createdNotice,
    setData: setCreatedNotice,
    error: createNoticeErrors,
    executePostCommand: executeNoticeCreateCommand,
  } = usePostCommand<IPost>();

  const {
    loading: processingNoticePublish,
    data: publishedNotice,
    setData: setPublishedNotice,
    executePatchCommand: executeNoticePublishCommand,
  } = usePatchCommand<IPost>();

  const {
    loading: processingNoticeDraft,
    data: draftedNotice,
    setData: setDraftedNotice,
    executePatchCommand: executeNoticeDraftCommand,
  } = usePatchCommand<IPost>();

  const {
    loading: loadingNotices,
    data: notices,
    executeQuery: executeReloadNoticesQuery,
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

  const noticeRemoveActionHandler = (url: string) => {
    executeNoticeDeleteCommand(url, HEADERS);
  };

  const noticeUpdateActionHandler = (url: string) => {
    executeNoticeUpdateCommand(
      url,
      JSON.stringify(selectedNoticeAsState),
      HEADERS
    );
  };

  const noticePublishActionHandler = (url: string) => {
    const noticeStatus = { publishStatus: 'Published' };
    executeNoticePublishCommand(url, JSON.stringify(noticeStatus), HEADERS);
  };

  const noticeDraftActionHandler = (url: string) => {
    const noticeStatus = { publishStatus: 'Draft' };
    executeNoticeDraftCommand(url, JSON.stringify(noticeStatus), HEADERS);
  };

  const noticeCreateActionHandler = (url: string) => {
    executeNoticeCreateCommand(
      url,
      JSON.stringify(createNoticeInputState),
      HEADERS
    );
  };

  useEffect(() => {
    executeReloadNoticesQuery(
      `${process.env.REACT_APP_BASE_URL}/api/notices?page=${currentPage}&per_page=${recordPerPage}&search_text=${searchText}`,
      HEADERS
    );
    if (deletedNotice) {
      setDeletedNotice(null);
      setNoticeViewUrl(null);
      Swal.fire('Deleted!', 'Your notice has been deleted.', 'success');
    }
    if (createdNotice) {
      setCreateNoticeInputState(initialCreateNoticeInputState);
      setCreatedNotice(null);
      setCreateNoticeUrl(null);
      Swal.fire('Created!', 'Your notice has been created.', 'success');
    }

    if (updatedNotice) {
      setUpdatedNotice(null);
      setNoticeUpdateUrl(null);
      setSelectedNoticeAsState(null);
      Swal.fire('Updated!', 'Your notice has been updated.', 'success');
    }
    if (publishedNotice) {
      updateSelectedNoticeAsState('publishStatus', 'Published');
      setPublishedNotice(null);
      Swal.fire('Published!', 'Your notice has been published.', 'success');
      executeNoticeQuery(noticeViewUrl!, HEADERS);
    }
    if (draftedNotice) {
      updateSelectedNoticeAsState('publishStatus', 'Draft');
      setDraftedNotice(null);
      Swal.fire('Draft!', 'Your notice has been drafted.', 'success');
      executeNoticeQuery(noticeViewUrl!, HEADERS);
    }

    if (notice) {
      setSelectedNoticeAsState(notice.data);
      setNotice(null);
    }
  }, [
    notice,
    deletedNotice,
    createdNotice,
    updatedNotice,
    publishedNotice,
    draftedNotice,
    noticeViewUrl,
    recordPerPage,
    searchText,
    currentPage,
  ]);

  return (
    <div className="">
      <Loading
        isLoading={
          loadingNotices ||
          processingNoticeDelete ||
          processingNoticeCreate ||
          processingNoticeUpdate ||
          processingNoticePublish ||
          processingNoticeDraft ||
          noticeLoading
        }
      />
      <MyModal
        openDialogue={noticeViewUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setNotice(null);
          setSelectedNoticeAsState(null);
          setNoticeViewUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Notice Details`}</span>
              </div>

              <div className="flex items-center gap-4">
                {selectedNoticeAsState?.links?.map((link: ILink) => {
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
                                  noticeRemoveActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'publish') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: 'You are going to publish this notice. It will be visible to the public.',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Publish',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  noticePublishActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'draft') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: "You are making this notice draft, it won't be visible to the public.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Draft',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  noticeDraftActionHandler(link.url);
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
                      setNotice(null);
                      setSelectedNoticeAsState(null);
                      setNoticeViewUrl(null);
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
            <NoticeSingleView noticeInputState={selectedNoticeAsState} />
            {/* Start of modal body */}

            {/* Start of modal footer */}

            {/* End of modal footer */}
          </div>
        </div>
      </MyModal>

      <MyModal
        openDialogue={noticeUpdateUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setNotice(null);
          setSelectedNoticeAsState(null);
          setNoticeUpdateUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Edit Notice`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setNotice(null);
                    setSelectedNoticeAsState(null);
                    setNoticeUpdateUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}
            <NoticeEditView
              noticeInputState={selectedNoticeAsState}
              errors={updateNoticeErrors}
              updateNoticeInputState={updateSelectedNoticeAsState}
            />

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                onClick={() => {
                  noticeUpdateActionHandler(noticeUpdateUrl!);
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
        openDialogue={createNoticeUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setCreateNoticeUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Create Notice`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setCreateNoticeUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}

            {/* Start of modal body */}
            <NoticeCreateView
              noticeInputState={createNoticeInputState}
              errors={createNoticeErrors}
              updateNoticeInputState={updateCreateNoticeInputState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
                onClick={() => {
                  noticeCreateActionHandler(
                    notices?.createNew ? notices.createNew?.url : 'Unauthorized'
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
              <p className="text-2xl font-bold">Notices</p>
              <p className="mt-1 font-normal">
                See information about all notices
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {notices?.createNew && (
                <button
                  className="flex items-center gap-3 rounded bg-primary px-4 py-2 text-onPrimary"
                  onClick={() => {
                    setCreateNoticeUrl(notices?.createNew?.url!);
                  }}
                >
                  <i className="fa-brands fa-notice4"></i>
                  {notices.createNew.label}
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
                {notices &&
                  notices.data?.map((notice: IPost, index: number) => {
                    return (
                      <tr
                        key={index}
                        className="flex w-full flex-col flex-wrap border-b border-blue-gray-50 last:border-b-0 even:bg-blue-gray-600/5 md:table-row"
                      >
                        <td className="border px-2">
                          <label className="md:hidden">Title</label>
                          <p className="font-semibold md:font-normal">
                            {notice.title}
                          </p>
                        </td>
                        <td className="border px-2">
                          <label className="md:hidden">Slug</label>
                          <p className="font-semibold md:font-normal">
                            {notice.slug}
                          </p>
                        </td>
                        <td className="border px-2">
                          <label className="md:hidden">Order</label>
                          <p className="font-semibold md:font-normal">
                            {notice.order}
                          </p>
                        </td>

                        <td className="border px-2">
                          <label className="md:hidden">Image</label>
                          <img
                            src={
                              notice.thumbnailAttachmentUrl
                                ? notice.thumbnailAttachmentUrl
                                : originalLogo
                            }
                            alt={notice.title}
                            className="h-10 w-10 rounded-full"
                          />
                        </td>
                        <td className="border px-2">
                          <label className="md:hidden">Status</label>
                          <span
                            className={`w-fit rounded-md ${
                              notice.publishStatus !== 'Published'
                                ? 'bg-orange-600 '
                                : 'bg-green-600 '
                            } py-0.5 px-1 text-white shadow`}
                          >
                            {notice.publishStatus}
                          </span>
                        </td>

                        <td className="h-full border px-2">
                          <div className="flex h-full">
                            {notice.links?.map((link: ILink, index: number) => {
                              if (link) {
                                return (
                                  <Tooltip content={link.label} key={index}>
                                    <IconButton
                                      variant="text"
                                      onClick={() => {
                                        if (link.rel === 'show') {
                                          executeNoticeQuery(link.url, HEADERS);
                                          setNoticeViewUrl(link.url);
                                        }
                                        if (link.rel === 'update') {
                                          executeNoticeQuery(link.url, HEADERS);
                                          setNoticeUpdateUrl(link.url);
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
                                              noticeRemoveActionHandler(
                                                link.url
                                              );
                                            }
                                          });
                                        }
                                        if (link.rel === 'publish') {
                                          Swal.fire({
                                            title: 'Are you sure?',
                                            text: 'You are going to publish this notice. It will be visible to the public.',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#222d67',
                                            cancelButtonColor: '#b12e06',
                                            confirmButtonText:
                                              'Yes, Make it Publish',
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                              noticePublishActionHandler(
                                                link.url
                                              );
                                            }
                                          });
                                        }
                                        if (link.rel === 'draft') {
                                          Swal.fire({
                                            title: 'Are you sure?',
                                            text: "You are making this notice draft, it won't be visible to the public.",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#222d67',
                                            cancelButtonColor: '#b12e06',
                                            confirmButtonText:
                                              'Yes, Make it Draft',
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                              noticeDraftActionHandler(
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
                            })}
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
          meta={notices?.meta}
          setCurrentPage={setCurrentPage}
        />
      </motion.div>
    </div>
  );
};

export default NoticeIndexView;
