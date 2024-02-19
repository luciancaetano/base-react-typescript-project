import { LoginPageFormInput, LoginPageProps } from './login-page.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function useLoginPageViewModel({ }: LoginPageProps) {
  const { t } = useTranslation();
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageFormInput>();

  const onSubmit = useCallback<SubmitHandler<LoginPageFormInput>>((data) => {
    authenticate(data.username);
    navigate('/');
  }, [ authenticate, navigate ]);

  return {
    t,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}

export default useLoginPageViewModel;
