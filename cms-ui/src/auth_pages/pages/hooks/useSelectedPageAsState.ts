import { useState } from 'react';

const useSelectedPageAsState = () => {
  const [selectedPageAsState, setSelectedPageAsState] = useState<any>(null);

  const updateSelectedPageAsState = (fieldName: string, fieldValue: any) => {
    setSelectedPageAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedPageAsState,
    setSelectedPageAsState,
    updateSelectedPageAsState,
  };
};

export default useSelectedPageAsState;
