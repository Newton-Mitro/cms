import { useState } from 'react';

const useSelectedDepositProductAsState = () => {
  const [selectedDepositProductAsState, setSelectedDepositProductAsState] =
    useState<any>(null);

  const updateSelectedDepositProductAsState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setSelectedDepositProductAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedDepositProductAsState,
    setSelectedDepositProductAsState,
    updateSelectedDepositProductAsState,
  };
};

export default useSelectedDepositProductAsState;
