import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import MyImageInput from 'shared/components/MyImageInput';
import MyInputBox from 'shared/components/MyTextInput';
import MyTextarea from 'shared/components/MyTextarea';

interface NoticeEditViewProps {
  noticeInputState: any;
  errors: any;
  updateNoticeInputState: CallableFunction;
}

const NoticeEditView: React.FC<NoticeEditViewProps> = ({
  noticeInputState,
  errors,
  updateNoticeInputState,
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
          <MyImageInput
            label="New Image"
            name="base64Attachment"
            value={noticeInputState?.base64Attachment}
            required={true}
            onChangeHandler={(name, value) => {
              updateNoticeInputState(name, value);
            }}
            id={'base64Attachment'}
          />

          <div className="">
            <label htmlFor="image">Notice Image</label>
            <img
              className="h-32"
              src={noticeInputState?.portraitAttachmentUrl}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
          <MyInputBox
            label={'Notice Title'}
            name={'title'}
            error={errors?.title}
            value={noticeInputState?.title}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updateNoticeInputState(event.target.name, event.target.value);
            }}
            id={'title'}
          />

          <MyInputBox
            label={'Notice Order'}
            name={'order'}
            error={errors?.order}
            value={noticeInputState?.order?.toString()}
            inputType={'number'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updateNoticeInputState(event.target.name, event.target.value);
            }}
            id={'order'}
          />
        </div>
        <div className="mt-4 grid grid-cols-1">
          <MyTextarea
            label={'Short Description'}
            name={'shortDescription'}
            value={noticeInputState?.shortDescription}
            error={errors?.shortDescription}
            rows={4}
            onChange={(event) => {
              updateNoticeInputState(event.target.name, event.target.value);
            }}
          />
        </div>
        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Content</label>
          <div
            className={`prose max-w-full ${
              errors?.content && 'border border-error'
            }`}
          >
            <CKEditor
              editor={ClassicEditor}
              data={noticeInputState?.content}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updateNoticeInputState('content', data);
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

export default NoticeEditView;
