import { PatientFormProps } from './patient-form.types';
import { IPatientSchema, PatientSchema } from '@features/patient-feature/types/patients';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from '@lib/i18n';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

function usePatientFormViewModel({ onSave, patient }: PatientFormProps) {

  const { t } = useTranslation();

  const { register, formState: { errors }, handleSubmit } = useForm<IPatientSchema>({
    resolver: yupResolver<IPatientSchema>(PatientSchema),
    defaultValues: patient,
  });

  const onSubmit = useCallback<SubmitHandler<IPatientSchema>>((data) => {
    console.info(data);
    onSave?.(data);
  }, [ onSave ]);

  return {
    t,
    onSubmit,
    register,
    errors,
    handleSubmit,
  };
}

export default usePatientFormViewModel;
