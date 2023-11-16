import axios from 'axios';
import React, { useEffect } from 'react';
import { ISetting } from 'shared/interfaces/ISetting';

export type SettingContextType = {
  setting: ISetting | null;
  setSetting: React.Dispatch<React.SetStateAction<ISetting | null>>;
  updateSetting: (fieldName: string, fieldValue: any) => void;
};

export const SettingContext = React.createContext<SettingContextType | null>(
  null
);

const SettingProvider = ({ children }: { children: React.ReactNode }) => {
  const [setting, setSetting] = React.useState<ISetting | null>(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + '/api/settings')
      .then(function (response) {
        setSetting(response.data.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
        } else {
        }
      });
  }, []);

  const updateSetting = (fieldName: string, fieldValue: any) => {
    setSetting((prevState: any) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <SettingContext.Provider value={{ setting, setSetting, updateSetting }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
