import { ReactNode } from 'react';

export interface IMenuItem {
    key: string;
    linkTo?: string;
    onClick?: (item: IMenuItem) => void;
    iconName?: 'dashboard' | 'agenda' | 'patients' | 'services';
    className?: string;
    label: {
        className?: string;
        content: string;
    };
    badge?: {
        className?: string;
        content: ReactNode;
    };
    children?: Array<IMenuItem>;
    active?: boolean | ((item: IMenuItem) => boolean);
}

export interface Divider {
    divider: true;
    label?: string;
}

const sidebarMenuItems: Array<IMenuItem | Divider> = [
  {
    key: 'dashboard',
    label: {
      content: 'sidebar.dashboard',
    },
    iconName: 'dashboard',
    linkTo: '/',
  },
  {
    divider: true,
    label: 'sidebar.clinic',
  },
  {
    key: 'agenda',
    label: {
      content: 'sidebar.agenda',
    },
    iconName: 'agenda',
    linkTo: '/agenda',
  },
  {
    key: 'patients',
    label: {
      content: 'sidebar.patients',
    },
    iconName: 'patients',
    linkTo: '/patients/list',
  },
  {
    divider: true,
    label: 'sidebar.finance',
  },
  {
    key: 'services',
    label: {
      content: 'sidebar.services',
    },
    iconName: 'services',
    linkTo: '/services',
  },
];

export default sidebarMenuItems;
