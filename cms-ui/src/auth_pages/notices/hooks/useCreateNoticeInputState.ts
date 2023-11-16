import { useState } from 'react';
import { initialCreateNoticeInputState } from '../constants/initialCreateNoticeInputState';

const useCreateNoticeInputState = () => {
  const [createNoticeInputState, setCreateNoticeInputState] = useState(
    initialCreateNoticeInputState
  );

  const updateCreateNoticeInputState = (fieldName: string, fieldValue: any) => {
    setCreateNoticeInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createNoticeInputState,
    setCreateNoticeInputState,
    updateCreateNoticeInputState,
  };
};

export default useCreateNoticeInputState;
