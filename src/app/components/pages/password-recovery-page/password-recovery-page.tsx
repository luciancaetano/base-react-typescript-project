import Input from './components/input';
import styles from './password-recovery-page.module.scss';
import { PasswordRecoveryPageProps } from './password-recovery-page.types';
import useLoginPageViewModel from './password-recovery-page.view-model';
import ExternalFormPageLayoutLayout from '@components/layouts/external-form-page-layout-layout';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function PasswordRecoveryPage(props: PasswordRecoveryPageProps) {
  const { className, testingID } = props;

  const { t, errors, handleSubmit, onSubmit, register } = useLoginPageViewModel(props);

  return (
    <ExternalFormPageLayoutLayout title={t('title')} className={clsx('password-recovery-page', styles.loginPage, className)} testingID={testingID}>
      <div className="text-center space-y-4">
        <p className="text-gray-600">
          {t('desc')}
        </p>
      </div>

      <form className="md:mt-8 sm:mt-2 md:space-y-6 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <input autoComplete="false" name="hidden" type="text" className="hidden"/>
        <Input
          type="email"
          icon={(<FaMailBulk className="h-4 w-4 opacity-70"/>)}
          {...register('email', { required: true })}
          required
          error={errors.email?.message && t(errors.email?.message)}
          placeholder={t('email')}
        />
        <Input
          type="email"
          icon={(<FaMailBulk className="h-4 w-4 opacity-70"/>)}
          {...register('confirmEmail', { required: true })}
          required
          error={errors.confirmEmail?.message && t(errors.confirmEmail?.message)}
          placeholder={t('confirmEmail')}
        />
        <p className="text-sm text-gray-500">
          {t('emailNotification')}
        </p>
        <button type="submit" className="btn btn-primary text-gray-50 !mt-4 sm:mt-8">{t('submit')}</button>
        <NavLink to={'/login'} className="ml-4 btn btn-error text-gray-50 !mt-4 sm:mt-8">{t('back')}</NavLink>
      </form>
    </ExternalFormPageLayoutLayout>
  );
}

export default React.memo(withResourceBundle( PasswordRecoveryPage , () => import('./translations')));
