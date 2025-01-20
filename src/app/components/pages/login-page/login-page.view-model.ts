import { LoginPageFormInput, LoginPageProps } from './login-page.types';
import authApi from '@api/auth';
import { TRequestResponseError } from '@app/types/api';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function useLoginPageViewModel({ }: LoginPageProps) {
  const { t } = useTranslation();
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const { isPending, isError, isSuccess, mutate, ...mutation } = useMutation({
    mutationFn: async(formData: LoginPageFormInput) => {
      const result = await authApi.login(formData.email, formData.password);

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
  } = useForm<LoginPageFormInput>();

  const onSubmit = useCallback<SubmitHandler<LoginPageFormInput>>((data) => {
    mutate(data);
  }, [ mutate ]);

  const error = useMemo(() => {
    const e = mutation.error as TRequestResponseError;

    if(e?.code === 'ERR_NETWORK') {
      return 'ERR_NETWORK';
    }

    if(e?.code === 'ERR_BAD_REQUEST')
    {
      if(e?.response?.data?.error?.code === 'INVALID_EMAIL_PASSWORD')
      {
        return 'INVALID_EMAIL_PASSWORD';
      }
    }
    return 'ERR_UNKNOWN';
  }, [ mutation.error ]);

  return {
    t,
    register,
    handleSubmit,
    errors,
    onSubmit,
    isPending,
    isSuccess,
    isError,
    error,
  };
}

export default useLoginPageViewModel;
