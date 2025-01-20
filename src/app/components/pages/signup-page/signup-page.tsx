import Input from './components/input';
import styles from './signup-page.module.scss';
import { SignupPageProps } from './signup-page.types';
import useLoginPageViewModel from './signup-page.view-model';
import ExternalFormPageLayoutLayout from '@components/layouts/external-form-page-layout-layout';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { FaKey, FaMailBulk, FaPhone, FaHome, FaDotCircle, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SignupPage(props: SignupPageProps) {
  const { className, testingID } = props;

  const { t, errors, handleSubmit, onSubmit, register, isError, isPending, error } = useLoginPageViewModel(props);

  return (
    <ExternalFormPageLayoutLayout
      title={t('title')}
      data-theme="light"
      className={clsx('signup-page', styles.signupPage, className)}
      testingID={testingID}
      isPeding={isPending}
      isError={isError}
      error={isError && error && t(`apiError.${error}`)}
    >
      <form className="md:mt-8 sm:mt-2 md:space-y-6 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <input autoComplete="false" name="hidden" type="text" className="hidden"/>
        <Input
          type="text"
          icon={(<FaUser className="h-4 w-4 opacity-70"/>)}
          {...register('name', { required: true })}
          required
          error={errors.name?.message && t(errors.name?.message)}
          placeholder={t('name')}
        />
        <Input
          type="email"
          icon={(<FaMailBulk className="h-4 w-4 opacity-70"/>)}
          {...register('email', { required: true })}
          required
          error={errors.email?.message && t(errors.email?.message)}
          placeholder={t('email')}
        />
        <Input
          type="password"
          icon={(<FaKey className="h-4 w-4 opacity-70"/> )}
          {...register('password', { required: true })}
          error={errors.password?.message && t(errors.password?.message)}
          placeholder={t('password')}
          required
        />

        <Input
          type="password"
          icon={(<FaKey className="h-4 w-4 opacity-70"/> )}
          {...register('passwordConfirmation', { required: true })}
          error={errors.passwordConfirmation?.message && t(errors.passwordConfirmation?.message)}
          placeholder={t('passwordConfirmation')}
          required
        />
        <Input
          type="phone"
          icon={(<FaPhone className="h-4 w-4 opacity-70"/> )}
          {...register('contactPhone', { required: false })}
          error={errors.contactPhone?.message && t(errors.contactPhone?.message)}
          placeholder={t('contactPhone')}
        />

        <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-600">{t('dividerClinic')}</div>

        <Input
          type="text"
          icon={(<FaHome className="h-4 w-4 opacity-70"/> )}
          {...register('clinicName', { required: true })}
          error={errors.clinicName?.message && t(errors.clinicName?.message)}
          placeholder={t('clinicName')}
          required
        />

        <Input
          type="text"
          icon={(<FaDotCircle className="h-4 w-4 opacity-70"/> )}
          {...register('professionType', { required: false })}
          error={errors.professionType?.message && t(errors.professionType?.message)}
          placeholder={t('professionType')}
        />

        <button type="submit" className="btn btn-primary text-gray-50 !mt-4 sm:mt-8">{t('submit')}</button>
        <NavLink to={'/login'} className="ml-4 btn btn-error text-gray-50 !mt-4 sm:mt-8">{t('back')}</NavLink>
      </form>
    </ExternalFormPageLayoutLayout>
  );
}

export default React.memo(withResourceBundle( SignupPage , () => import('./translations')));
