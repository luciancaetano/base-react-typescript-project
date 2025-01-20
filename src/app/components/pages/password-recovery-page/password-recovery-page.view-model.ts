import { PasswordRecoveryPageFormInput, PasswordRecoveryPageProps } from './password-recovery-page.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function useLoginPageViewModel({ }: PasswordRecoveryPageProps) {
  const { t } = useTranslation();
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordRecoveryPageFormInput>();

  const onSubmit = useCallback<SubmitHandler<PasswordRecoveryPageFormInput>>((data) => {
    authenticate(data.email);
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
