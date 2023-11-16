import { useState } from 'react';

const useSelectedNoticeAsState = () => {
  const [selectedNoticeAsState, setSelectedNoticeAsState] = useState<any>(null);

  const updateSelectedNoticeAsState = (fieldName: string, fieldValue: any) => {
    setSelectedNoticeAsState((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return {
    selectedNoticeAsState,
    setSelectedNoticeAsState,
    updateSelectedNoticeAsState,
  };
};

export default useSelectedNoticeAsState;
