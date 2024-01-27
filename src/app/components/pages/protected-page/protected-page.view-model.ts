import { ProtectedPageProps } from './protected-page.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback, useState } from 'react';

function useProtectedPageViewModel({ }: ProtectedPageProps) {
  const [counter, setCounter] = useState(0);
  const { signout } = useAuth();

  const { t } = useTranslation();

  const handleIncClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleIncClick,
    counter,
    signout,
    t,
  };
}

export default useProtectedPageViewModel;