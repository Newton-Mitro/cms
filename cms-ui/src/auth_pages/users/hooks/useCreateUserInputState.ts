import { useState } from 'react';
import { initialCreateUserInputState } from '../constants/initialCreateUserInputState';

const useCreateUserInputState = () => {
  const [createUserInputState, setCreateUserInputState] = useState(
    initialCreateUserInputState
  );

  const updateCreateUserInputState = (fieldName: string, fieldValue: any) => {
    setCreateUserInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createUserInputState,
    setCreateUserInputState,
    updateCreateUserInputState,
  };
};

export default useCreateUserInputState;
