import React, { useContext } from 'react';
import MyDropdown from 'shared/components/MyDropdown';
import MyPasswordInput from 'shared/components/MyPasswordInput';
import MyTextInput from 'shared/components/MyTextInput';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import { adminRoles } from './constants/adminRoles';
import { superAdminRoles } from './constants/superAdminRoles';

interface UserCreateViewProps {
  pageInputState: any;
  errors: any;
  updateUserInputState: CallableFunction;
}

const UserCreateView: React.FC<UserCreateViewProps> = ({
  pageInputState,
  errors,
  updateUserInputState,
}) => {
  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);
  return (
    <>
      <div
        className="w-full overflow-auto border-b bg-surface px-6 py-6 dark:bg-blue-gray-800 lg:px-20"
        style={{
          maxHeight: 'calc(100vh - 205px)',
        }}
      >
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-2">
          <MyTextInput
            label={'User Name'}
            name={'name'}
            error={errors?.name}
            value={pageInputState?.name}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-id-badge"></i>}
            onChangeHandler={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
            id={'name'}
          />
          <MyTextInput
            label={'User Email'}
            name={'email'}
            value={pageInputState?.email}
            error={errors?.email}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-at"></i>}
            onChangeHandler={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
            id={'email'}
          />

          <MyTextInput
            label={'Phone'}
            name={'phone'}
            error={errors?.phone}
            value={pageInputState?.phone}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-phone-volume"></i>}
            onChangeHandler={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
            id={'phone'}
          />

          <MyDropdown
            label={'Role'}
            name={'role'}
            error={errors?.role}
            value={pageInputState?.role}
            leftIcon={<i className="fa-brands fa-r-project"></i>}
            dropDownData={
              authUser?.user?.role === 'Super Admin'
                ? superAdminRoles
                : adminRoles
            }
            onChange={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
          />

          <MyPasswordInput
            fullWidth={true}
            id="password"
            label="Password"
            name="password"
            value={pageInputState?.password}
            required={true}
            error={errors?.password}
            leftIcon={<i className="fa-solid fa-key"></i>}
            onChangeHandler={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
          />

          <MyPasswordInput
            fullWidth={true}
            id="password_confirmation"
            label="Confirm Password"
            name="password_confirmation"
            value={pageInputState?.confirmedPassword}
            required={true}
            error={errors?.confirmedPassword}
            leftIcon={<i className="fa-solid fa-key"></i>}
            onChangeHandler={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UserCreateView;
