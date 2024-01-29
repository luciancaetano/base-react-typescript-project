import { AppHeaderProps } from './app-header.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function useAppHeaderViewModel({ }: AppHeaderProps) {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

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

  const handleGoToHomeClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return {
    isAuthenticated,
    user,
    t,
    initials,
    handleGoToHomeClick,
  };
}

export default useAppHeaderViewModel;