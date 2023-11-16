import originalLogo from 'assets/brand/logo_original.png';
import whiteLogo from 'assets/brand/logo_white.png';
import myLogo from 'assets/brand/my_logo.png';
import Login from 'authentication/login/Login';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import MyModal from 'shared/components/my_modal/MyModal';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import {
  MyThemeContext,
  MyThemeContextType,
} from 'shared/context/ThemeContext';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';
import { ISetting } from 'shared/interfaces/ISetting';

interface FooterProps {
  setting: ISetting | null;
}

const Footer: React.FC<FooterProps> = ({ setting }) => {
  const navigate = useNavigate();
  const { darkMode } = useContext<MyThemeContextType>(MyThemeContext);
  const [login, setLogin] = useState<boolean>(false);
  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  return (
    <div className="mt-auto bg-surface text-center text-onSurface dark:bg-blue-gray-900  dark:text-onPrimary">
      <MyModal
        onClose={() => {
          setLogin(false);
        }}
        size={Size.Small}
        rounded={Rounded.Medium}
        variants={MyVariants.SlideInFromLeft}
        openDialogue={login}
      >
        <Login
          onClose={() => {
            setLogin(false);
          }}
        />
      </MyModal>
      <footer className="">
        <div className="container mx-auto flex flex-col items-center justify-center p-3 py-6">
          <Link to="#" className=" flex flex-col items-center justify-center">
            <img
              className="h-20"
              src={
                darkMode === 'Default'
                  ? setting?.originalLogo
                    ? setting?.originalLogo
                    : originalLogo
                  : setting?.whiteLogo
                  ? setting?.whiteLogo
                  : whiteLogo
              }
              alt="header logo"
            />
            <p
              className={`mt-2 font-extrabold ${
                darkMode === 'Default' ? 'text-primary' : 'text-onPrimary'
              }`}
            >
              {setting
                ? setting?.organizationName
                : process.env.REACT_APP_COMPANY_NAME}
            </p>
            <p className="text-sm font-light">
              {setting
                ? setting?.address
                : process.env.REACT_APP_COMPANY_ADDRESS}
            </p>
          </Link>

          <p className="mb-4 text-sm font-light">
            {`©${new Date().getFullYear()} ${
              setting
                ? setting?.organizationShortName
                : process.env.REACT_APP_COMPANY_SHORT_NAME
            }. All Rights Reserved.`}
          </p>

          <div className="flex flex-col items-center justify-center gap-2">
            <img className="-mb-2 h-6" src={myLogo} alt="header logo" />
            <p className="text-xs font-light">Developed by DC Quantum Labs</p>
          </div>
          {authUser ? (
            <button
              className="px-4 text-xs text-primary hover:font-bold hover:underline dark:text-secondary"
              onClick={() => {
                navigate('auth/home');
              }}
            >
              <span>User Panel</span>
            </button>
          ) : (
            <button
              className="px-4 text-xs text-primary hover:font-bold hover:underline dark:text-secondary"
              onClick={() => {
                setLogin(true);
              }}
            >
              <span className="">Webmaster Login</span>
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
