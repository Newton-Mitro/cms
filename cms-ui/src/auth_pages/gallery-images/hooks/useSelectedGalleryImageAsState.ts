import { useState } from 'react';

const useSelectedGalleryImageAsState = () => {
  const [selectedGalleryImageAsState, setSelectedGalleryImageAsState] =
    useState<any>(null);

  const updateSelectedGalleryImageAsState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setSelectedGalleryImageAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedGalleryImageAsState,
    setSelectedGalleryImageAsState,
    updateSelectedGalleryImageAsState,
  };
};

export default useSelectedGalleryImageAsState;
