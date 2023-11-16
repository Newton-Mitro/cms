import { useState } from 'react';

const useSelectedLeaderAsState = () => {
  const [selectedLeaderAsState, setSelectedLeaderAsState] = useState<any>(null);

  const updateSelectedLeaderAsState = (fieldName: string, fieldValue: any) => {
    setSelectedLeaderAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedLeaderAsState,
    setSelectedLeaderAsState,
    updateSelectedLeaderAsState,
  };
};

export default useSelectedLeaderAsState;
