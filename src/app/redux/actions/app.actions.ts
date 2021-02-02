import { IAppAction } from '@types';

/**
 * This actions affects only reducers wrapper by createReducer
 */

export enum AppActionEnum {
  APP_STORAGE_CLEAR = 'APP::APP_STORAGE_CLEAR',
  APP_STATE_RELOAD = 'APP::APP_STATE_RELOAD',
}

/**
 * Reset app app storage, ex: Logout
 */
const appResetStore = () => ({
  type: AppActionEnum.APP_STORAGE_CLEAR,
} as IAppAction);

/**
 * Reload application store, reload and refetch all basic persisted informations
 */
const appReloadStore = () => ({
  type: AppActionEnum.APP_STATE_RELOAD,
} as IAppAction);

export const appActions = { appResetStore, appReloadStore };
