export type DeviceOrientationType = 'portrait' | 'landscape';
export type DeviceOSType = 'android' | 'ios' | false;

export type StyleIntentType = 'none' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export interface IDeviceWindow {
  width: number;
  height: number;
}

export interface IDeviceContext {
  windowSize: IDeviceWindow;
  orientation: DeviceOrientationType;
  online: boolean;
}

export interface IDevice {
  windowSize: IDeviceWindow;
  orientation: DeviceOrientationType;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  cordova: boolean;
  os: DeviceOSType;
  online: boolean;
}
