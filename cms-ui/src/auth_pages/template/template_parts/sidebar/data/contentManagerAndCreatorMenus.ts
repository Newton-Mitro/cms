import uuid from 'react-uuid';
import { IMenu } from '../interfaces/IMenu';

export const contentManagerAndCreatorMenus: IMenu[] = [
  {
    Id: uuid(),
    MenuTitle: 'Home',
    Icon: 'fa-brands fa-fort-awesome',
    Route: '/auth/home',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Pages',
    Icon: 'fa-brands fa-page4',
    Route: '/auth/pages',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Services',
    Icon: 'fa-solid fa-hands-holding-child',
    Route: '/auth/our-services',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Deposit Products',
    Icon: 'fa-solid fa-piggy-bank',
    Route: '/auth/deposit-products',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Loan Products',
    Icon: 'fa-solid fa-sack-dollar',
    Route: '/auth/loan-products',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Downloads',
    Icon: 'fa-solid fa-file-pdf',
    Route: '/auth/downloads',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Notices',
    Icon: 'fa-solid fa-bullhorn',
    Route: '/auth/notices',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Slider Images',
    Icon: 'fa-solid fa-panorama',
    Route: '/auth/slider-images',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Gallery Images',
    Icon: 'fa-regular fa-images',
    Route: '/auth/gallery-images',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Leaders',
    Icon: 'fa-solid fa-user-tie',
    Route: '/auth/leaders',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Job Circulars',
    Icon: 'fa-solid fa-helmet-safety',
    Route: '/auth/job-circulars',
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: 'Account Settings',
    Icon: 'fa-solid fa-user-gear',
    Route: '/auth/account-settings',
    Menus: [],
  },
];
