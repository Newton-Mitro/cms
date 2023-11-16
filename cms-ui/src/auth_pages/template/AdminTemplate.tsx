import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useLocalStorage } from 'shared/hooks/useStorage';
import Footer from './template_parts/Footer';
import Header from './template_parts/Header';
import SidebarComponent from './template_parts/sidebar/SidebarComponent';
import useSidebarState from './template_parts/sidebar/hooks/useSidebarState';

export interface AdminTemplateProps {
  children?: React.ReactNode;
}

export const AdminTemplate: FC<AdminTemplateProps> = ({ children }) => {
  const {
    menus,
    sidebarOpen,
    toggleSidebar,
    expendedMenus,
    addOrRemoveExpendedMenu,
  } = useSidebarState();

  const location = useLocation();
  const [lastRoute, setLastRoute] = useLocalStorage('lastRoute', '/');

  useEffect(() => {
    setLastRoute(location.pathname);
  }, [location.pathname, setLastRoute]);

  return (
    <div className="relative h-screen w-full bg-background dark:bg-[#292929] dark:text-onPrimary">
      <section className={`ml-14 h-full`}>
        <header className="h-16 w-full">
          <Header />
        </header>
        <section className="h-[calc(100vh-112px)] overflow-auto">
          <Outlet />
          {children}
        </section>
        <section id="footer" className="mt-auto h-12 w-full">
          <Footer />
        </section>
      </section>
      <section className="fixed left-0 top-0 h-full">
        <SidebarComponent
          menus={menus}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          expendedMenus={expendedMenus}
          addOrRemoveExpendedMenu={addOrRemoveExpendedMenu}
        />
      </section>
    </div>
  );
};
