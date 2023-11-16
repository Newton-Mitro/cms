import whiteLogo from 'assets/brand/logo_white.png';
import React, { useEffect, useState } from 'react';
import MySearchInput from 'shared/components/MySearchInput';
import MenusView from './components/MenusView';
import { adminAndSuperAdminMenus } from './data/adminAndSuperAdminMenus';
import { IMenu } from './interfaces/IMenu';

interface SidebarComponentProps {
  menus: IMenu[];
  sidebarOpen: boolean;
  expendedMenus: string[];
  addOrRemoveExpendedMenu: (menuId: string) => void;
  toggleSidebar: () => void;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({
  menus,
  sidebarOpen,
  expendedMenus,
  addOrRemoveExpendedMenu,
  toggleSidebar,
}) => {
  const [filterMenus, setFilterMenus] = useState<IMenu[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    onSearchFilter(searchText);
  }, [searchText]);

  const tempArray: IMenu[] = [];
  function allDescendants(myMenus: IMenu[], searchText: string) {
    for (var i = 0; i < myMenus.length; i++) {
      if (
        myMenus[i].Menus.length === 0 &&
        myMenus[i].MenuTitle.toLocaleLowerCase().match(
          searchText.toLocaleLowerCase()
        )
      ) {
        tempArray.push(myMenus[i]);
      } else {
        allDescendants(myMenus[i].Menus, searchText);
      }
    }
    if (searchText.length === 0) {
      setFilterMenus(() => {
        return [];
      });
    } else {
      setFilterMenus(() => {
        return [...tempArray];
      });
    }
  }

  const onSearchFilter = (searchText: string) => {
    allDescendants(adminAndSuperAdminMenus, searchText);
  };

  return (
    <aside
      className={`relative z-[10000000] h-full bg-surface shadow dark:bg-blue-gray-900
        ${sidebarOpen ? 'w-80' : 'w-14'}
  transition-all duration-300 ease-in-out`}
    >
      <button
        className="absolute top-3 -right-4 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-secondary p-2 text-xl text-onSecondary"
        onClick={() => {
          toggleSidebar();
        }}
      >
        {sidebarOpen ? (
          <i className="fa-solid fa-arrow-left"></i>
        ) : (
          <i className="fa-solid fa-arrow-right"></i>
        )}
      </button>
      <div>
        <div className="flex h-16 w-full items-center justify-center bg-primaryVariant py-2">
          <img
            src={whiteLogo}
            alt=""
            className={`${
              sidebarOpen ? 'h-16 w-16' : 'h-14 w-14'
            } o transform p-2 transition-all duration-700`}
          />
        </div>
        {sidebarOpen && (
          <div className="p-2">
            <MySearchInput
              label={'Search'}
              name={'Search'}
              value={searchText}
              fullWidth={true}
              leftIcon={<i className="fa-solid fa-magnifying-glass fa-lg"></i>}
              onChangeHandler={(event) => setSearchText(event.target.value)}
              onSubmit={(event) => {
                event.preventDefault();
              }}
              onResetClick={(event) => setSearchText('')}
            />
          </div>
        )}

        <div className="flex h-[calc(100vh-122px)] flex-grow flex-col justify-between overflow-auto text-onSurface">
          <ul className="flex cursor-pointer flex-col justify-center text-onSurface">
            {menus?.map((menu) => (
              <MenusView
                key={menu.Id}
                sidebarOpen={sidebarOpen}
                menu={menu}
                childMenus={menu.Menus}
                toggleSidebar={toggleSidebar}
                expendedMenus={expendedMenus}
                addOrRemoveExpendedMenu={addOrRemoveExpendedMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
