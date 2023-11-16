import { useState } from 'react';

const useSelectedLoanProductAsState = () => {
  const [selectedLoanProductAsState, setSelectedLoanProductAsState] =
    useState<any>(null);

  const updateSelectedLoanProductAsState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setSelectedLoanProductAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedLoanProductAsState,
    setSelectedLoanProductAsState,
    updateSelectedLoanProductAsState,
  };
};

export default useSelectedLoanProductAsState;
