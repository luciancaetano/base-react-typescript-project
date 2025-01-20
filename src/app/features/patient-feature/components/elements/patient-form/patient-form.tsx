import styles from './patient-form.module.scss';
import { PatientFormProps } from './patient-form.types';
import usePatientFormViewModel from './patient-form.view-model';
import Input from '@components/elements/input';
import Select from '@components/elements/select';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';

function PatientForm(props: PatientFormProps) {
  const { className, testingID, style } = props;

  const { t, errors, handleSubmit, onSubmit, register } = usePatientFormViewModel(props);

  return (
    <div className={clsx('patient-form', styles.patientForm, className)} data-testid={testingID} style={style}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          className="w-full"
          label={t('label.name')}
          {...register('name')}
          error={errors.name?.message && t(errors.name.message)}
        />
        <div className="grid grid-cols-8">
          <div className="col-span-full lg:col-span-2 md:col-span-2">
            <Select
              options={[
                { label: t('gender.male'), value: 'M' },
                { label: t('gender.female'), value: 'F' },
                { label: t('gender.select'), value: '' },
              ]}
              defaultValue=""
              label={t('label.gender')}
              {...register('gender')}
              error={errors.gender?.message && t(errors.gender.message)}
            />
          </div>
          <div className="col-span-full lg:col-span-2 md:col-span-2">
            date
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default React.memo(withResourceBundle( PatientForm , () => import('./translations')));
