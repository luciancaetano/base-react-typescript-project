import {
  useState, useRef, useEffect,
} from 'react';

export type GetFunction<S> = () => S;
export type SetFunction<S> = (partial: S | Partial<S> | ((state: S) => S | Partial<S>), replace?: boolean | undefined) => S;

export type Initializer<S> = (set: SetFunction<S>, get: GetFunction<S>) => S;

export interface StoreApi<S> {
  state: S;
  getState: GetFunction<S>;
  setState: SetFunction<S>;
  subscribe: (listener: (state: S, prevState: S) => void) => () => void;
  destroy: () => void;
}

export class Store<S> implements StoreApi<S> {
  public state: S;

  private listeners: Set<(state: S, prevState: S) => void> = new Set();

  constructor(initializer: Initializer<S>) {
    this.state = initializer(this.setState, this.getState);
  }

  getState = () => this.state;

  setState = (partial: S | Partial<S> | ((state: S) => S | Partial<S>), replace?: boolean) => {
    const prevState = this.state;

    if (typeof partial === 'function') {
      this.state = {
        ...this.state,
        ...(replace ? (partial as any)(this.state) : (partial as any)(this.state)),
      };
    } else {
      this.state = {
        ...this.state,
        ...(replace ? partial : partial),
      };
    }

    this.listeners.forEach((listener) => listener(this.state, prevState));

    return this.state;
  };

  subscribe = (listener: (state: S, prevState: S) => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  destroy = () => {
    this.listeners.clear();
  };
}

type EqualityFn<S> = (a: S, b: S) => boolean;

function createStore<S>(initializer: Initializer<S>) {
  function useStore(equalityFn?: EqualityFn<S>): S {
    const [, setUpdate] = useState({});
    const api = useRef<StoreApi<S>>(new Store(initializer));

    useEffect(() => {
      const unsubscribe = api.current.subscribe(() => {
        if (equalityFn) {
          const state = api.current.getState();
          if (!equalityFn(state, api.current.getState())) {
            setUpdate({});
          }
        } else {
          setUpdate({});
        }
      });

      return () => {
        unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        api.current.destroy();
      };
    }, [equalityFn]);

    return api.current.state;
  }

  return useStore;
}

export default createStore;
