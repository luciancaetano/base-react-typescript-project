import { SignupPageFormInput, SignupPageProps } from './signup-page.types';
import authApi from '@api/auth';
import { useAuth } from '@components/providers/auth-provider';
import { useApiError } from '@hooks/use-api-error';
import { useTranslation } from '@lib/i18n';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function useLoginPageViewModel({ }: SignupPageProps) {
  const { t } = useTranslation();
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const { isPending, isError, isSuccess, mutate, ...mutation } = useMutation({
    mutationFn: async(formData: SignupPageFormInput) => {
      const result = await authApi.signup(formData.name, formData.email, formData.password, formData.passwordConfirmation, formData.clinicName, formData.contactPhone, formData.clinicAddress, formData.professionType);

      if(result.status !== 'success' || !result.data || !result.data.token || !result.data.user) {
        throw new Error('Invalid server response');
      }

      authenticate(result.data.token, result.data.user, result.data.tenants ?? []);

      navigate('/');

      return result;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupPageFormInput>();

  const onSubmit = useCallback<SubmitHandler<SignupPageFormInput>>((d) => {
    mutate(d);
  }, [ mutate ]);

  const error = useApiError(mutation.error);

  return {
    t,
    register,
    handleSubmit,
    errors,
    onSubmit,
    isPending,
    isError,
    isSuccess,
    error,
  };
}

export default useLoginPageViewModel;
