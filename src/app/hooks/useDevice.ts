import { useMemo, useContext } from 'react';
import { IDevice, DeviceOSType } from '@types';
import { DeviceContext } from '@components/elements';

const getOS = (): DeviceOSType => {
  if (navigator.userAgent.match(/Android/i)) {
    return 'android';
  }
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    return 'ios';
  }
  return false;
};

export const useDevice = (): IDevice => {
  const { orientation, online, windowSize } = useContext(DeviceContext);

  const result = useMemo(() => ({
    orientation,
    cordova: !!(window as any).cordova, // support cordova instance checking
    online,
    os: getOS(),
    isPhone: windowSize.width < 450,
    isTablet: windowSize.width >= 450 && windowSize.width <= 850,
    isDesktop: windowSize.width > 850,
    windowSize,
  }), [online, orientation, windowSize]);

  return result;
};
