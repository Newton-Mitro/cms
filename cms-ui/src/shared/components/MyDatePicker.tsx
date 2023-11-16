import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface MyDatePickerProps {
  label?: string;
  name: string;
  value: string;
  onChange: (fieldName: string, fieldValue: any) => void;
  disabled?: boolean;
  error?: string;
  isDisableFuture?: boolean;
  isDisablePast?: boolean;
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
}

const MyDatePicker: React.FC<MyDatePickerProps> = ({
  label,
  name,
  value,
  onChange,
  disabled,
  error,
  isDisableFuture = false,
  isDisablePast = false,
  minDate,
  maxDate,
}) => {
  return (
    <div className="dark:text-gray-200">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          disabled={disabled}
          value={value === '' ? null : dayjs(value)}
          disableFuture={isDisableFuture}
          disablePast={isDisablePast}
          minDate={minDate}
          className="dark:bg-gray-800"
          maxDate={maxDate}
          onChange={(newValue) => {
            onChange(name, newValue);
          }}
          format="YYYY-M-D"
          slotProps={{ textField: { size: 'small' } }}
          sx={{
            width: '100%',
          }}
        />
        <div className="text-xs text-error">{error}</div>
      </LocalizationProvider>
    </div>
  );
};

export default MyDatePicker;
