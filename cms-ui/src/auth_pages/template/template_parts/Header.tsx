import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import ThemeSwitch from 'shared/hooks/useToggle/ThemeSwitch';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const { authUser, clearAuthUserData } =
    useContext<AuthUserContextType>(AuthUserContext);

  return (
    <header className="flex h-full w-full items-center justify-between bg-surface px-6 text-onSurface shadow dark:bg-blue-gray-900 dark:text-white">
      <div className="flex cursor-pointer items-center gap-2">
        <Link
          to="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary p-2 text-xl text-onPrimary transition-all duration-300 hover:scale-110 md:hidden"
        >
          <i className="fa-solid fa-repeat"></i>

          <span className="sr-only ">Switch To Front</span>
        </Link>
        <Link
          to="/"
          className="hidden text-onSurface  transition-all duration-300 hover:underline dark:text-white md:block"
        >
          <span className="">Switch To Front</span>
        </Link>
      </div>

      <div className="flex h-full items-center gap-2">
        <ThemeSwitch />

        {/* <div className="group relative h-full">
          <button className="flex h-full items-center gap-2">
            <span className="flex h-full items-center">
              <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary p-2 text-xl text-onPrimary transition-all duration-300 hover:scale-110">
                <i className="fa-brands fa-pagelines" />
              </button>
            </span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <div className="text-left">
                <div className="">Head Office</div>
                <div className="text-[9px]">Branch</div>
              </div>
            </div>
          </button>
        </div> */}

        <div className="group relative h-full">
          <button className="flex h-full items-center gap-2">
            <span className="flex h-full items-center">
              <img
                src={
                  authUser?.user.photo
                    ? authUser?.user.photo
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_mjW-rvOfpg1q3Lum1d4HbvOIFhrSidaaA&usqp=CAU'
                }
                alt="user profile"
                className="h-9 w-9 rounded-full"
              />
            </span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <div className="text-left">
                <div className="">{authUser?.user.name}</div>
                <div className="text-[9px]">
                  {authUser?.user.role ? authUser?.user.role : 'Visitor'}
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary p-2 text-xl text-onPrimary transition-all duration-300 hover:scale-110"
            onClick={() => {
              clearAuthUserData();
              navigate('/');
            }}
          >
            <span className="sr-only">Log out</span>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
