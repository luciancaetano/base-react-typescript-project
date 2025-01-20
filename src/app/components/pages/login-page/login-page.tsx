import styles from './login-page.module.scss';
import { LoginPageProps } from './login-page.types';
import useLoginPageViewModel from './login-page.view-model';
import Input from '@components/elements/input';
import ExternalFormPageLayoutLayout from '@components/layouts/external-form-page-layout-layout';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import { Button } from 'primereact/button';
import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage(props: LoginPageProps) {
  const { className, testingID } = props;

  const { t, errors, handleSubmit, onSubmit, register, isError, isPending, error } = useLoginPageViewModel(props);

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
          <Input
            type="text"
            id="email"
            className="w-full"
            label={t('email')}
            {...register('email', { required: true })}
            error={errors.email && t('emailRequired')}
          />
        </div>

        <div className="w-full">
          <Input
            type="password"
            id="password"
            className="w-full"
            label={t('password')}
            {...register('password', { required: true })}
            error={errors.password && t('passwordRequired')}
          />
        </div>

        <div className="flex items-start">
          <NavLink to="/password-recovery" className="text-sm text-primary hover:underline ml-auto cursor-pointer">{t('forgotPassword')}</NavLink>
        </div>
        <Button
          className="w-full text-center"
          type="submit" label={t('login')}
          icon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" fontSize="32" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4l5-5l-5-5m5 5H3"></path></svg>}
        />

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
