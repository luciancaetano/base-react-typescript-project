import styles from './external-form-page-layout-layout.module.scss';
import { ExternalFormPageLayoutLayoutProps } from './external-form-page-layout-layout.types';
import useExternalFormPageLayoutLayoutViewModel from './external-form-page-layout-layout.view-model';
import bg from '@assets/images/bg.svg';
import logo from '@assets/images/logo.svg';
import DarkModeSwitch from '@components/elements/dark-mode-switch';
import Page from '@components/elements/page';
import clsx from 'clsx';
import React from 'react';

function ExternalFormPageLayoutLayout(props: ExternalFormPageLayoutLayoutProps) {
  const { children, className, testingID, title, style, isPeding, error, isError } = props;

  const { } = useExternalFormPageLayoutLayoutViewModel(props);

  return (
    <Page
      className={clsx(
        'external-form-page-layout-layout',
        'grid min-h-screen grid-cols-12 overflow-auto',
        'relative sm:static',
        styles.externalFormPageLayoutLayout, className,
      )}
      style={style}
      data-testid={testingID}
    >
      <div className="relative hidden bg-gray-100 dark:bg-gray-800 lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9 overflow-hidden">
        <img src={bg} className="object-cover h-full" alt="auth"/>
      </div>

      <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3 bg-white dark:bg-dark">
        <div className="flex flex-col items-stretch p-8 lg:p-16">
          <div className="flex items-center justify-between">
            <div className="inline"><img src={logo} alt="logo-light" className="inline h-10"/></div>

            <DarkModeSwitch/>
          </div>

          {isError && error && (
            <div role="alert" className="alert alert-error text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {isPeding && (
            <div className="absolute top-0 right-0 bottom-0 left-0 z-40 flex items-center justify-center bg-[#ffffffba] dark:bg-[#000000cc]">
              <div role="status">
                <span className="loading loading-dots loading-lg text-primary"></span>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          <div className="mt-12 text-center text-xl font-semibold lg:mt-24">
            {title}
          </div>

          {children}
        </div>

      </div>

    </Page>
  );
}

export default React.memo(ExternalFormPageLayoutLayout);
