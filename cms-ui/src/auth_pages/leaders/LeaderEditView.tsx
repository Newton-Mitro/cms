import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import MyDropdown from 'shared/components/MyDropdown';
import MyImageInput from 'shared/components/MyImageInput';
import MyInputBox from 'shared/components/MyTextInput';
import MyTextarea from 'shared/components/MyTextarea';

interface LeaderEditViewProps {
  leaderInputState: any;
  errors: any;
  updatePageInputState: CallableFunction;
}

const LeaderEditView: React.FC<LeaderEditViewProps> = ({
  leaderInputState,
  errors,
  updatePageInputState,
}) => {
  console.log(leaderInputState);

  return (
    <>
      <div
        className="w-full overflow-auto border-b bg-surface px-6 py-6 dark:bg-blue-gray-800 lg:px-20"
        style={{
          maxHeight: 'calc(100vh - 205px)',
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MyImageInput
            label="New Image"
            name="base64Attachment"
            value={leaderInputState?.base64Attachment}
            required={true}
            onChangeHandler={(name, value) => {
              updatePageInputState(name, value);
            }}
            id={'base64Attachment'}
          />

          <div className="">
            <label htmlFor="image">Page Image</label>
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
            error={errors?.name}
            value={leaderInputState?.name}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'name'}
          />

          <MyDropdown
            label={'Committee'}
            name={'staffType'}
            error={errors?.staffType}
            value={leaderInputState?.staffType}
            leftIcon={<i className="fa-brands fa-r-project"></i>}
            dropDownData={[
              { label: 'Office Bearer', value: 'Office Bearer' },
              { label: 'Board Of Director', value: 'Board Of Director' },
              {
                label: 'Supervisory Committee',
                value: 'Supervisory Committee',
              },
              { label: 'Credit Committee', value: 'Credit Committee' },
            ]}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
          />

          <MyInputBox
            label={'Position'}
            name={'position'}
            error={errors?.position}
            value={leaderInputState?.position}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'position'}
          />

          <MyInputBox
            label={'Facebook Profile'}
            name={'facebookProfile'}
            error={errors?.facebookProfile}
            value={leaderInputState?.facebookProfile}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'facebookProfile'}
          />

          <MyInputBox
            label={'Linkedin Profile'}
            name={'linkedinProfile'}
            error={errors?.linkedinProfile}
            value={leaderInputState?.linkedinProfile}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'linkedinProfile'}
          />

          <MyInputBox
            label={'Leader Order'}
            name={'order'}
            error={errors?.order}
            value={leaderInputState?.order?.toString()}
            inputType={'number'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'order'}
          />
        </div>

        <div className="mt-4 grid grid-cols-1">
          <MyTextarea
            label={'Short Description'}
            name={'shortIntroduction'}
            value={leaderInputState?.shortIntroduction}
            error={errors?.shortIntroduction}
            rows={4}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
          />
        </div>

        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Bio</label>
          <div
            className={`prose max-w-full ${
              errors?.bio && 'border border-error'
            }`}
          >
            <CKEditor
              editor={ClassicEditor}
              data={leaderInputState?.bio ? leaderInputState?.bio : ''}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updatePageInputState('bio', data);
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

export default LeaderEditView;
