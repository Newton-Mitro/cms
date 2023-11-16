import { initialCreatePageInputState } from 'auth_pages/pages/constants/initialCreatePageInputState';
import { useState } from 'react';

const useCreateServiceInputState = () => {
  const [createServiceInputState, setCreateServiceInputState] = useState(
    initialCreatePageInputState
  );

  const updateCreateServiceInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateServiceInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createServiceInputState,
    setCreateServiceInputState,
    updateCreateServiceInputState,
  };
};

export default useCreateServiceInputState;
