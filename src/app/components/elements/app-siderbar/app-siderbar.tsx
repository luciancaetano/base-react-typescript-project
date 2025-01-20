import styles from './app-siderbar.module.scss';
import { AppSiderbarProps } from './app-siderbar.types';
import useAppSiderbarViewModel from './app-siderbar.view-model';
import MenuItem from './components/menu-item';
import logoImage from '@assets/images/logo.svg';
import sidebarMenuItems from '@config/menu.config';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, HomeModernIcon } from '@heroicons/react/20/solid';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

function AppSiderbar(props: AppSiderbarProps) {
  const { className, testingID, setSidebarOpen, sidebarExpanded, sidebarOpen } = props;

  const { t, sidebarSize, toggleSidebarExpand } = useAppSiderbarViewModel(props);

  return (
    <div className={clsx('relative app-siderbar overflow-y-visible duration-300 ease-linear', styles.appSiderbar, className)} data-testid={testingID}>
      <button
        className={
          clsx('hidden md:flex lg:flex justify-center cursor-pointer m-0 p-0 bg-white dark:bg-gray-500 z-sidebar-trigger dark:text-white items-center content-center absolute top-10 -right-3.5 w-8 h-8 rounded-full shadow-lg min-h-0',
            'hover:bg-sidebar-item-hover-bg',
            'dark:hover:bg-sidebar-dark-item-hover-bg',
          )
        }
        onClick={toggleSidebarExpand}
      >
        {sidebarExpanded && (
          <ChevronLeftIcon className="w-6 h-6 text-sidebar-item-default-content dark:text-sidebar-dark-item-default-content"/>
        )}
        {!sidebarExpanded && (
          <ChevronRightIcon className="w-6 h-6 text-sidebar-item-default-content dark:text-sidebar-dark-item-default-content"/>
        )}
      </button>

      <aside
        className={clsx(`absolute left-0 top-0 z-sidebar flex h-screen ${sidebarSize}`,
          'flex-col overflow-y-hidden bg-sidebar-base dark:bg-sidebar-dark-bg transition-transform duration-100 ease-linear lg:static lg:translate-x-0',
          'dark:border-r-[#141414]',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'bg-dark border-r border-r-sidebar-border dark:border-r-base-300',
          'overflow-y-visible transition-[width]',
        )}
      >

        <div className={clsx('flex items-center justify-between gap-2 px-6 py-5 lg:py-6', !sidebarExpanded && '!py-2 !px-2')}>
          <NavLink to="/">
            <img src={logoImage} alt="logo"/>
          </NavLink>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <ArrowLeftIcon className="w-8 h-8"/>
          </button>
        </div>

        <button
          className={clsx(
            'flex items-center ml-4 mr-4 mt-4 pl-4 pr-2 pt-1 pb-1 rounded-sm border border-sidebar-clinic-box hover:shadow-md',
            !sidebarExpanded && '!p-2 !mt-6',
            'transition-shadow duration-100 ease-linear',
          )}
        >
          <HomeModernIcon className="w-6 h-6 text-sidebar-clinic-box-text dark:text-sidebar-dark-clinic-box-text"/>
          <div className={clsx('flex flex-col pl-4 pr-2', !sidebarExpanded && '!hidden')}>
            <div className="flex text-left flex-1 text-ssm font-bold text-sidebar-clinic-box-text dark:text-sidebar-dark-clinic-box-text">Clinica Teste</div>
            <div className="flex text-left flex-1 text-xxs text-sidebar-clinic-box-text-addr dark:text-sidebar-dark-clinic-box-text-addr">Rua José Felipe do Amaral</div>
            <div className="flex text-left flex-1 text-xxs text-sidebar-clinic-box-text-addr dark:text-sidebar-dark-clinic-box-text-addr">Ourinhos/SP</div>
          </div>
        </button>

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className={clsx('mt-5 py-4 px-4 lg:mt-4 lg:px-6', !sidebarExpanded && '!px-0 !py-0')}>
            <div>

              <ul className={clsx('font-medium', sidebarExpanded ? 'space-y-0.5' : 'space-y-4')}>
                {sidebarMenuItems.map((item, index) => 'divider' in item ? (
                  <div className={clsx('relative flex pt-2.5 items-center', !sidebarExpanded && 'hidden')} key={index}>
                    {item.label && <span className="flex-shrink mx-2 text-sidebar-divider text-sm">{t(item.label)}</span>}
                    <div className="flex-grow border-t border-sidetext-sidebar-divider dark:border-[#161616]"></div>
                  </div>
                ) : (
                  <MenuItem item={item} key={item.key} sidebarExpanded={sidebarExpanded}>
                    {item.children && item.children.map((child => (
                      <MenuItem item={child} key={`${item.key}:${child.key}`} isChild sidebarExpanded={sidebarExpanded}/>
                    )))}
                  </MenuItem>
                ))}
              </ul>

            </div>

          </nav>
        </div>
      </aside>
    </div>
  );
}

export default React.memo(withResourceBundle( AppSiderbar , () => import('./translations')));
