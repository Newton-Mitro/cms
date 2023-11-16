import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import dayjs from 'dayjs';
import React from 'react';
import MyDatePicker from 'shared/components/MyDatePicker';
import MyDropdown from 'shared/components/MyDropdown';
import MyInputBox from 'shared/components/MyTextInput';
import MyTextarea from 'shared/components/MyTextarea';
import { slugify } from 'shared/utils/string.slugify';

interface JobCircularCreateViewProps {
  jobCircularInputState: any;
  errors: any;
  updatePageInputState: CallableFunction;
}

const JobCircularCreateView: React.FC<JobCircularCreateViewProps> = ({
  jobCircularInputState,
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
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
          <MyInputBox
            label={'Job Position'}
            name={'jobPosition'}
            error={errors?.jobPosition}
            value={jobCircularInputState?.jobPosition}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-heading"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
              updatePageInputState('slug', slugify(event.target.value));
            }}
            id={'jobPosition'}
          />
          <MyInputBox
            label={'Slug'}
            name={'slug'}
            value={jobCircularInputState?.slug}
            error={errors?.slug}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-link"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(
                event.target.name,
                slugify(event.target.value)
              );
            }}
            id={'slug'}
          />

          <MyInputBox
            label={'Total Number of Vacancy'}
            name={'totalNumberVacancy'}
            error={errors?.totalNumberVacancy}
            value={jobCircularInputState?.totalNumberVacancy?.toString()}
            inputType={'number'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'totalNumberVacancy'}
          />

          <MyInputBox
            label={'Employment Status'}
            name={'employmentStatus'}
            error={errors?.employmentStatus}
            value={jobCircularInputState?.employmentStatus}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'employmentStatus'}
          />

          <MyDropdown
            label={'religion'}
            name={'religion'}
            error={errors?.religion}
            value={jobCircularInputState?.religion}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            dropDownData={[
              { label: 'Christian', value: 'Christian' },
              { label: 'Buddhist', value: 'Buddhist' },
              { label: 'Hindu', value: 'Hindu' },
              { label: 'Islam', value: 'Islam' },
              { label: 'Other', value: 'Other' },
            ]}
          />

          <MyInputBox
            label={'Age Range'}
            name={'age'}
            error={errors?.age}
            value={jobCircularInputState?.age}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'age'}
          />

          <MyDropdown
            label={'Gender'}
            name={'gender'}
            error={errors?.gender}
            value={jobCircularInputState?.gender}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            dropDownData={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
              {
                label: 'Equal opportunity for all',
                value: 'Equal opportunity for all',
              },
            ]}
          />

          <MyInputBox
            label={'Job Location'}
            name={'jobLocation'}
            error={errors?.jobLocation}
            value={jobCircularInputState?.jobLocation}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'jobLocation'}
          />

          <MyInputBox
            label={'Salary'}
            name={'salary'}
            error={errors?.salary}
            value={jobCircularInputState?.salary}
            inputType={'text'}
            leftIcon={<i className="fa-solid fa-arrow-down-1-9"></i>}
            onChangeHandler={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
            id={'salary'}
          />

          <MyDatePicker
            label={'Application Deadline'}
            name={'applicationDeadline'}
            error={errors?.applicationDeadline}
            value={jobCircularInputState?.applicationDeadline}
            onChange={(fieldName, fieldValue) => {
              updatePageInputState(
                fieldName,
                dayjs(fieldValue).format('YYYY-M-D')
              );
            }}
          />
        </div>

        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Job Context</label>
          <div
            className={`prose max-w-full ${
              errors?.jobContext && 'border border-error'
            }`}
          >
            <CKEditor
              editor={ClassicEditor}
              data={
                jobCircularInputState?.jobContext
                  ? jobCircularInputState?.jobContext
                  : ''
              }
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updatePageInputState('jobContext', data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>

        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Job Responsibility</label>
          <div
            className={`prose max-w-full ${
              errors?.jobResponsibility && 'border border-error'
            }`}
          >
            <CKEditor
              editor={ClassicEditor}
              data={
                jobCircularInputState?.jobResponsibility
                  ? jobCircularInputState?.jobResponsibility
                  : ''
              }
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updatePageInputState('jobResponsibility', data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1">
          <MyTextarea
            label={'Educational Requirement'}
            name={'educationalRequirement'}
            value={jobCircularInputState?.educationalRequirement}
            error={errors?.educationalRequirement}
            rows={2}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
          />
        </div>

        <div className="mt-4 grid grid-cols-1">
          <MyTextarea
            label={'Experience Requirements'}
            name={'experienceRequirements'}
            value={jobCircularInputState?.experienceRequirements}
            error={errors?.experienceRequirements}
            rows={2}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
          />
        </div>

        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Additional Requirements</label>
          <div
            className={`prose max-w-full ${
              errors?.additionalRequirements && 'border border-error'
            }`}
          >
            <CKEditor
              editor={ClassicEditor}
              data={
                jobCircularInputState?.additionalRequirements
                  ? jobCircularInputState?.additionalRequirements
                  : ''
              }
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updatePageInputState('additionalRequirements', data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>

        <div className=" mt-2 grid  grid-cols-1 ">
          <label htmlFor="content">Compensation And Other Benefits</label>
          <div
            className={`prose max-w-full ${
              errors?.compensationAndOtherBenefits && 'border border-error'
            }`}
          >
            <CKEditor
              editor={ClassicEditor}
              data={
                jobCircularInputState?.compensationAndOtherBenefits
                  ? jobCircularInputState?.compensationAndOtherBenefits
                  : ''
              }
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                updatePageInputState('compensationAndOtherBenefits', data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1">
          <MyTextarea
            label={'Application Instruction'}
            name={'applicationInstruction'}
            value={jobCircularInputState?.applicationInstruction}
            error={errors?.applicationInstruction}
            rows={4}
            onChange={(event) => {
              updatePageInputState(event.target.name, event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default JobCircularCreateView;
