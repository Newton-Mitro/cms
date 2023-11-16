import React, { useState } from 'react';

interface MyDropdownWithFilterProps {
  label: string;
  name: string;
  value: string | undefined;
  error: string | undefined;
  required?: boolean;
  disabled?: boolean;
  isView?: boolean;
  dropDownData: { value: string; label: string }[];
  onChangeHandler: (name: string, value: string) => void;
}

const MyDropdownWithFilter: React.FC<MyDropdownWithFilterProps> = ({
  label,
  name,
  value,
  required,
  disabled,
  isView,
  error,
  onChangeHandler,
  dropDownData,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full text-onSurface">
      <div
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center ${
          isView ? 'border-none' : ' border-onBorder'
        } justify-between rounded border border-gray-500 bg-white px-3 py-2 ${
          error ? 'ring-1 ring-error' : ''
        }`}
      >
        {selectedValue
          ? selectedValue?.length > 25
            ? selectedValue?.substring(0, 25) + '...'
            : selectedValue
          : label}
        <span className={`text-2xl ${open && 'rotate-180'}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      <label
        htmlFor={name}
        className={`text absolute  left-0 mx-3 cursor-text bg-surface  px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary 
          ${selectedValue ? '-top-2 text-xs text-primary' : 'top-2'}`}
      >
        {label}
        <span className="font-medium text-error">{required ? ' *' : ''}</span>
      </label>

      <ul
        className={`absolute right-0 z-50 mt-1 w-full overflow-y-auto border border-gray-400 bg-white shadow ${
          open ? 'max-h-60' : 'max-h-0 border-none'
        } `}
      >
        <div className="sticky top-0 flex items-center bg-white px-2 py-1">
          <span className="text-3xl text-gray-700">
            <i className="fa-solid fa-magnifying-glass"></i>{' '}
          </span>
          <input
            type="text"
            name={name}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search"
            className="peer w-full rounded border-slate-300 bg-surface outline-slate-300 transition-colors focus:border-primary"
          />
        </div>

        {dropDownData?.map((item, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-primary hover:text-onPrimary
            ${
              item?.label?.toLowerCase() === selectedValue?.toLowerCase() &&
              'bg-sky-600 text-white'
            }
            ${
              item?.label?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
            onClick={() => {
              if (item?.label?.toLowerCase() !== selectedValue.toLowerCase()) {
                onChangeHandler(name, item?.value);
                setSelectedValue(item?.label);
                setOpen(false);
                setInputValue('');
              }
            }}
          >
            {item?.label}
          </li>
        ))}
      </ul>
      {error ? <span className="text-xs text-error">{error}</span> : null}
    </div>
  );
};

export default MyDropdownWithFilter;
