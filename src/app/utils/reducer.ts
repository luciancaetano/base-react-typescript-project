import { IAppAction } from '@types';

/**
 * Create a simplified reducer
 */
export function createReducer<A extends IAppAction, S extends {}>(
  initialState: S, reducer: Record<string, (s: S, a: A) => S>,
) {
  return (state: S = initialState, action: A) => reducer[action.type]
    ? reducer[action.type]((state || initialState), action) || (state || initialState)
    : (state || initialState);
}
