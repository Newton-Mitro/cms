import { useState } from 'react';

const useSelectedSliderImageAsState = () => {
  const [selectedSliderImageAsState, setSelectedSliderImageAsState] =
    useState<any>(null);

  const updateSelectedSliderImageAsState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setSelectedSliderImageAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedSliderImageAsState,
    setSelectedSliderImageAsState,
    updateSelectedSliderImageAsState,
  };
};

export default useSelectedSliderImageAsState;
