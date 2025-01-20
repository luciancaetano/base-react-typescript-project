import { MainLayoutProps } from './main-layout.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useMainLayoutViewModel({ }: MainLayoutProps) {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const [ sidebarExpandedVal, setSidebarExpandedVal ] = useState<'t' | 'f'>(localStorage.getItem('sidebar-expanded') as 't' | 'f' ?? 'f');

  const handleGoToHomeClick = useCallback(() => {
    navigate('/');
  }, [ navigate ]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpandedVal);
  }, [ sidebarExpandedVal ]);

  const setSidebarExpanded = useCallback((expanded: boolean | ((e: boolean) => boolean)) => {
    if(typeof expanded === 'boolean') {
      setSidebarExpandedVal(expanded? 't' : 'f');
    } else if (typeof expanded === 'function') {
      const expandedVal = expanded(sidebarExpandedVal == 't');
      setSidebarExpandedVal(expandedVal? 't' : 'f');
    }

  }, [ sidebarExpandedVal ]);

  const sidebarExpanded = useMemo(() => sidebarExpandedVal === 't', [ sidebarExpandedVal ]);

  return {
    isAuthenticated,
    user,
    t,
    handleGoToHomeClick,
    sidebarOpen,
    setSidebarOpen,
    sidebarExpanded,
    setSidebarExpanded,
  };
}

export default useMainLayoutViewModel;
