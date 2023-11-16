import React from 'react';

interface MyCheckBoxProps {
  label: string;
  name: string;
  value: boolean;
  error: string | undefined;
  disabled?: boolean;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const MyCheckBox: React.FC<MyCheckBoxProps> = ({
  label,
  name,
  value,
  error,
  disabled,
  onChangeHandler,
}) => {
  return (
    <>
      <div className="flex w-full items-center rounded text-onSurface">
        <input
          id={name}
          name={name}
          type="checkbox"
          disabled={disabled}
          defaultChecked={value}
          className="h-4 w-4 appearance-none rounded"
          onChange={onChangeHandler}
        />
        <label htmlFor="" className="py-3 px-2 text-sm font-medium">
          {label}
        </label>
      </div>
    </>
  );
};

export default MyCheckBox;
