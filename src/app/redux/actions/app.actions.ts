import { IAppAction } from '@types';

export const APP_STORAGE_CLEAR = 'APP::APP_STORAGE_CLEAR';
export const APP_STATE_RELOAD = 'APP::APP_STATE_RELOAD';

/**
 * Reset app app storage, ex: Logout
 */
const appResetStore = () => ({
  type: APP_STORAGE_CLEAR,
} as IAppAction);

/**
 * Reload application store, reload and refetch all basic persisted informations
 */
const appReloadStore = () => ({
  type: APP_STATE_RELOAD,
} as IAppAction);

export const appActions = { appResetStore, appReloadStore };
