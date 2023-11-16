import { useState } from 'react';
import { initialCreatePageInputState } from '../constants/initialCreatePageInputState';

const useCreatePageInputState = () => {
  const [createPageInputState, setCreatePageInputState] = useState(
    initialCreatePageInputState
  );

  const updateCreatePageInputState = (fieldName: string, fieldValue: any) => {
    setCreatePageInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createPageInputState,
    setCreatePageInputState,
    updateCreatePageInputState,
  };
};

export default useCreatePageInputState;
