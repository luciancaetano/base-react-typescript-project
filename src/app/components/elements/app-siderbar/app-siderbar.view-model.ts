import { AppSiderbarProps } from './app-siderbar.types';
import { useTranslation } from '@lib/i18n';
import { useCallback, useMemo } from 'react';

function useAppSiderbarViewModel({ sidebarExpanded, setSidebarExpanded }: AppSiderbarProps) {
  const { t } = useTranslation();

  const toggleSidebarExpand = useCallback(() => {
    setSidebarExpanded(e => !e);
  }, [ setSidebarExpanded ]);

  const sidebarSize = useMemo(() => sidebarExpanded ? 'w-72' : 'w-20', [ sidebarExpanded ]);

  return {
    t,
    toggleSidebarExpand,
    sidebarSize,
  };
}

export default useAppSiderbarViewModel;
