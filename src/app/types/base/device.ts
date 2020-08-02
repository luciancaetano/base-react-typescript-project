export type TDeviceOrientation = 'portrait' | 'landscape';
export type TDeviceOS = 'android' | 'ios' | false;

export type TStyleIntent = 'none' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export interface IDeviceWindow {
  width: number;
  height: number;
}

export interface IDeviceContext {
  windowSize: IDeviceWindow;
  orientation: TDeviceOrientation;
  online: boolean;
}

export interface IDevice {
  windowSize: IDeviceWindow;
  orientation: TDeviceOrientation;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  cordova: boolean;
  os: TDeviceOS;
  online: boolean;
}
