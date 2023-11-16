import { motion } from 'framer-motion';
import React from 'react';
import { IMenu } from '../interfaces/IMenu';
import MenuView from './MenuView';
import ParentMenuView from './ParentMenuView';

interface MenusViewProps {
  menu: IMenu;
  sidebarOpen: boolean;
  expendedMenus: string[];
  addOrRemoveExpendedMenu: (menuId: string) => void;
  toggleSidebar: () => void;
  childMenus?: IMenu[];
}

const MenusView: React.FC<MenusViewProps> = ({
  menu,
  sidebarOpen,
  expendedMenus,
  addOrRemoveExpendedMenu,
  toggleSidebar,
  childMenus,
}) => {
  const ref = React.useRef<HTMLUListElement>(null);
  const menuExpended = expendedMenus.find((menu_id) => {
    return menu_id === menu.Id;
  });
  return (
    <>
      {childMenus?.length !== 0 ? (
        <ParentMenuView
          sidebarOpen={sidebarOpen}
          menu={menu}
          expendedMenus={expendedMenus}
          addOrRemoveExpendedMenu={addOrRemoveExpendedMenu}
          expandOrCollapseMenu={menuExpended ? true : false}
        />
      ) : (
        <MenuView
          sidebarOpen={sidebarOpen}
          menu={menu}
          toggleSidebar={toggleSidebar}
        />
      )}

      {childMenus?.length !== 0 && menuExpended && (
        <motion.div
          className={`overflow-hidden text-justify`}
          initial={{ x: 50, opacity: 0, height: 0 }}
          animate={{ x: 0, opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          exit={{
            x: -50,
            opacity: 0,
            transition: { duration: 0.5 },
            height: 0,
          }}
          // style={{
          //   maxHeight: expandOrCollapseMenu ? '1000px' : '0px',
          // }}
        >
          <ul className="cursor-pointer" ref={ref}>
            {childMenus?.map((menu) => {
              return (
                <MenusView
                  key={menu.Id}
                  menu={menu}
                  sidebarOpen={sidebarOpen}
                  toggleSidebar={toggleSidebar}
                  childMenus={menu?.Menus}
                  expendedMenus={expendedMenus}
                  addOrRemoveExpendedMenu={addOrRemoveExpendedMenu}
                />
              );
            })}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default MenusView;
