import styles from './login-page.module.scss';
import { LoginPageProps } from './login-page.types';
import useLoginPageViewModel from './login-page.view-model';
import ExternalFormPageLayoutLayout from '@components/layouts/external-form-page-layout-layout';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage(props: LoginPageProps) {
  const { className, testingID } = props;

  const { t, handleSubmit, onSubmit, register, isError, isPending, error } = useLoginPageViewModel(props);

  return (
    <ExternalFormPageLayoutLayout
      title={t('title')}
      data-theme="light"
      className={clsx(styles.loginPage, 'relative',className)}
      testingID={testingID}
      isPeding={isPending}
      isError={isError}
      error={isError && error && t(`apiError.${error}`)}
    >
      <form className="mt-2 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <input
            type="text"
            id="email"
            className="w-full"
            placeholder={t('email')}
            {...register('email', { required: true })}
          />
        </div>

        <div className="w-full">
          <input
            type="password"
            id="password"
            className="w-full"
            placeholder={t('password')}
            {...register('password', { required: true })}
          />
        </div>

        <div className="flex items-start">
          <NavLink to="/password-recovery" className="text-sm text-primary hover:underline ml-auto cursor-pointer">{t('forgotPassword')}</NavLink>
        </div>
        <button
          className="w-full text-center"
          type="submit"
        >
          {t('login')}
        </button>

        <p className="mt-4 text-center text-sm text-base-content/80 md:mt-6">
          {t('registerQuestionText')}&nbsp;
          <NavLink to={'/sign-up'} className="text-primary hover:underline">{t('registerLinkText')}
          </NavLink>
        </p>

        <div className="text-sm font-medium text-gray-500 flex flex-row">
          <NavLink to={'/sign-up'} className="text-primary hover:underline cursor-pointer"></NavLink>
        </div>
      </form>
    </ExternalFormPageLayoutLayout>
  );
}

export default React.memo(withResourceBundle( LoginPage , () => import('./translations')));
