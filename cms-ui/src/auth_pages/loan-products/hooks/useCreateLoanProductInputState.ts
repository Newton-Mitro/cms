import { useState } from 'react';
import { initialCreateLoanProductInputState } from '../constants/initialCreateLoanProductInputState';

const useCreateLoanProductInputState = () => {
  const [createLoanProductInputState, setCreateLoanProductInputState] =
    useState(initialCreateLoanProductInputState);

  const updateCreateLoanProductInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateLoanProductInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createLoanProductInputState,
    setCreateLoanProductInputState,
    updateCreateLoanProductInputState,
  };
};

export default useCreateLoanProductInputState;
