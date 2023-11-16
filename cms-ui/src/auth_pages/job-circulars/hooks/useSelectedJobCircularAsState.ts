import { useState } from 'react';

const useSelectedJobCircularAsState = () => {
  const [selectedJobCircularAsState, setSelectedJobCircularAsState] =
    useState<any>(null);

  const updateSelectedJobCircularAsState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setSelectedJobCircularAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedJobCircularAsState,
    setSelectedJobCircularAsState,
    updateSelectedJobCircularAsState,
  };
};

export default useSelectedJobCircularAsState;
