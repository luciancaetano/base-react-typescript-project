import styles from './patients-list-page.module.scss';
import { PatientsListPageProps } from './patients-list-page.types';
import usePatientsListPageViewModel from './patients-list-page.view-model';
import AppHeaderContent from '@components/elements/app-header-content';
import Page from '@components/elements/page';
import SearchInput from '@components/elements/search-input';
import PatientForm from '@features/patient-feature/components/elements/patient-form';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react';

function PatientsListPage(props: PatientsListPageProps) {
  const { className, testingID, style } = props;

  const {
    t,
    patients,
    handleSearchChange,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    newPatientModalOpen,
    handleAddNewPatient,
    handleCloseAddNewPatientModal,
  } = usePatientsListPageViewModel(props);

  return (
    <Page className={clsx('patients-list-page', styles.patientsListPage, className)} testingID={testingID} style={style}>

      <AppHeaderContent className="w-full flex">
        <Button
          onClick={handleAddNewPatient}
          icon="pi pi-plus"
          label={t('register-patient')}
        />
        <SearchInput onChange={handleSearchChange}/>
      </AppHeaderContent>
      <div className="flow-root pb-5">
        {isFetching && !isFetchingNextPage && (
          <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">

            <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor" fillRule="evenodd"
              />
            </svg>

            <div>Loading ...</div>
          </div>
        )}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {patients.map((p) => (
            <li className="py-3 sm:py-4 cursor-pointer hover:bg-gray-200 p-2 dark:hover:bg-gray-800" key={p.id}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="profile"/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {p.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {p.contactPhone} {p.contactEmail} {p.gender}&nbsp;
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                &nbsp;
                </div>
              </div>
            </li>
          ))}

          {isFetchingNextPage && (
            <li className="py-3 sm:py-4 cursor-pointer hover:bg-gray-200 p-2">
              <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">

                <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                    fill="currentColor" fillRule="evenodd"
                  />
                </svg>

                <div>Loading ...</div>
              </div>
            </li>
          )}
        </ul>

        {hasNextPage && !isFetchingNextPage && !isFetching && patients.length > 0 && (
          <button className="btn btn-primary w-full rounded-none py-3 sm:py-4 cursor-pointer text-white p-2 select-none" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m7.071-7.071a8 8 0 1 1-11.313 0 8 8 0 0 1 11.313 0z"
                  />
                </svg>
                <span>Loading...</span>
              </>
            ) : (
              <span>{t('load-more')}</span>
            )}
          </button>
        )}
      </div>

      <Dialog visible={newPatientModalOpen} onHide={handleCloseAddNewPatientModal} header={t('modal.add-patient')} draggable={false}>
        <PatientForm/>
      </Dialog>

    </Page>
  );
}

export default React.memo(withResourceBundle( PatientsListPage , () => import('./translations')));
