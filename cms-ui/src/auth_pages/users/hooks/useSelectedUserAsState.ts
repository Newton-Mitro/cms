import { useState } from 'react';

const useSelectedUserAsState = () => {
  const [selectedUserAsState, setSelectedUserAsState] = useState<any>(null);

  const updateSelectedUserAsState = (fieldName: string, fieldValue: any) => {
    setSelectedUserAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedUserAsState,
    setSelectedUserAsState,
    updateSelectedUserAsState,
  };
};

export default useSelectedUserAsState;
