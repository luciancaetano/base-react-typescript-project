/**
 * This actions affects only reducers wrapper by createReducer
 */

export enum AppActionsEnum {
  APP_STORAGE_CLEAR = 'APP::APP_STORAGE_CLEAR',
  APP_STATE_RELOAD = 'APP::APP_STATE_RELOAD',
}

export type AppActionsType =
  | { type: AppActionsEnum.APP_STORAGE_CLEAR }
  | { type: AppActionsEnum.APP_STORAGE_CLEAR };

/**
 * Reset app app storage, ex: Logout
 */
const appResetStore = (): AppActionsType => ({
  type: AppActionsEnum.APP_STORAGE_CLEAR,
});

/**
 * Reload application store, reload and refetch all basic persisted informations
 */
const appReloadStore = () => ({
  type: AppActionsEnum.APP_STATE_RELOAD,
});

export const appActions = { appResetStore, appReloadStore };
