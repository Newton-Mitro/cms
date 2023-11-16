import { useState } from 'react';

const useSelectedServiceAsState = () => {
  const [selectedServiceAsState, setSelectedServiceAsState] =
    useState<any>(null);

  const updateSelectedServiceAsState = (fieldName: string, fieldValue: any) => {
    setSelectedServiceAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedServiceAsState,
    setSelectedServiceAsState,
    updateSelectedServiceAsState,
  };
};

export default useSelectedServiceAsState;
