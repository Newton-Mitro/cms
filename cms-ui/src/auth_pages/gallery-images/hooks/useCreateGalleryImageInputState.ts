import { useState } from 'react';
import { initialCreateGalleryImageInputState } from '../constants/initialCreateGalleryImageInputState';

const useCreateGalleryImageInputState = () => {
  const [createGalleryImageInputState, setCreateGalleryImageInputState] =
    useState(initialCreateGalleryImageInputState);

  const updateCreateGalleryImageInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateGalleryImageInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createGalleryImageInputState,
    setCreateGalleryImageInputState,
    updateCreateGalleryImageInputState,
  };
};

export default useCreateGalleryImageInputState;
