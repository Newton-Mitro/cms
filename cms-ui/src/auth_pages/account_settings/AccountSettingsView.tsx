import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import useSelectedUserAsState from 'auth_pages/users/hooks/useSelectedUserAsState';
import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from 'shared/components/Loading';
import MyImageInput from 'shared/components/MyImageInput';
import MyPasswordInput from 'shared/components/MyPasswordInput';
import MyTextInput from 'shared/components/MyTextInput';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import useUpdateCommand from 'shared/hooks/useUpdateCommand';
import { IUser } from 'shared/interfaces/IUser';
import Swal from 'sweetalert2';

const AccountSettingsView = () => {
  const navigate = useNavigate();
  const successToastMessage = (message: any) => toast.error(message);
  const { authUser, storeAuthUserData, clearAuthUserData } =
    useContext<AuthUserContextType>(AuthUserContext);
  const {
    selectedUserAsState,
    setSelectedUserAsState,
    updateSelectedUserAsState,
  } = useSelectedUserAsState();

  const HEADERS = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authUser?.access_token}`,
    },
  };

  const {
    loading: processingUserUpdate,
    data: updatedUser,
    setData: setUpdatedUser,
    error: pageUpdateError,
    setError: setUserUpdateError,
    executeUpdateCommand: executeUserUpdateCommand,
  } = useUpdateCommand<any>();

  const {
    loading: processingUserPasswordChange,
    data: passwordChangedUser,
    setData: setPasswordChangedUser,
    error: passwordChangedError,
    setError: setPasswordChangedError,
    executeUpdateCommand: executePasswordChangedCommand,
  } = useUpdateCommand<IUser>();

  const updateProfileActionHandler = () => {
    executeUserUpdateCommand(
      `${process.env.REACT_APP_BASE_URL}/api/users/updateProfile/${selectedUserAsState?.id}`,
      JSON.stringify(selectedUserAsState),
      HEADERS
    );
  };

  const changePasswordActionHandler = () => {
    executePasswordChangedCommand(
      `${process.env.REACT_APP_BASE_URL}/api/users/changePassword/${selectedUserAsState?.id}`,
      JSON.stringify(selectedUserAsState),
      HEADERS
    );
  };

  useEffect(() => {
    if (authUser) {
      setSelectedUserAsState(authUser.user);
    }
  }, []);

  useEffect(() => {
    if (passwordChangedUser) {
      successToastMessage('Password has been changed. Please, login again.');
      clearAuthUserData();
      navigate('/');
    }

    if (updatedUser) {
      const temp = authUser;
      console.log(updatedUser?.data);

      if (temp) {
        temp.user = updatedUser?.data;
        storeAuthUserData({ ...temp });
      }

      setUserUpdateError(null);
      setUpdatedUser(null);
      Swal.fire('Updated!', 'An user profile has been updated.', 'success');
    }
  }, [updatedUser, passwordChangedUser]);

  console.log(selectedUserAsState);

  const [activeTab, setActiveTab] = React.useState('profile');
  const data = [
    {
      label: 'Profile',
      value: 'profile',
      desc: (
        <div className="max-w-3xl">
          <div className="mx-auto flex w-full overflow-hidden rounded rounded-b-none bg-white dark:bg-blue-gray-900">
            <div className="hidden w-1/3 bg-blue-gray-100 p-8 dark:bg-gray-900 md:inline-block">
              <h2 className="text-md mb-4 font-medium tracking-wide text-gray-800 dark:text-gray-400">
                Profile Info
              </h2>
              <img
                src={selectedUserAsState?.photo}
                alt=""
                className="h-20 w-20 rounded-full"
              />
              <div className="my-3">
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {selectedUserAsState?.name}
                </p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Update your basic profile information such as Email Address,
                Name, and Image.
              </p>
            </div>
            <div className="w-full py-6 md:w-2/3">
              <div className="py-4 px-6 md:px-16">
                <MyTextInput
                  label={'User Name'}
                  name={'name'}
                  error={pageUpdateError?.name}
                  value={selectedUserAsState?.name}
                  inputType={'text'}
                  leftIcon={<i className="fa-solid fa-id-badge"></i>}
                  onChangeHandler={(event) => {
                    updateSelectedUserAsState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  id={'name'}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="py-4 px-6 md:px-16">
                <MyTextInput
                  label={'User Email'}
                  name={'email'}
                  value={selectedUserAsState?.email}
                  error={pageUpdateError?.email}
                  inputType={'text'}
                  leftIcon={<i className="fa-solid fa-at"></i>}
                  onChangeHandler={(event) => {
                    updateSelectedUserAsState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  id={'email'}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="py-4 px-6 md:px-16">
                <MyTextInput
                  label={'Phone'}
                  name={'phone'}
                  error={pageUpdateError?.phone}
                  value={selectedUserAsState?.phone}
                  inputType={'text'}
                  leftIcon={<i className="fa-solid fa-phone-volume"></i>}
                  onChangeHandler={(event) => {
                    updateSelectedUserAsState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  id={'phone'}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="clearfix py-4 px-6 md:px-16">
                <MyImageInput
                  label="Upload Image"
                  name="base64Attachment"
                  value={selectedUserAsState?.base64Attachment}
                  required={true}
                  onChangeHandler={(name, value) => {
                    updateSelectedUserAsState(name, value);
                  }}
                  id={'base64Attachment'}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded border-t border-gray-200 bg-gray-300 p-6 dark:bg-gray-900 md:px-16">
            <p className="text-xs text-gray-700">
              Click on Save to update your Profile Info
            </p>
            <input
              type="submit"
              className="cursor-pointer rounded bg-primary px-6 py-2 text-sm font-medium uppercase text-white"
              value="Save"
              onClick={() => {
                updateProfileActionHandler();
              }}
            />
          </div>
        </div>
      ),
    },
    {
      label: 'Security',
      value: 'security',
      desc: (
        <div className="max-w-3xl">
          <div className="mx-auto flex w-full overflow-hidden rounded rounded-b-none bg-white dark:bg-blue-gray-900">
            <div className="hidden w-1/3 bg-blue-gray-100 p-8 dark:bg-gray-900 md:inline-block">
              <h2 className="text-md mb-4 font-medium tracking-wide text-gray-800 dark:text-gray-400">
                Change Password
              </h2>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Secure your account with password.
              </p>
            </div>
            <div className="w-full py-6 md:w-2/3">
              <div className="py-4 px-6 md:px-16">
                <MyPasswordInput
                  fullWidth={true}
                  id="old_password"
                  label="Old Password"
                  name="old_password"
                  value={selectedUserAsState?.old_password}
                  error={passwordChangedError?.old_password}
                  leftIcon={<i className="fa-solid fa-key"></i>}
                  onChangeHandler={(event) => {
                    updateSelectedUserAsState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="py-4 px-6 md:px-16">
                <MyPasswordInput
                  fullWidth={true}
                  id="password"
                  label="Password"
                  name="password"
                  value={selectedUserAsState?.password}
                  error={passwordChangedError?.password}
                  leftIcon={<i className="fa-solid fa-key"></i>}
                  onChangeHandler={(event) => {
                    updateSelectedUserAsState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="py-4 px-6 md:px-16">
                <MyPasswordInput
                  fullWidth={true}
                  id="password_confirmation"
                  label="Confirm Password"
                  name="password_confirmation"
                  value={selectedUserAsState?.confirmedPassword}
                  error={passwordChangedError?.confirmedPassword}
                  leftIcon={<i className="fa-solid fa-key"></i>}
                  onChangeHandler={(event) => {
                    updateSelectedUserAsState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded border-t border-gray-200 bg-gray-300 p-6 dark:bg-gray-900 md:px-16">
            <p className="text-xs text-gray-700">
              Click on Save to change your account password
            </p>
            <input
              type="submit"
              className="cursor-pointer rounded bg-primary px-6 py-2 text-sm font-medium uppercase text-white"
              value="Save"
              onClick={() => {
                changePasswordActionHandler();
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 1, x: '100vw', skewX: '-30deg' }}
      animate={{
        x: 0,
        y: 0,
        skewX: '0deg',
        opacity: 1,
        transition: { velocity: 10 },
      }}
    >
      <Loading
        isLoading={processingUserUpdate || processingUserPasswordChange}
      />
      <Tabs value={activeTab} className="z-0 m-2">
        <TabsHeader
          className="z-0 max-w-3xl rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? 'text-gray-900 dark:text-gray-200'
                  : 'dark:text-gray-600'
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="z-0">
          {data.map(({ value, desc }) => (
            <TabPanel className="z-0" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </motion.div>
  );
};

export default AccountSettingsView;
