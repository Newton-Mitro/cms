import { IconButton, Tooltip, Typography } from '@material-tailwind/react';
import originalLogo from 'assets/brand/logo_original.png';
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
import { ILink } from 'shared/interfaces/ILink';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';
import Swal from 'sweetalert2';
import RecordsPerPage from '../../shared/components/data_table/RecordsPerPage';
import LoanProductCreateView from './LoanProductCreateView';
import LoanProductEditView from './LoanProductEditView';
import LoanProductSingleView from './LoanProductSingleView';
import { initialCreateLoanProductInputState } from './constants/initialCreateLoanProductInputState';
import useCreateLoanProductInputState from './hooks/useCreateLoanProductInputState';
import useSelectedLoanProductAsState from './hooks/useSelectedLoanProductAsState';

const TABLE_HEAD = ['Title', 'Slug', 'Order', 'Image', 'Status', ''];

const LoanProductIndexView: React.FC = () => {
  const [recordPerPage, setRecordPerPage] = useState<string>('10');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [searchText, setSearchText] = useState<string>('');
  const searchInputRef = React.createRef<any>();

  const [createPageUrl, setCreatePageUrl] = useState<string | null>(null);
  const [pageUpdateUrl, setPageUpdateUrl] = useState<string | null>(null);
  const [pageViewUrl, setPageViewUrl] = useState<string | null>(null);

  const {
    createLoanProductInputState,
    setCreateLoanProductInputState,
    updateCreateLoanProductInputState,
  } = useCreateLoanProductInputState();

  const {
    selectedLoanProductAsState,
    setSelectedLoanProductAsState,
    updateSelectedLoanProductAsState,
  } = useSelectedLoanProductAsState();

  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const {
    loading: loanProductLoading,
    data: loanProduct,
    setData: setLoanProduct,
    executeQuery: executeLoanProductQuery,
  } = useQuery<IResponseModel<IPost>>();

  const {
    loading: processingLoanProductDelete,
    data: deletedLoanProduct,
    setData: setDeletedLoanProduct,
    executeDeleteCommand: executeLoanProductDeleteCommand,
  } = useDeleteCommand<IPost>();

  const {
    loading: processingLoanProductUpdate,
    data: updatedLoanProduct,
    setData: setUpdatedLoanProduct,
    error: updateLoanProductErrors,
    executeUpdateCommand: executeLoanProductUpdateCommand,
  } = useUpdateCommand<IPost>();

  const {
    loading: processingLoanProductCreate,
    data: createdLoanProduct,
    setData: setCreatedLoanProduct,
    error: createLoanProductErrors,
    executePostCommand: executeLoanProductCreateCommand,
  } = usePostCommand<IPost>();

  const {
    loading: processingLoanProductPublish,
    data: publishedLoanProduct,
    setData: setPublishedLoanProduct,
    executePatchCommand: executeLoanProductPublishCommand,
  } = usePatchCommand<IPost>();

  const {
    loading: processingLoanProductDraft,
    data: draftedLoanProduct,
    setData: setDraftedLoanProduct,
    executePatchCommand: executeLoanProductDraftCommand,
  } = usePatchCommand<IPost>();

  const {
    loading: loadingLoanProducts,
    data: loanProducts,
    executeQuery: executeReloadLoanProductsQuery,
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

  const loanProductRemoveActionHandler = (url: string) => {
    executeLoanProductDeleteCommand(url, HEADERS);
  };

  const loanProductUpdateActionHandler = (url: string) => {
    executeLoanProductUpdateCommand(
      url,
      JSON.stringify(selectedLoanProductAsState),
      HEADERS
    );
  };

  const loanProductPublishActionHandler = (url: string) => {
    const pageStatus = { publishStatus: 'Published' };
    executeLoanProductPublishCommand(url, JSON.stringify(pageStatus), HEADERS);
  };

  const loanProductDraftActionHandler = (url: string) => {
    const pageStatus = { publishStatus: 'Draft' };
    executeLoanProductDraftCommand(url, JSON.stringify(pageStatus), HEADERS);
  };

  const loanProductCreateActionHandler = (url: string) => {
    executeLoanProductCreateCommand(
      url,
      JSON.stringify(createLoanProductInputState),
      HEADERS
    );
  };

  useEffect(() => {
    executeReloadLoanProductsQuery(
      `${process.env.REACT_APP_BASE_URL}/api/loan-products?page=${currentPage}&per_page=${recordPerPage}&search_text=${searchText}`,
      HEADERS
    );
    if (deletedLoanProduct) {
      setDeletedLoanProduct(null);
      setPageViewUrl(null);
      Swal.fire('Deleted!', 'Your loan product has been deleted.', 'success');
    }
    if (createdLoanProduct) {
      setCreateLoanProductInputState(initialCreateLoanProductInputState);
      setCreatedLoanProduct(null);
      setCreatePageUrl(null);
      Swal.fire('Created!', 'Your loan product has been created.', 'success');
    }

    if (updatedLoanProduct) {
      setUpdatedLoanProduct(null);
      setPageUpdateUrl(null);
      setSelectedLoanProductAsState(null);
      Swal.fire('Updated!', 'Your loan product has been updated.', 'success');
    }
    if (publishedLoanProduct) {
      updateSelectedLoanProductAsState('publishStatus', 'Published');
      setPublishedLoanProduct(null);
      Swal.fire(
        'Published!',
        'Your loan product has been published.',
        'success'
      );
      executeLoanProductQuery(pageViewUrl!, HEADERS);
    }
    if (draftedLoanProduct) {
      updateSelectedLoanProductAsState('publishStatus', 'Draft');
      setDraftedLoanProduct(null);
      Swal.fire('Draft!', 'Your loan product has been drafted.', 'success');
      executeLoanProductQuery(pageViewUrl!, HEADERS);
    }

    if (loanProduct) {
      setSelectedLoanProductAsState(loanProduct.data);
      setLoanProduct(null);
    }
  }, [
    loanProduct,
    deletedLoanProduct,
    createdLoanProduct,
    updatedLoanProduct,
    publishedLoanProduct,
    draftedLoanProduct,
    pageViewUrl,
    recordPerPage,
    searchText,
    currentPage,
  ]);

  return (
    <div className="">
      <Loading
        isLoading={
          loadingLoanProducts ||
          processingLoanProductDelete ||
          processingLoanProductCreate ||
          processingLoanProductUpdate ||
          processingLoanProductPublish ||
          processingLoanProductDraft ||
          loanProductLoading
        }
      />
      <MyModal
        openDialogue={pageViewUrl ? true : false}
        size={Size.Medium}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setLoanProduct(null);
          setSelectedLoanProductAsState(null);
          setPageViewUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Loan Product Details`}</span>
              </div>

              <div className="flex items-center gap-4">
                {selectedLoanProductAsState?.links?.map((link: ILink) => {
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
                                  loanProductRemoveActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'publish') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: 'You are going to publish this loan product. It will be visible to the public.',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Publish',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  loanProductPublishActionHandler(link.url);
                                }
                              });
                            }
                            if (link.rel === 'draft') {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: "You are making this loan product draft, it won't be visible to the public.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#222d67',
                                cancelButtonColor: '#b12e06',
                                confirmButtonText: 'Yes, Make it Draft',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  loanProductDraftActionHandler(link.url);
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
                      setLoanProduct(null);
                      setSelectedLoanProductAsState(null);
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
            <LoanProductSingleView
              pageInputState={selectedLoanProductAsState}
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
          setLoanProduct(null);
          setSelectedLoanProductAsState(null);
          setPageUpdateUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Edit Loan Product`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setLoanProduct(null);
                    setSelectedLoanProductAsState(null);
                    setPageUpdateUrl(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}
            <LoanProductEditView
              pageInputState={selectedLoanProductAsState}
              errors={updateLoanProductErrors}
              updatePageInputState={updateSelectedLoanProductAsState}
            />

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                onClick={() => {
                  loanProductUpdateActionHandler(pageUpdateUrl!);
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
                <span className="ml-3 text-xl font-semibold">{`Create Loan Product`}</span>
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
            <LoanProductCreateView
              pageInputState={createLoanProductInputState}
              errors={createLoanProductErrors}
              updatePageInputState={updateCreateLoanProductInputState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
                onClick={() => {
                  loanProductCreateActionHandler(
                    loanProducts?.createNew
                      ? loanProducts.createNew?.url
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
              <p className="text-2xl font-bold">Loan Products</p>
              <p className="mt-1 font-normal">
                See information about all loan products
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {loanProducts?.createNew && (
                <button
                  className="flex items-center gap-3 rounded bg-primary px-4 py-2 text-onPrimary"
                  onClick={() => {
                    setCreatePageUrl(loanProducts?.createNew?.url!);
                  }}
                >
                  <i className="fa-brands fa-page4"></i>
                  {loanProducts.createNew.label}
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
                {loanProducts &&
                  loanProducts.data?.map(
                    (loanProduct: IPost, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="flex w-full flex-col flex-wrap border-b border-blue-gray-50 last:border-b-0 even:bg-blue-gray-600/5 md:table-row"
                        >
                          <td className="border px-2">
                            <label className="md:hidden">Title</label>
                            <p className="font-semibold md:font-normal">
                              {loanProduct.title}
                            </p>
                          </td>
                          <td className="border px-2">
                            <label className="md:hidden">Slug</label>
                            <p className="font-semibold md:font-normal">
                              {loanProduct.slug}
                            </p>
                          </td>
                          <td className="border px-2">
                            <label className="md:hidden">Order</label>
                            <p className="font-semibold md:font-normal">
                              {loanProduct.order}
                            </p>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Image</label>
                            <img
                              src={
                                loanProduct.thumbnailAttachmentUrl
                                  ? loanProduct.thumbnailAttachmentUrl
                                  : originalLogo
                              }
                              alt={loanProduct.title}
                              className="h-10 w-10 rounded-full"
                            />
                          </td>
                          <td className="border px-2">
                            <label className="md:hidden">Status</label>
                            <span
                              className={`w-fit rounded-md ${
                                loanProduct.publishStatus !== 'Published'
                                  ? 'bg-orange-600 '
                                  : 'bg-green-600 '
                              } py-0.5 px-1 text-white shadow`}
                            >
                              {loanProduct.publishStatus}
                            </span>
                          </td>

                          <td className="h-full border px-2">
                            <div className="flex h-full">
                              {loanProduct.links?.map(
                                (link: ILink, index: number) => {
                                  if (link) {
                                    return (
                                      <Tooltip content={link.label} key={index}>
                                        <IconButton
                                          variant="text"
                                          onClick={() => {
                                            if (link.rel === 'show') {
                                              executeLoanProductQuery(
                                                link.url,
                                                HEADERS
                                              );
                                              setPageViewUrl(link.url);
                                            }
                                            if (link.rel === 'update') {
                                              executeLoanProductQuery(
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
                                                  loanProductRemoveActionHandler(
                                                    link.url
                                                  );
                                                }
                                              });
                                            }
                                            if (link.rel === 'publish') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: 'You are going to publish this loan product. It will be visible to the public.',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, Make it Publish',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  loanProductPublishActionHandler(
                                                    link.url
                                                  );
                                                }
                                              });
                                            }
                                            if (link.rel === 'draft') {
                                              Swal.fire({
                                                title: 'Are you sure?',
                                                text: "You are making this loan product draft, it won't be visible to the public.",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#222d67',
                                                cancelButtonColor: '#b12e06',
                                                confirmButtonText:
                                                  'Yes, Make it Draft',
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  loanProductDraftActionHandler(
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
          meta={loanProducts?.meta}
          setCurrentPage={setCurrentPage}
        />
      </motion.div>
    </div>
  );
};

export default LoanProductIndexView;
