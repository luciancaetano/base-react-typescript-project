import styles from './app-header.module.scss';
import { AppHeaderProps } from './app-header.types';
import useAppHeaderViewModel from './app-header.view-model';
import DarkModeSwitch from '@components/elements/dark-mode-switch';
import UserDropdown from '@components/elements/user-dropdown';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

export const APP_HEADER_PORTAL_ID = 'main-app-header-sys';

function AppHeader(props: AppHeaderProps) {
  const { className, testingID, children } = props;

  const { toggleSidebar } = useAppHeaderViewModel(props);

  return (
    <header className={clsx('app-header sticky top-0 z-999 flex w-full bg-gray-100 dark:bg-transparent', styles.appHeader,className)} data-testingid={testingID}>

      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-7">
        <div id={APP_HEADER_PORTAL_ID} className="hidden md:flex lg:flex flex-1 h-full lg:visible sm:hidden"></div>
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleSidebar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-default" aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <Link className="block flex-shrink-0 lg:hidden" to="/">
            LOGO
          </Link>
        </div>

        <div className="hidden sm:block">
          {children}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitch/>
          </ul>
          <UserDropdown/>
        </div>
      </div>
    </header>
  );
}

export default React.memo(withResourceBundle( AppHeader , () => import('./translations')));
