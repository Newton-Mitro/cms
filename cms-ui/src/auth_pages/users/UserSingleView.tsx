import React from 'react';
import MyInputBox from 'shared/components/MyTextInput';

interface UserSingleViewProps {
  pageInputState: any;
}

const UserSingleView: React.FC<UserSingleViewProps> = ({ pageInputState }) => {
  return (
    <>
      <div
        className="w-full overflow-auto border-b bg-surface px-6 py-6 dark:bg-blue-gray-800 lg:px-20"
        style={{
          maxHeight: 'calc(100vh - 205px)',
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="">
            <label htmlFor="image">User Image</label>
            <img className="h-32" src={pageInputState?.photo} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-2">
          <MyInputBox
            label={'User Name'}
            name={'name'}
            value={pageInputState?.name}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-id-badge"></i>}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MyInputBox
            label={'User Email'}
            name={'email'}
            value={pageInputState?.email}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-at"></i>}
            id={'email'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />

          <MyInputBox
            label={'Phone'}
            name={'phone'}
            value={pageInputState?.phone}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-phone-volume"></i>}
            id={'phone'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />

          <MyInputBox
            label={'Role'}
            name={'role'}
            value={pageInputState?.role}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-brands fa-r-project"></i>}
            id={'role'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />

          <MyInputBox
            label={'Status'}
            name={'status'}
            value={pageInputState?.status ? 'Active' : 'Inactive'}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-skull-crossbones"></i>}
            id={'status'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UserSingleView;
