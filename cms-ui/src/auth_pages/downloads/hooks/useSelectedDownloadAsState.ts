import { useState } from 'react';

const useSelectedDownloadAsState = () => {
  const [selectedDownloadAsState, setSelectedDownloadAsState] =
    useState<any>(null);

  const updateSelectedDownloadAsState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setSelectedDownloadAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedDownloadAsState,
    setSelectedDownloadAsState,
    updateSelectedDownloadAsState,
  };
};

export default useSelectedDownloadAsState;
