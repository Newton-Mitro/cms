import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import Loading from 'shared/components/Loading';
import MyImageInput from 'shared/components/MyImageInput';
import MyTextInput from 'shared/components/MyTextInput';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import {
  SettingContext,
  SettingContextType,
} from 'shared/context/SettingContext';
import useUpdateCommand from 'shared/hooks/useUpdateCommand';
import Swal from 'sweetalert2';

const SiteSetting = () => {
  const { setting, setSetting, updateSetting } = React.useContext(
    SettingContext
  ) as SettingContextType;
  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const { loading, data, setData, error, setError, executeUpdateCommand } =
    useUpdateCommand<any>();

  console.log(setting);

  const HEADERS = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authUser?.access_token}`,
    },
  };

  const updateSettingsHandler = () => {
    executeUpdateCommand(
      process.env.REACT_APP_BASE_URL + '/api/settings/1',
      JSON.stringify(setting),
      HEADERS
    );
  };

  useEffect(() => {
    if (data) {
      setError(null);
      setSetting(data?.data);
      setData(null);
      Swal.fire('Updated!', 'Settings has been updated.', 'success');
    }
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 1, x: '100vw', skewX: '-30deg' }}
      animate={{
        x: 0,
        y: 0,
        skewX: '0deg',
        opacity: 1,
        transition: { velocity: 10 },
      }}
      className=""
    >
      <Loading isLoading={loading} />
      <div className="m-2 ">
        <div className="mx-auto flex w-full overflow-hidden rounded rounded-b-none bg-white dark:bg-blue-gray-900">
          <div className="hidden w-3/12 bg-blue-gray-100 p-8 dark:bg-gray-900 md:inline-block">
            <h2 className="text-md mb-4 font-medium tracking-wide text-gray-800 dark:text-gray-400">
              General Settings
            </h2>
            <p className="text-xs text-gray-700 dark:text-gray-400">
              Update your basic setting information such as Email Address,
              Company Name, and Logo.
            </p>
          </div>
          <div className="w-full p-6 md:w-9/12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <MyTextInput
                label={'Organization Name'}
                name={'organizationName'}
                inputType={'text'}
                value={setting?.organizationName}
                error={error?.organizationName}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />
              <MyTextInput
                label={'Organization Short Name'}
                name={'organizationShortName'}
                inputType={'text'}
                value={setting?.organizationShortName}
                error={error?.organizationShortName}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Slogan'}
                name={'slogan'}
                value={setting?.slogan}
                error={error?.slogan}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Address'}
                name={'address'}
                value={setting?.address}
                error={error?.address}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'HR Email'}
                name={'hrEmail'}
                value={setting?.hrEmail}
                error={error?.hrEmail}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Customer Support Email'}
                name={'customerSupportEmail'}
                value={setting?.customerSupportEmail}
                error={error?.customerSupportEmail}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Technical Support Email'}
                name={'technicalSupportEmail'}
                value={setting?.technicalSupportEmail}
                error={error?.technicalSupportEmail}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Fax'}
                name={'fax'}
                value={setting?.fax}
                error={error?.fax}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'HR Contact No'}
                name={'hrContact'}
                value={setting?.hrContact}
                error={error?.hrContact}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Customer Support Contact No'}
                name={'customerSupportContact'}
                value={setting?.customerSupportContact}
                error={error?.customerSupportContact}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Technical Support Contact No'}
                name={'technicalSupportContact'}
                value={setting?.technicalSupportContact}
                error={error?.technicalSupportContact}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Office Hour'}
                name={'officeHour'}
                value={setting?.officeHour}
                error={error?.officeHour}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Facebook Page'}
                name={'facebookPage'}
                value={setting?.facebookPage}
                error={error?.facebookPage}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Messenger Link'}
                name={'messengerLink'}
                value={setting?.messengerLink}
                error={error?.messengerLink}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Youtube Chanel'}
                name={'youtubeUrl'}
                value={setting?.youtubeUrl}
                error={error?.youtubeUrl}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />

              <MyTextInput
                label={'Featured Video Embedded Link'}
                name={'featuredVideoUrl'}
                value={setting?.featuredVideoUrl}
                error={error?.featuredVideoUrl}
                inputType={'text'}
                onChangeHandler={(event) => {
                  updateSetting(event.target.name, event.target.value);
                }}
              />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <label htmlFor="image">Original Logo</label>
                <img className="h-32" src={setting?.originalLogo} alt="" />
              </div>
              <MyImageInput
                label={'New Original Logo'}
                name={'base64OriginalLogo'}
                value={setting?.base64OriginalLogo}
                error={error?.base64OriginalLogo}
                onChangeHandler={(name, value) => {
                  updateSetting(name, value);
                }}
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <label htmlFor="image">White Logo</label>
                <img
                  className="h-32 bg-blue-gray-900"
                  src={setting?.whiteLogo}
                  alt=""
                />
              </div>

              <MyImageInput
                label={'New White Logo'}
                name={'base64WhiteLogo'}
                value={setting?.base64WhiteLogo}
                error={error?.base64WhiteLogo}
                onChangeHandler={(name, value) => {
                  updateSetting(name, value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded border-t border-gray-200 bg-light-green-100 p-6 dark:bg-gray-900">
          <p className="text-xs text-gray-700">
            Click on Save to update your change.
          </p>
          <input
            type="submit"
            className="cursor-pointer rounded bg-primary px-6 py-2 text-sm font-medium uppercase text-white"
            value="Save"
            onClick={updateSettingsHandler}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SiteSetting;
