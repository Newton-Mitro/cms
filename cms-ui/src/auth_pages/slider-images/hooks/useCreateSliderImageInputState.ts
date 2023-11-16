import { useState } from 'react';
import { initialCreateSliderImageInputState } from '../constants/initialCreateSliderImageInputState';

const useCreateSliderImageInputState = () => {
  const [createSliderImageInputState, setCreateSliderImageInputState] =
    useState(initialCreateSliderImageInputState);

  const updateCreateSliderImageInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setCreateSliderImageInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    createSliderImageInputState,
    setCreateSliderImageInputState,
    updateCreateSliderImageInputState,
  };
};

export default useCreateSliderImageInputState;
