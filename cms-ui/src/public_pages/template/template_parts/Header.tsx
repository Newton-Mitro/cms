import originalLogo from 'assets/brand/logo_original.png';
import whiteLogo from 'assets/brand/logo_white.png';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  MyThemeContext,
  MyThemeContextType,
} from 'shared/context/ThemeContext';
import ThemeSwitch from 'shared/hooks/useToggle/ThemeSwitch';
import { ISetting } from 'shared/interfaces/ISetting';

interface HeaderProps {
  scrollFromTop: boolean;
  setting: ISetting | null;
}

const Header: React.FC<HeaderProps> = ({ scrollFromTop, setting }) => {
  const { darkMode } = useContext<MyThemeContextType>(MyThemeContext);
  const [OpenTopNav, setOpenTopNav] = useState(false);
  const [visitorCount, setVisitorCount] = useState<any>(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + '/api/visitor-logs/visitors/count')
      .then((response) => {
        if (response) {
          setVisitorCount(response.data);
        }
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <div className="hidden h-10 border-b  md:hidden lg:block">
        <div className="container mx-auto flex h-full justify-between">
          <ul className="flex h-full gap-2 divide-x text-onSurface dark:text-onPrimary">
            <li className="flex items-center justify-center">
              <span className="text-primary dark:text-onPrimary">Call Us:</span>
              {setting
                ? setting?.customerSupportContact
                : process.env.REACT_APP_COMPANY_CONTACT_NO}
            </li>
            <li className="flex items-center justify-center pl-2">
              {setting
                ? setting?.customerSupportEmail
                : process.env.REACT_APP_COMPANY_EMAIL}
            </li>
            <li className="flex items-center justify-center pl-2">
              {setting
                ? setting?.officeHour
                : process.env.REACT_APP_COMPANY_WORK_HOUR}
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center">
            <ul className="flex gap-2">
              <li className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Today:{' '}
                {visitorCount?.todaysVisitorCount
                  ? ('000000000' + visitorCount?.todaysVisitorCount).slice(-10)
                  : ('000000000' + 0).slice(-10)}
              </li>
              <li className="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                Total:{' '}
                {visitorCount?.totalVisitorCount
                  ? ('000000000' + visitorCount?.totalVisitorCount).slice(-10)
                  : ('000000000' + 0).slice(-10)}
              </li>
              <li className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-surface  text-xl text-primary shadow transition-all duration-200 hover:scale-125 hover:text-error">
                <button
                  onClick={() => {
                    window.open(
                      setting
                        ? setting?.facebookPage
                        : process.env.REACT_APP_COMPANY_FB_PAGE,
                      '_blank',
                      'noreferrer'
                    );
                  }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </li>
              <li className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-surface  text-xl text-primary shadow transition-all duration-200 hover:scale-125 hover:text-error">
                <button
                  onClick={() => {
                    window.open(
                      setting
                        ? setting?.messengerLink
                        : process.env.REACT_APP_COMPANY_MESSENGER_LINK,
                      '_blank',
                      'noreferrer'
                    );
                  }}
                >
                  <i className="fa-brands fa-facebook-messenger"></i>
                </button>
              </li>
              <ThemeSwitch />
            </ul>
          </div>
        </div>
      </div>

      <header
        className={`${
          scrollFromTop && 'fixed top-0 left-0 right-0'
        } z-50 h-20 w-full bg-surface shadow transition-all duration-300 dark:bg-blue-gray-900 dark:text-onPrimary`}
      >
        <div className="relative h-full">
          <div className="container mx-auto flex h-full flex-wrap items-center justify-between">
            <div className="ml-3 md:ml-0">
              <Link to="/" className="flex ">
                <img
                  className={`mr-3 h-10 md:h-16`}
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
                <div className="flex flex-col justify-center text-primary dark:text-onPrimary">
                  <h1 className="-mb-1.5 text-xl font-bold">
                    {setting
                      ? setting?.organizationShortName
                      : process.env.REACT_APP_COMPANY_SHORT_NAME}
                  </h1>
                  <p className="text-[10px]">
                    {setting ? setting?.slogan : 'Unity is Strength'}
                  </p>
                </div>
              </Link>
            </div>

            <button
              type="button"
              className="mx-3 inline-flex items-center justify-center rounded-lg lg:hidden"
              onClick={() => {
                setOpenTopNav(!OpenTopNav);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/3000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
            </button>

            <div
              className={`${
                OpenTopNav
                  ? 'fixed inset-0 top-20 h-screen w-screen bg-surface dark:bg-blue-gray-900  dark:text-onPrimary'
                  : 'hidden'
              } lg:block`}
            >
              <ul
                className={`flex h-20 flex-col items-center gap-4 lg:flex-row`}
              >
                <li>
                  <NavLink
                    to="/"
                    className="main-menu flex items-center justify-center transition-all duration-300 hover:font-bold"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="group flex flex-col items-center gap-4 lg:relative">
                  <NavLink
                    className="main-menu transition-all duration-300 hover:font-bold"
                    to="/about/about-us"
                  >
                    About
                  </NavLink>
                  <ul className="flex flex-col items-center bg-surface text-onSurface hover:cursor-pointer group-hover:visible dark:bg-blue-gray-900 dark:text-onPrimary lg:invisible lg:absolute lg:right-0 lg:top-12 lg:z-10 lg:w-72 lg:overflow-hidden lg:rounded-b-md">
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/about/about-us"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/about/mission-vision"
                    >
                      Mission & Vision
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/about/the-pioneer-of-the-credit-union"
                    >
                      Pioneer of Credit Union
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/about/founder-of-bangle-credit"
                    >
                      Founder of Bangle Credit
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/about/president-message"
                    >
                      Precedent Message
                    </NavLink>
                  </ul>
                </li>

                <li className="group flex flex-col items-center gap-4 lg:relative ">
                  <NavLink
                    className="main-menu transition-all duration-300 hover:font-bold"
                    to={'/leadership/Office Bearer'}
                  >
                    Leadership
                  </NavLink>
                  <ul className="flex flex-col items-center bg-surface text-onSurface hover:cursor-pointer group-hover:visible dark:bg-blue-gray-900 dark:text-onPrimary lg:invisible lg:absolute lg:right-0 lg:top-12 lg:z-10 lg:w-72 lg:overflow-hidden lg:rounded-b-md">
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/leadership/Office Bearer"
                    >
                      Office Bearer
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/leadership/Board Of Director"
                    >
                      Board Of Directors
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/leadership/Supervisory Committee"
                    >
                      Supervisory Committee
                    </NavLink>
                    <NavLink
                      className="main-menu w-full px-4 py-2 text-center transition-all duration-300 hover:bg-primary hover:text-onPrimary lg:text-right"
                      to="/leadership/Credit Committee"
                    >
                      Credit Committee
                    </NavLink>
                  </ul>
                </li>

                <li>
                  <NavLink
                    to="/services"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/saving-deposits"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Saving Deposits
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/loans"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Loans
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/download"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Download
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/notices"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Notices
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/gallery"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Gallery
                  </NavLink>
                </li>

                <li className="group relative inline-block">
                  <NavLink
                    to="/career"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Career
                  </NavLink>
                </li>

                <li className="group relative inline-block">
                  <NavLink
                    to="/contact"
                    className="main-menu transition-all duration-300 hover:font-bold "
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
