import { AppHeaderProps } from './app-header.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useMemo } from 'react';

function useAppHeaderViewModel({ }: AppHeaderProps) {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();

  const initials = useMemo(() => {
    if(!user) {
      return '';
    }

    const [first, last] = user.split(' ');

    if(!first) {
      return '';
    }

    if(!last) {
      return first[0];
    }

    return `${first[0]}${last[0]}`;
  }, [user]);

  return {
    isAuthenticated,
    user,
    t,
    initials,
  };
}

export default useAppHeaderViewModel;