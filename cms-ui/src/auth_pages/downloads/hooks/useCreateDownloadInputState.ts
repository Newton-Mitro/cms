import { useState } from 'react';
import { initialCreateDownloadInputState } from '../constants/initialCreateDownloadInputState';

const useCreateDownloadInputState = () => {
  const [createDownloadInputState, setCreateDownloadInputState] = useState(
    initialCreateDownloadInputState
  );

  const updateCreateDownloadInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateDownloadInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createDownloadInputState,
    setCreateDownloadInputState,
    updateCreateDownloadInputState,
  };
};

export default useCreateDownloadInputState;
