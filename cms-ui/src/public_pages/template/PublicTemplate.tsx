import Banner from 'public_pages/template/template_parts/Banner';
import Footer from 'public_pages/template/template_parts/Footer';
import Header from 'public_pages/template/template_parts/Header';
import HeroSlider from 'public_pages/template/template_parts/HeroSlider';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  SettingContext,
  SettingContextType,
} from 'shared/context/SettingContext';
export interface PublicTemplateProps {
  children?: React.ReactNode;
}

export default function PublicTemplate({ children }: PublicTemplateProps) {
  const [scrollFromTop, setScrollFromTop] = useState(false);
  const location = useLocation();
  const urlArrays = location.pathname.split('/');

  const { setting, updateSetting } = React.useContext(
    SettingContext
  ) as SettingContextType;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window?.scrollY > 260 ? setScrollFromTop(true) : setScrollFromTop(false);
    });

    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="font-sans-serif relative flex min-h-screen flex-col overflow-hidden bg-background text-onBackground dark:bg-[#292929]">
      <Header scrollFromTop={scrollFromTop} setting={setting} />
      {urlArrays[1] === '' ? <HeroSlider /> : <Banner />}

      <div className="px-4 py-10 md:px-2 md:py-14 lg:px-0 lg:py-20">
        <Outlet />
      </div>
      <Footer setting={setting} />
      {scrollFromTop && (
        <div
          className="fixed right-10 bottom-5 flex h-12 w-12  flex-col items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 hover:cursor-pointer dark:bg-secondary"
          onClick={() => scrollToTop()}
        >
          <i className="fa-solid fa-arrow-up fa-xl fa-bounce text-white dark:text-onPrimary"></i>
        </div>
      )}

      <div className="fixed bottom-60 -right-44 flex h-12 flex-col items-center justify-center rounded-l-full bg-white shadow-md transition-all duration-300 hover:right-0 hover:scale-110 hover:cursor-pointer hover:shadow-lg">
        <button
          className="flex items-center justify-center gap-3 pr-5 pl-4"
          onClick={() => {
            window.open(setting?.messengerLink, '_blank', 'noreferrer');
          }}
        >
          <i className="fa-brands fa-facebook-messenger fa-bounce text-2xl text-blue-400"></i>
          <div className="text-primary ">Chat with Messenger</div>
        </button>
      </div>
    </div>
  );
}
