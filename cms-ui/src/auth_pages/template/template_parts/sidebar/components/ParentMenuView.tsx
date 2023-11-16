import { IMenu } from '../interfaces/IMenu';

interface ParentMenuViewProps {
  sidebarOpen: boolean;
  expandOrCollapseMenu: boolean;
  menu: IMenu;
  expendedMenus: string[];
  addOrRemoveExpendedMenu: (menuId: string) => void;
}

const ParentMenuView: React.FC<ParentMenuViewProps> = ({
  sidebarOpen,
  expandOrCollapseMenu,
  menu,
  addOrRemoveExpendedMenu,
}) => {
  return (
    <li className="w-full border-b border-dashed border-purple-100 text-onSurface transition-colors duration-300 hover:bg-background hover:text-onBackground dark:hover:bg-blue-gray-900">
      <div
        onClick={() => {
          addOrRemoveExpendedMenu(menu.Id);
        }}
        className="group flex w-full items-center justify-between py-2 px-4"
      >
        <div className="flex items-center ">
          <span className="text-xl transition-all duration-300 group-hover:rotate-45">
            <i className={`${menu?.Icon}`}></i>
          </span>
          {sidebarOpen ? <span className="pl-4">{menu?.MenuTitle}</span> : null}
        </div>
        {sidebarOpen ? (
          <div className="">
            {expandOrCollapseMenu ? (
              <i className="fa-solid fa-minus"></i>
            ) : (
              <i className="fa-solid fa-plus"></i>
            )}
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default ParentMenuView;
