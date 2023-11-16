import originalLogo from 'assets/brand/logo_original.png';
import whiteLogo from 'assets/brand/logo_white.png';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'shared/components/Loading';
import MyPasswordInput from 'shared/components/MyPasswordInput';
import MyTextInput from 'shared/components/MyTextInput';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import {
  MyThemeContext,
  MyThemeContextType,
} from 'shared/context/ThemeContext';
import usePostCommand from 'shared/hooks/usePostCommand';
import { useLocalStorage } from 'shared/hooks/useStorage';
import { IAuthUserModel } from 'shared/interfaces/IAuthUserModel';
import { IResponseModel } from 'shared/interfaces/IResponseModel';
import { AuthUserModel } from 'shared/models/AuthUserModel';
import { initialLoginInputState } from './constants/initialLoginInputState';
import useLoginInputState from './hooks/useLoginInputState';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [lastRoute] = useLocalStorage('lastRoute', '/auth/account-settings');
  const { darkMode } = useContext<MyThemeContextType>(MyThemeContext);

  const { storeAuthUserData } =
    useContext<AuthUserContextType>(AuthUserContext);

  const { loginInputState, setLoginInputState, updateLoginInputState } =
    useLoginInputState();

  const { data, loading, error, setError, executePostCommand } =
    usePostCommand<IResponseModel<IAuthUserModel>>();

  console.log(error);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    executePostCommand(
      process.env.REACT_APP_BASE_URL + '/api/auth/login',
      JSON.stringify(loginInputState),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
  };

  const passwordRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    setError(null);
    if (data?.data) {
      const authUserModel: IAuthUserModel = new AuthUserModel();
      authUserModel.user.id = data.data.user.id;
      authUserModel.user.name = data.data.user.name;
      authUserModel.user.email = data.data.user.email;
      authUserModel.user.role = data.data.user.role;
      authUserModel.user.photo = data.data.user.photo;
      authUserModel.access_token = data.data.access_token;
      setLoginInputState(initialLoginInputState);
      storeAuthUserData(authUserModel);
      navigate(lastRoute);
    }
  }, [
    data,
    lastRoute,
    loginInputState,
    navigate,
    storeAuthUserData,
    setLoginInputState,
    setError,
  ]);

  return (
    <div className="">
      <Loading isLoading={loading} />
      <div className="relative w-full p-6 md:p-10 lg:pl-20 lg:pr-20 lg:pt-32 lg:pb-32">
        <div className="grid w-full grid-cols-1 gap-6 text-onSurface dark:text-gray-200 lg:grid-cols-2">
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src={`${darkMode === 'Dark' ? whiteLogo : originalLogo}`}
              alt=""
              className="w-36 lg:w-52"
            />
            <h2 className="text-center text-2xl font-extrabold uppercase text-primary dark:text-gray-200">
              Webmaster Login
            </h2>
            <h3 className="text-center text-sm">
              Developed by DC Quantum Labs
            </h3>
          </div>
          <form
            className="flex flex-col justify-center gap-6"
            onSubmit={onSubmitHandler}
          >
            <div className="">
              <MyTextInput
                id="email"
                fullWidth={true}
                label="Email/Mobile Number"
                name="email"
                value={loginInputState.email}
                leftIcon={<i className="fa-solid fa-circle-user"></i>}
                autoFocus={true}
                error={error?.email}
                inputType="text"
                required={true}
                inputRef={emailRef}
                onChangeHandler={(event) => {
                  updateLoginInputState(event.target.name, event.target.value);
                }}
              />
            </div>
            <div className="relative w-full text-onSurface">
              <MyPasswordInput
                fullWidth={true}
                id="password"
                label="Password"
                name="password"
                value={loginInputState.password}
                required={true}
                ref={passwordRef}
                error={error?.password}
                leftIcon={<i className="fa-solid fa-key"></i>}
                onChangeHandler={(event) => {
                  updateLoginInputState(event.target.name, event.target.value);
                }}
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="w-full rounded bg-primary px-6 py-3 font-bold uppercase text-onPrimary hover:bg-primaryVariant hover:shadow-md"
              >
                Log in
              </button>
            </div>
          </form>
        </div>

        <button
          className="absolute top-5 right-5 w-6 font-semibold transition-all duration-300 hover:scale-150 hover:text-error"
          onClick={() => {
            setLoginInputState(initialLoginInputState);
            onClose();
          }}
        >
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
