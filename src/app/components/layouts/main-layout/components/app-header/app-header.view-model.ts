import { AppHeaderProps } from './app-header.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import React, { useCallback } from 'react';

function useAppHeaderViewModel({ setSidebarOpen }: AppHeaderProps) {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();

  const toggleSidebar = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setSidebarOpen(open => !open);
  }, [ setSidebarOpen ]);

  return {
    isAuthenticated,
    user,
    t,
    toggleSidebar,
  };
}

export default useAppHeaderViewModel;
