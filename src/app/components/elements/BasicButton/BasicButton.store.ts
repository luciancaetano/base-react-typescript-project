import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { BasicButtonState } from './BasicButton.types';

const useStore = create<BasicButtonState>()(
  devtools(
    (set) => ({
      counter: 0,
      increase: () => set((state) => ({ counter: state.counter + 1 })),
      decrease: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    {
      name: 'basic-button-store',
    },
  ),
);
export default useStore;
