import React, { useState, useEffect } from 'react';
import { IDeviceContext, DeviceOrientationType } from '@types';
import { useDebouncedCallback } from 'use-debounce';

export const DeviceContext = React.createContext<IDeviceContext>({
  online: window.navigator.onLine,
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
});

const DEBOUNC_CALLBACK_TIME = 100;

const DeviceProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState<DeviceOrientationType>(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  const [online, setOnline] = useState<boolean>(window.navigator.onLine);

  const handleWindowResize = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  }, DEBOUNC_CALLBACK_TIME);

  const handleOnline = useDebouncedCallback(() => {
    setOnline(true);
  }, DEBOUNC_CALLBACK_TIME);

  const handleOffLine = useDebouncedCallback(() => {
    setOnline(false);
  }, DEBOUNC_CALLBACK_TIME);

  const handleOrientation = useDebouncedCallback(() => {
    setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  }, DEBOUNC_CALLBACK_TIME);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleOrientation);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffLine);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleOrientation);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffLine);
    };
  });

  return (
    <DeviceContext.Provider value={{ online, orientation, windowSize: { width, height } }}>
      {React.Children.toArray(children)}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
