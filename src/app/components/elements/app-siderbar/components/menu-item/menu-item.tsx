import styles from './menu-item.module.scss';
import { MenuItemProps } from './menu-item.types';
import useMenuItemViewModel from './menu-item.view-model';
import clsx from 'clsx';
import React from 'react';

function MenuItem(props: MenuItemProps) {
  const { children, item, className, testingID, isChild, sidebarExpanded } = props;

  const { isOpen, handleOnClick, Icon, t } = useMenuItemViewModel(props);

  return (
    <li className={clsx('menu-item', !sidebarExpanded && 'px-4', styles.menuItem, className)} data-testid={testingID}>
      <button
        type="button"
        className={clsx(
          !isChild && 'flex items-center w-full p-2 text-base transition duration-75 rounded-sm group',
          isChild && 'flex items-center w-full p-2 transition duration-75 rounded-sm pl-5 group',
          'text-sidebar-item-default-content dark:text-sidebar-dark-item-default-content',
          'hover:text-sidebar-item-hover-content hover:bg-sidebar-item-hover-bg dark:hover:text-sidebar-dark-item-hover-content dark:hover:bg-sidebar-dark-item-hover-bg',
          item.active && '!text-sidebar-item-active-content bg-sidebar-item-active-bg dark:text-sidebar-dark-item-active-content dark:bg-sidebar-dark-item-active-bg',
          !sidebarExpanded && 'justify-center',
          item.className,
        )}
        onClick={handleOnClick}
      >
        {Icon && (
          <Icon
            className={clsx(
              'w-5 h-5 transition duration-75 text-sidebar-item-default-content dark:text-sidebar-dark-item-default-content',
              'group-hover:text-sidebar-item-hover-content dark:group-hover:text-sidebar-dark-item-hover-content',
              !sidebarExpanded && 'w-6 h-6',
            )}
          />
        )}
        <span className={clsx('flex-1 ms-3 text-left rtl:text-right whitespace-nowrap', !sidebarExpanded && 'hidden', item.label.className)}>{t(item.label.content)}</span>
        {item.badge && (
          <span
            className={clsx('inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300', item.badge.className)}
          >
            {item.badge.content}
          </span>
        )}
        {children && (
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        )}
      </button>
      {children && isOpen && (
        <ul className="py-2">
          {children}
        </ul>
      )}
    </li>
  );
}

export default React.memo(MenuItem);
