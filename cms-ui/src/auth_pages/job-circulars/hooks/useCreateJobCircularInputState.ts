import { useState } from 'react';
import { initialCreateJobCircularInputState } from '../constants/initialCreateJobCircularInputState';

const useCreateJobCircularInputState = () => {
  const [createJobCircularInputState, setCreateJobCircularInputState] =
    useState(initialCreateJobCircularInputState);

  const updateCreateJobCircularInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateJobCircularInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createJobCircularInputState,
    setCreateJobCircularInputState,
    updateCreateJobCircularInputState,
  };
};

export default useCreateJobCircularInputState;
