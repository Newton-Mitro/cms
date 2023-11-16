import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import MyInputBox from 'shared/components/MyTextInput';
import MyTextarea from 'shared/components/MyTextarea';

interface LeaderSingleViewProps {
  leaderInputState: any;
}

const LeaderSingleView: React.FC<LeaderSingleViewProps> = ({
  leaderInputState,
}) => {
  return (
    <>
      <div
        className="w-full overflow-auto border-b bg-surface px-6 py-6 dark:bg-blue-gray-800 lg:px-20"
        style={{
          maxHeight: 'calc(100vh - 205px)',
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <label htmlFor="image">Leader Image</label>
            <img
              className="h-32"
              src={leaderInputState?.thumbnailAttachmentUrl}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
          <MyInputBox
            label={'Name'}
            name={'name'}
            value={leaderInputState?.name}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            id={'name'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MyInputBox
            label={'Leader Slug'}
            name={'slug'}
            value={leaderInputState?.slug}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-link"></i>}
            id={'slug'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />

          <MyInputBox
            label={'Position'}
            disabled={true}
            name={'position'}
            value={leaderInputState?.position}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {}}
            id={'position'}
          />

          <MyInputBox
            disabled={true}
            label={'Committee'}
            name={'staffType'}
            value={leaderInputState?.staffType}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {}}
            id={'staffType'}
          />

          <MyInputBox
            label={'Leader Order'}
            name={'order'}
            value={leaderInputState?.order?.toString()}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            id={'order'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />

          <MyInputBox
            label={'Publish Status'}
            name={'publishStatus'}
            value={leaderInputState?.publishStatus}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-cloud-arrow-up"></i>}
            id={'order'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>

        <div className="mt-4 grid grid-cols-1">
          <MyTextarea
            label={'Short Description'}
            name={'shortIntroduction'}
            value={leaderInputState?.shortIntroduction}
            rows={4}
            disabled={true}
            onChange={(event) => {}}
            error={undefined}
          />
        </div>

        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Bio</label>
          <div className={`prose max-w-full`}>
            <CKEditor
              editor={ClassicEditor}
              data={leaderInputState?.bio ? leaderInputState?.bio : ''}
              disabled={true}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderSingleView;
