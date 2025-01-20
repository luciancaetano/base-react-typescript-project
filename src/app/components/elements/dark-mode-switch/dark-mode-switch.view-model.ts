import { DarkModeSwitchProps } from './dark-mode-switch.types';
import { PrimeReactContext } from 'primereact/api';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

function getPreferredColorScheme(): 'dark' | 'light' {
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function useDarkModeSwitchViewModel({ }: DarkModeSwitchProps) {
  const { changeTheme } = useContext(PrimeReactContext);

  const [ colorMode, setColorMode ] = useState(getPreferredColorScheme());
  const intialized = useRef(false);

  const setPrimeReactDarkMode = useCallback((dark: boolean) => {
    const linkElementId = 'theme-link';
    const linkElement = document.getElementById(linkElementId) as HTMLLinkElement;

    const darkTheme = 'lara-dark-blue';
    const lightTheme = 'lara-light-blue';

    const theme = dark ? darkTheme : lightTheme;

    if(!linkElement) return;

    const newThemeUrl = `/themes/${theme}/theme.css`;
    const newLinkElement = document.createElement('link');

    if(!newThemeUrl) return;

    newLinkElement.setAttribute('rel', 'stylesheet');
    newLinkElement.setAttribute('id', linkElementId);
    newLinkElement.setAttribute('href', newThemeUrl);

    linkElement.parentNode?.replaceChild(newLinkElement, linkElement);
  }, []);

  useEffect(() => {
    const mode = window.localStorage.getItem('app-color-mode');

    if(mode && (mode === 'dark' || mode === 'light')) {
      setColorMode(mode as 'dark' | 'light');
      setPrimeReactDarkMode(mode === 'dark');
    }
    intialized.current = true;
  }, [ changeTheme, setPrimeReactDarkMode ]);

  const switchColorMode = useCallback(() => {
    setColorMode(cm => {
      const cmode = cm === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('app-color-mode', cmode);
      return cmode;
    });
  }, []);

  useEffect(() => {
    const currentColorModeClasses = document.body.classList;

    if(colorMode === 'dark') {
      currentColorModeClasses.add('dark');
    } else {
      currentColorModeClasses.remove('dark');
    }

    setPrimeReactDarkMode(colorMode === 'dark');

    document.body.setAttribute('data-theme', colorMode);
  },[ colorMode, setPrimeReactDarkMode ]);

  return {
    colorMode,
    switchColorMode,
  };
}

export default useDarkModeSwitchViewModel;
