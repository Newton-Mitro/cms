import { NavLink } from 'react-router-dom';
import { IMenu } from '../interfaces/IMenu';

interface MenuViewProps {
  sidebarOpen: boolean;
  toggleSidebar: any;
  menu: IMenu;
}

const MenuView: React.FC<MenuViewProps> = ({
  sidebarOpen,
  toggleSidebar,
  menu,
}) => {
  return (
    <li className="transition-color group flex items-center border-b border-dashed border-purple-100 bg-surface text-onSurface duration-300 hover:bg-background hover:bg-blue-gray-900 hover:text-background dark:bg-brown-900 dark:text-white  dark:hover:bg-blue-gray-900 dark:hover:text-blue-gray-900">
      <NavLink
        // onClick={toggleSidebar}
        to={`${menu?.Route}`}
        className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300 
        ${
          sidebarOpen && 'group-hover:scale-105'
        }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground dark:text-white dark:hover:bg-blue-gray-900 dark:hover:text-white`}
      >
        <span className="text-xl">
          <i className={`${menu?.Icon}  group-active:text-orange-900`}></i>
        </span>
        {sidebarOpen ? <span className="pl-4 ">{menu?.MenuTitle}</span> : null}
      </NavLink>
    </li>
  );
};

export default MenuView;
