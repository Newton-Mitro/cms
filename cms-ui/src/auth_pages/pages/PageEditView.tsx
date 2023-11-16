import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import MyImageInput from 'shared/components/MyImageInput';
import MyInputBox from 'shared/components/MyTextInput';
import MyTextarea from 'shared/components/MyTextarea';

interface PageEditViewProps {
  pageInputState: any;
  errors: any;
  updatePageInputState: CallableFunction;
}

const PageEditView: React.FC<PageEditViewProps> = ({
  pageInputState,
  errors,
  updatePageInputState,
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
            value={pageInputState?.base64Attachment}
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
              src={pageInputState?.portraitAttachmentUrl}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
          <MyInputBox
            label={'Page Title'}
            name={'title'}
            error={errors?.title}
            value={pageInputState?.title}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'title'}
          />

          <MyInputBox
            label={'Page Order'}
            name={'order'}
            error={errors?.order}
            value={pageInputState?.order?.toString()}
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
            name={'shortDescription'}
            value={pageInputState?.shortDescription}
            error={errors?.shortDescription}
            rows={4}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
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
              data={pageInputState?.content ? pageInputState?.content : ''}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updatePageInputState('content', data);
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

export default PageEditView;
