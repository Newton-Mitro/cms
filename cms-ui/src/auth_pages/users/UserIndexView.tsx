import { IconButton, Tooltip, Typography } from '@material-tailwind/react';
import originalLogo from 'assets/brand/logo_original.png';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import MySearchInput from 'shared/components/MySearchInput';
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
import { IResponseModel } from 'shared/interfaces/IResponseModel';
import { IUser } from 'shared/interfaces/IUser';
import Swal from 'sweetalert2';
import UserCreateView from './UserCreateView';
import UserEditView from './UserEditView';
import UserSingleView from './UserSingleView';
import { initialCreateUserInputState } from './constants/initialCreateUserInputState';
import useCreateUserInputState from './hooks/useCreateUserInputState';
import useSelectedUserAsState from './hooks/useSelectedUserAsState';

const TABLE_HEAD = ['Image', 'Name', 'Email', 'Phone', 'Role', 'Status', ''];

const UserIndexView: React.FC = () => {
  const [recordPerPage, setRecordPerPage] = useState<string>('10');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [searchText, setSearchText] = useState<string>('');
  const searchInputRef = React.createRef<any>();

  const [createUserUrl, setCreateUserUrl] = useState<string | null>(null);
  const [pageUpdateUrl, setUserUpdateUrl] = useState<string | null>(null);
  const [pageViewUrl, setUserViewUrl] = useState<string | null>(null);

  const {
    createUserInputState,
    setCreateUserInputState,
    updateCreateUserInputState,
  } = useCreateUserInputState();

  const {
    selectedUserAsState,
    setSelectedUserAsState,
    updateSelectedUserAsState,
  } = useSelectedUserAsState();

  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const {
    loading: pageLoading,
    data: page,
    setData: setUser,
    executeQuery: executeUserQuery,
  } = useQuery<IResponseModel<IUser>>();

  const {
    loading: processingUserDelete,
    data: deletedUser,
    setData: setDeletedUser,
    executeDeleteCommand: executeUserDeleteCommand,
  } = useDeleteCommand<IUser>();

  const {
    loading: processingUserUpdate,
    data: updatedUser,
    setData: setUpdatedUser,
    error: pageUpdateError,
    setError: setUserUpdateError,
    executeUpdateCommand: executeUserUpdateCommand,
  } = useUpdateCommand<IUser>();

  const {
    loading: processingUserCreate,
    data: createdUser,
    setData: setCreatedUser,
    error: pageCreationError,
    setError: setUserCreationError,
    executePostCommand: executeUserCreateCommand,
  } = usePostCommand<IUser>();

  const {
    loading: activatingUser,
    data: activatedUser,
    setData: setActivatedUser,
    executePatchCommand: executeUserActivationCommand,
  } = usePatchCommand<IUser>();

  const {
    loading: deactivatingUser,
    data: deactivatedUser,
    setData: setDeactivatedUser,
    executePatchCommand: executeUserDeactivatingCommand,
  } = usePatchCommand<IUser>();

  const {
    loading: loadingUsers,
    data: users,
    executeQuery: executeReloadUsersQuery,
  } = useQuery<IResponseModel<IUser[]>>();

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

  const userRemoveActionHandler = (url: string) => {
    executeUserDeleteCommand(url, HEADERS);
  };

  const userUpdateActionHandler = (url: string) => {
    console.log(url, JSON.stringify(selectedUserAsState), HEADERS);

    executeUserUpdateCommand(url, JSON.stringify(selectedUserAsState), HEADERS);
  };

  const accountInactivateActionHandler = (url: string) => {
    const userStatus = { publishStatus: false };
    executeUserDeactivatingCommand(url, JSON.stringify(userStatus), HEADERS);
  };

  const accountActivateActionHandler = (url: string) => {
    const userStatus = { publishStatus: true };
    executeUserActivationCommand(url, JSON.stringify(userStatus), HEADERS);
  };

  const pageCreateActionHandler = (url: string) => {
    executeUserCreateCommand(
      url,
      JSON.stringify(createUserInputState),
      HEADERS
    );
  };

  useEffect(() => {
    executeReloadUsersQuery(
      `${process.env.REACT_APP_BASE_URL}/api/users?page=${currentPage}&per_page=${recordPerPage}&search_text=${searchText}`,
      HEADERS
    );
    if (deletedUser) {
      setDeletedUser(null);
      setUserViewUrl(null);
      Swal.fire('Deleted!', 'An user has been deleted.', 'success');
    }
    if (createdUser) {
      setUserCreationError(null);
      setCreateUserInputState(initialCreateUserInputState);
      setCreatedUser(null);
      setCreateUserUrl(null);
      Swal.fire('Created!', 'An user has been created.', 'success');
    }

    if (updatedUser) {
      setUserUpdateError(null);
      setUpdatedUser(null);
      setUserUpdateUrl(null);
      setSelectedUserAsState(null);
      Swal.fire('Updated!', 'An user has been updated.', 'success');
    }
    if (activatedUser) {
      updateSelectedUserAsState('publishStatus', true);
      setActivatedUser(null);
      Swal.fire('Activated!', 'An user has been activated.', 'success');
      executeUserQuery(pageViewUrl!, HEADERS);
    }
    if (deactivatedUser) {
      updateSelectedUserAsState('publishStatus', false);
      setDeactivatedUser(null);
      Swal.fire('Deactivated!', 'An user has been deactivated.', 'success');
      executeUserQuery(pageViewUrl!, HEADERS);
    }

    if (page) {
      setSelectedUserAsState(page.data);
      setUser(null);
    }
  }, [
    page,
    deletedUser,
    createdUser,
    updatedUser,
    activatedUser,
    deactivatedUser,
    pageViewUrl,
    currentPage,
    recordPerPage,
    searchText,
  ]);

  return (
    <div className="">
      <Loading
        isLoading={
          loadingUsers ||
          processingUserDelete ||
          processingUserCreate ||
          processingUserUpdate ||
          activatingUser ||
          deactivatingUser ||
          pageLoading
        }
      />
      <MyModal
        openDialogue={pageViewUrl ? true : false}
        size={Size.Small}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setUser(null);
          setSelectedUserAsState(null);
          setUserViewUrl(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`User Details`}</span>
              </div>

              <div className="flex items-center gap-4">
                {selectedUserAsState?.links?.map(
                  (link: ILink, index: number) => {
                    if (
                      link?.rel === 'destroy' ||
                      link?.rel === 'inactive' ||
                      link?.rel === 'active'
                    ) {
                      return (
                        <Tooltip content={link.label} key={index}>
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
                                    userRemoveActionHandler(link.url);
                                  }
                                });
                              }
                              if (link.rel === 'inactive') {
                                Swal.fire({
                                  title: 'Are you sure?',
                                  text: 'You are going to activate this account. User will be able to login and perform actions.',
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#222d67',
                                  cancelButtonColor: '#b12e06',
                                  confirmButtonText: 'Yes, Make it Active',
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    accountActivateActionHandler(link.url);
                                  }
                                });
                              }
                              if (link.rel === 'active') {
                                Swal.fire({
                                  title: 'Are you sure?',
                                  text: "You are going to make this account inactive, User won't be able to login and perform any actions.",
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#222d67',
                                  cancelButtonColor: '#b12e06',
                                  confirmButtonText: 'Yes, Make it Inactive',
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    accountInactivateActionHandler(link.url);
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

                <Tooltip content={'Close'}>
                  <IconButton
                    variant="text"
                    onClick={() => {
                      setUser(null);
                      setSelectedUserAsState(null);
                      setUserViewUrl(null);
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
            <UserSingleView pageInputState={selectedUserAsState} />
            {/* Start of modal body */}
          </div>
        </div>
      </MyModal>

      <MyModal
        openDialogue={pageUpdateUrl ? true : false}
        size={Size.Small}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setUser(null);
          setSelectedUserAsState(null);
          setUserUpdateUrl(null);
          setUserUpdateError(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Edit User`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setUser(null);
                    setSelectedUserAsState(null);
                    setUserUpdateUrl(null);
                    setUserUpdateError(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}

            {/* Start of modal body */}
            <UserEditView
              pageInputState={selectedUserAsState}
              errors={pageUpdateError}
              updateUserInputState={updateSelectedUserAsState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                onClick={() => {
                  userUpdateActionHandler(pageUpdateUrl!);
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
        openDialogue={createUserUrl ? true : false}
        size={Size.Small}
        variants={MyVariants.SlideInFromLeft}
        onClose={() => {
          setCreateUserUrl(null);
          setUserCreationError(null);
        }}
      >
        <div className="max-h-screen w-full text-onSurface dark:text-gray-200">
          <div className="relative flex flex-col overflow-hidden rounded shadow-sm hover:shadow">
            {/* Start of modal header */}
            <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:bg-blue-gray-900">
              <div className="flex items-center">
                <i className="fa-solid fa-circle-info fa-lg"></i>
                <span className="ml-3 text-xl font-semibold">{`Create User`}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-error"
                  onClick={() => {
                    setCreateUserUrl(null);
                    setUserCreationError(null);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                </button>
              </div>
            </div>
            <div className="flex h-1 space-x-4 overflow-auto border-b border-gray-200 bg-secondary px-4"></div>
            {/* End of modal header */}

            {/* Start of modal body */}
            <UserCreateView
              pageInputState={createUserInputState}
              errors={pageCreationError}
              updateUserInputState={updateCreateUserInputState}
            />
            {/* Start of modal body */}

            {/* Start of modal footer */}
            <div className="flex items-center justify-end gap-4 bg-surface py-2 px-4 dark:bg-blue-gray-900">
              <button
                className="rounded bg-primary px-4 py-2 text-onPrimary shadow-sm transition-all duration-150 hover:scale-105 hover:bg-primaryVariant hover:shadow"
                onClick={() => {
                  pageCreateActionHandler(
                    users?.createNew ? users.createNew?.url : 'Unauthorized'
                  );
                }}
              >
                Store
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
              <p className="text-2xl font-bold">Users</p>
              <p className="mt-1 font-normal">
                See information about all users
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {users?.createNew && (
                <button
                  className="flex items-center gap-3 rounded bg-primary px-4 py-2 text-onPrimary"
                  onClick={() => {
                    setCreateUserUrl(users?.createNew?.url!);
                  }}
                >
                  <i className="fa-brands fa-page4"></i>
                  {users.createNew.label}
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
                {users &&
                  users.data?.map((user: IUser, index: number) => {
                    if (
                      user.role !== 'Super Admin' ||
                      authUser?.user.role === 'Super Admin'
                    ) {
                      return (
                        <tr
                          key={index}
                          className="flex w-full flex-col flex-wrap border-b border-blue-gray-50 last:border-b-0 even:bg-blue-gray-600/5 md:table-row"
                        >
                          <td className="border px-2">
                            <label className="md:hidden">Photo</label>
                            <img
                              src={user.photo ? user.photo : originalLogo}
                              alt={user.name}
                              className="h-10 w-10 rounded-full"
                            />
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Name</label>
                            <p className="font-semibold md:font-normal">
                              {user.name}
                            </p>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Email</label>
                            <p className="font-semibold md:font-normal">
                              {user.email}
                            </p>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Phone</label>
                            <p className="font-semibold md:font-normal">
                              {user.phone}
                            </p>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Role</label>
                            <span
                              className={`w-fit rounded-md py-0.5 
                              ${user.role === 'Super Admin' && 'bg-red-600'} 
                              ${user.role === 'Admin' && 'bg-orange-600'} 
                              ${
                                user.role === 'Content Manager' && 'bg-blue-600'
                              } 
                              ${
                                user.role === 'Content Creator' && 'bg-gray-600'
                              } 
                              ${user.role === 'Visitor' && 'bg-green-600'} 
                              px-1 text-white`}
                            >
                              {user.role}
                            </span>
                          </td>

                          <td className="border px-2">
                            <label className="md:hidden">Status</label>
                            <span
                              className={`w-fit rounded-md py-0.5 
                              ${user.status ? 'bg-green-600' : 'bg-red-600'} 
                              px-1 text-white hover:cursor-pointer hover:shadow`}
                            >
                              {user.status ? 'Active' : 'Inactive'}
                            </span>
                          </td>

                          <td className="h-full border px-2">
                            <div className="flex h-full">
                              {user.links?.map((link: ILink) => {
                                if (link) {
                                  return (
                                    <Tooltip content={link.label}>
                                      <IconButton
                                        variant="text"
                                        onClick={() => {
                                          if (link.rel === 'show') {
                                            executeUserQuery(link.url, HEADERS);
                                            setUserViewUrl(link.url);
                                          }
                                          if (link.rel === 'update') {
                                            executeUserQuery(link.url, HEADERS);
                                            setUserUpdateUrl(link.url);
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
                                                userRemoveActionHandler(
                                                  link.url
                                                );
                                              }
                                            });
                                          }
                                          if (link.rel === 'inactive') {
                                            Swal.fire({
                                              title: 'Are you sure?',
                                              text: 'You are going to activate this account. User will be able to login and perform actions.',
                                              icon: 'warning',
                                              showCancelButton: true,
                                              confirmButtonColor: '#222d67',
                                              cancelButtonColor: '#b12e06',
                                              confirmButtonText:
                                                'Yes, Make it Active',
                                            }).then((result) => {
                                              if (result.isConfirmed) {
                                                accountActivateActionHandler(
                                                  link.url
                                                );
                                              }
                                            });
                                          }
                                          if (link.rel === 'active') {
                                            Swal.fire({
                                              title: 'Are you sure?',
                                              text: "You are going to make this account inactive, User won't be able to login and perform any actions.",
                                              icon: 'warning',
                                              showCancelButton: true,
                                              confirmButtonColor: '#222d67',
                                              cancelButtonColor: '#b12e06',
                                              confirmButtonText:
                                                'Yes, Make it Inactive',
                                            }).then((result) => {
                                              if (result.isConfirmed) {
                                                accountInactivateActionHandler(
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
                    } else {
                      return null;
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <MyPagination
          currentPage={currentPage}
          meta={users?.meta}
          setCurrentPage={setCurrentPage}
        />
      </motion.div>
    </div>
  );
};

export default UserIndexView;
