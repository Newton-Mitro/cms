import { useState } from 'react';
import { initialCreateLeaderInputState } from '../constants/initialCreateLeaderInputState';

const useCreateLeaderInputState = () => {
  const [createLeaderInputState, setCreateLeaderInputState] = useState(
    initialCreateLeaderInputState
  );

  const updateCreateLeaderInputState = (fieldName: string, fieldValue: any) => {
    setCreateLeaderInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createLeaderInputState,
    setCreateLeaderInputState,
    updateCreateLeaderInputState,
  };
};

export default useCreateLeaderInputState;
