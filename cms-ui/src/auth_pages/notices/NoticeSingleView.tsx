import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import MyInputBox from 'shared/components/MyTextInput';
import MyTextarea from 'shared/components/MyTextarea';

interface NoticeSingleViewProps {
  noticeInputState: any;
}

const NoticeSingleView: React.FC<NoticeSingleViewProps> = ({
  noticeInputState,
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
            // error={errors?.title}
            value={noticeInputState?.title}
            inputType={'text'}
            disabled={true}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            id={'title'}
            onChangeHandler={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MyInputBox
            label={'Notice Slug'}
            name={'slug'}
            value={noticeInputState?.slug}
            // error={errors?.slug}
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
            label={'Notice Order'}
            name={'order'}
            // error={errors?.order}
            value={noticeInputState?.order?.toString()}
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
            // error={errors?.order}
            value={noticeInputState?.publishStatus}
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
            name={'shortDescription'}
            value={noticeInputState?.shortDescription}
            disabled={true}
            error={undefined}
            rows={4}
            onChange={function (
              event: React.ChangeEvent<HTMLTextAreaElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Content</label>
          <div className={`prose max-w-full`}>
            <CKEditor
              editor={ClassicEditor}
              data={noticeInputState?.content}
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

export default NoticeSingleView;
