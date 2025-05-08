import { MainPlayerPageProps } from './main-player-page.types';
import { useTranslation } from '@lib/i18n';
import { useCallback, useState } from 'react';

function useMainPlayerPageViewModel({ }: MainPlayerPageProps) {
  const [ counter, setCounter ] = useState(0);
  const { t } = useTranslation();
  const handleIncClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleIncClick,
    counter,
    t,
  };
}

export default useMainPlayerPageViewModel;
