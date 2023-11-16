export interface IMenu {
  Id: string;
  MenuTitle: string;
  Icon: String;
  Route: string;
  Menus: IMenu[];
}
