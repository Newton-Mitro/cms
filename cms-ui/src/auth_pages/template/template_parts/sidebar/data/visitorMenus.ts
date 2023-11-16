import uuid from 'react-uuid';
import { IMenu } from '../interfaces/IMenu';

export const visitorMenus: IMenu[] = [
  {
    Id: uuid(),
    MenuTitle: 'Account Settings',
    Icon: 'fa-solid fa-user-gear',
    Route: '/auth/account-settings',
    Menus: [],
  },
];
