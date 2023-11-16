import React, { useContext } from 'react';
import MyDropdown from 'shared/components/MyDropdown';
import MyImageInput from 'shared/components/MyImageInput';
import MyPasswordInput from 'shared/components/MyPasswordInput';
import MyInputBox from 'shared/components/MyTextInput';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import { adminRoles } from './constants/adminRoles';
import { superAdminRoles } from './constants/superAdminRoles';

interface UserEditViewProps {
  pageInputState: any;
  errors: any;
  updateUserInputState: CallableFunction;
}

const UserEditView: React.FC<UserEditViewProps> = ({
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <MyImageInput
            label="Upload Image"
            name="base64Attachment"
            value={pageInputState?.base64Attachment}
            required={true}
            onChangeHandler={(name, value) => {
              updateUserInputState(name, value);
            }}
            id={'base64Attachment'}
          />

          <div className="">
            <label htmlFor="image">User Image</label>
            <img className="h-32" src={pageInputState?.photo} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-2">
          <MyInputBox
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

          <MyInputBox
            label={'User Email'}
            name={'email'}
            error={errors?.email}
            value={pageInputState?.email}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-at"></i>}
            onChangeHandler={(event) => {
              updateUserInputState(event.target.name, event.target.value);
            }}
            id={'email'}
          />

          <MyInputBox
            label={'User Phone'}
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
              authUser?.user.role === 'Super Admin'
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

export default UserEditView;
