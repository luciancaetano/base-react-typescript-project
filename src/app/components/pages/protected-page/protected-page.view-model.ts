import { ProtectedPageProps } from './protected-page.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useProtectedPageViewModel({ }: ProtectedPageProps) {
  const [ counter, setCounter ] = useState(0);
  const { signout } = useAuth();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleIncClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const goBackToHome = useCallback(() => {
    navigate('/');
  }, [ navigate ]);

  return {
    handleIncClick,
    counter,
    signout,
    t,
    goBackToHome,
  };
}

export default useProtectedPageViewModel;