import localForage from 'localforage';
import { first, omit } from 'lodash';
import { Reducer } from 'redux';
import {
  createTransform, persistReducer as persistReducer2, PersistConfig, StateReconciler,
} from 'redux-persist';
import immutable from 'seamless-immutable';
import presistenceConfig from '@config/persistence';
import { IAppAction } from '@types';
import { APP_STATE_RELOAD, APP_STORAGE_CLEAR } from '@redux/actions/app.actions';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

interface IHelperPersistConfig {
  name: string;
  blacklist?: string[];
  version?: number;
  reducer: Reducer;
  stateReconciler?: false | StateReconciler<any> | 'hardSet' | 'autoMergeLevel2';
}

const immutableTransform = createTransform(
  (inboundState: any) => inboundState && inboundState.asMutable ? inboundState.asMutable({ deep: true }) : inboundState,
  (outboundState) => immutable(outboundState),
);

/**
 * Featured version of persistReducer
 */
export const configureReducerPeristence = ({
  name, reducer, version, ...conf
}: IHelperPersistConfig) => {
  const blacklist = conf.blacklist ? [...conf.blacklist, ...presistenceConfig.blacklistedAttrs] : presistenceConfig.blacklistedAttrs;
  return persistReducer2(
    {
      // eslint-disable-next-line
      stateReconciler: conf.stateReconciler === 'autoMergeLevel2' ? autoMergeLevel2 : (conf.stateReconciler === 'hardSet' ? hardSet : conf.stateReconciler),
      blacklist,
      key: name,
      version: version || 1,
      storage: localForage,
      serialize: false,
      keyPrefix: presistenceConfig.persistenceKeyPrefix,
      transforms: [immutableTransform, createTransform((inboundState: any, key: any) => {
        const paths = blacklist.filter((p: string) => p.search(/\./g) !== -1).map((p: string) => p.split('.'));
        if (paths.length > 0) {
          let state = inboundState;
          paths.forEach((path) => {
            if (first(path) === key) {
              state = omit(state, ...path);
            }
          });
          return state;
        }
        return inboundState;
      })],
      deserialize: (v: Record<string, any>) => v,
    } as PersistConfig<any, any, any>,
    (s, a) => reducer(immutable(s || {}), a).asMutable({ deep: true }),
  );
};

/**
 * Create a simplified reducer and handles APP_STORAGE_CLEAR, APP_STATE_RELOAD actions types
 */
export function createReducer<A extends IAppAction, S extends {}>(
  initialState: S, reducer: Record<string, (s: S, a: A) => S>,
  clearStorageBehavior: 'reset-on-clear-store' | 'keep-on-clear-store', appStateReloadBehavior: 'keep-on-state-reload' | 'reset-on-state-reload',
): Reducer {
  return ((state: S = initialState, action: A) => {
    if (action.type === APP_STORAGE_CLEAR && clearStorageBehavior === 'reset-on-clear-store') {
      return initialState;
    }
    if (action.type === APP_STATE_RELOAD && appStateReloadBehavior === 'reset-on-state-reload') {
      return initialState;
    }
    return reducer[action.type]
      ? reducer[action.type]((state || initialState), action) || (state || initialState)
      : (state || initialState);
  }) as Reducer;
}
