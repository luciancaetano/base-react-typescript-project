import { AppHeaderContentProps } from './app-header-content.types';
import { APP_HEADER_PORTAL_ID } from '@components/layouts/main-layout/components/app-header';
import { useMemo } from 'react';

function useAppHeaderContentViewModel({ }: AppHeaderContentProps) {
  const portalElement = useMemo(() => document.querySelector(`.app-header #${APP_HEADER_PORTAL_ID}`), []);

  return {
    portalElement,
  };
}

export default useAppHeaderContentViewModel;
