import { useContext, useEffect, useState } from 'react';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import { adminAndSuperAdminMenus } from '../data/adminAndSuperAdminMenus';
import { contentManagerAndCreatorMenus } from '../data/contentManagerAndCreatorMenus';
import { visitorMenus } from '../data/visitorMenus';
import { IMenu } from '../interfaces/IMenu';

function useSidebarState() {
  const [menus, setMenus] = useState<IMenu[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [expendedMenus, setExpendedMenus] = useState<string[]>([]);
  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  useEffect(() => {
    if (
      authUser &&
      (authUser.user.role === 'Super Admin' || authUser.user.role === 'Admin')
    ) {
      setMenus(adminAndSuperAdminMenus);
    } else if (
      authUser &&
      (authUser.user.role === 'Content Manager' ||
        authUser.user.role === 'Content Creator')
    ) {
      setMenus(contentManagerAndCreatorMenus);
    } else {
      setMenus(visitorMenus);
    }
  }, [authUser, setMenus]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const addOrRemoveExpendedMenu = (menuId: string) => {
    let res = false;
    expendedMenus.forEach((menu_id) => {
      if (menuId === menu_id) {
        res = true;
      }
    });

    if (res) {
      const newAddress = expendedMenus.filter((menu_id) => {
        return menu_id !== menuId;
      });
      setExpendedMenus(newAddress);
    } else {
      setExpendedMenus((priv) => {
        return [...priv, menuId];
      });
    }
  };

  return {
    menus,
    sidebarOpen,
    expendedMenus,
    toggleSidebar,
    addOrRemoveExpendedMenu,
  };
}

export default useSidebarState;
