import { useState } from 'react';
import { initialCreateDepositProductInputState } from '../constants/initialCreateDepositProductInputState';

const useCreateDepositProductInputState = () => {
  const [createDepositProductInputState, setCreateDepositProductInputState] =
    useState(initialCreateDepositProductInputState);

  const updateCreateDepositProductInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateDepositProductInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createDepositProductInputState,
    setCreateDepositProductInputState,
    updateCreateDepositProductInputState,
  };
};

export default useCreateDepositProductInputState;
