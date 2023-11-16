interface MyDropdownOption {
  value: string | number;
  label: string | number;
}

interface MyDropdownProps {
  name: string;
  label: string;
  value?: string | number;
  defaultValue?: string | number;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  isView?: boolean;
  leftIcon?: JSX.Element;
  dropDownData: MyDropdownOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const MyDropdown: React.FC<MyDropdownProps> = ({
  name,
  label,
  value,
  defaultValue,
  error,
  required,
  disabled,
  fullWidth = true,
  isView,
  leftIcon,
  dropDownData,
  onChange,
}) => {
  return (
    <div
      className={`${
        fullWidth ? 'block w-full' : 'inline'
      } text-onSurface dark:text-gray-200`}
    >
      <div className="relative">
        <select
          name={name}
          disabled={isView ? true : disabled}
          defaultValue={defaultValue}
          value={value}
          className={`peer ${
            isView ? 'border-none' : ' border-onBorder'
          } rounded border-onBorder bg-surface dark:bg-gray-800
          ${
            fullWidth ? 'w-full' : 'w-64'
          } transition-colors focus:border-primary 
          ${
            leftIcon && 'pl-10'
          } disabled:bg-onDisabled disabled:font-semibold disabled:text-primary ${
            error ? 'ring-1 ring-error' : ''
          }`}
          onChange={onChange}
        >
          <option key={-1} value={''}>
            None
          </option>
          {dropDownData?.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <label
          htmlFor={label}
          className={`absolute left-0  mx-3 cursor-text rounded bg-surface peer-focus:ml-3 dark:bg-gray-800
          ${
            (value || defaultValue) && leftIcon
              ? leftIcon
                ? '-top-2 ml-3 text-xs'
                : ''
              : value || defaultValue
              ? '-top-2 ml-3 text-xs'
              : leftIcon
              ? 'top-2.5 ml-10'
              : 'top-2.5 ml-3'
          } 
      px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:bg-surface dark:peer-focus:bg-gray-800
      ${(disabled || isView) && 'bg-onDisabled text-primary dark:text-gray-200'}
      peer-focus:text-xs peer-focus:text-primary dark:peer-focus:text-gray-200`}
        >
          {label}
        </label>

        {leftIcon && (
          <span className="absolute left-0 top-0 flex h-full w-12 flex-col items-center justify-center">
            {leftIcon}
          </span>
        )}
      </div>
      <div className="font-medium text-error">
        {error ? <span className="text-xs text-error">{error}</span> : null}{' '}
        {required ? ' *' : ''}
      </div>
    </div>
  );
};

export default MyDropdown;
