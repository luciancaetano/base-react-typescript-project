import { useState } from 'react';
import {
  createStore, useStore, StoreMutatorIdentifier, UseBoundStore, StateCreator, Mutate, StoreApi,
} from 'zustand';

function createLocal<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): UseBoundStore<Mutate<StoreApi<T>, Mos>> {
  const hook: any = (selector: any, equalityFn: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [store] = useState(createStore(initializer));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useStore(store, selector, equalityFn);
  };

  return hook;
}
export default createLocal;
