import createLocal from '@utils/zustand';
import { BasicStore } from './BasicButton.types';

const useStand = createLocal<BasicStore>((set) => ({
  count: 0,
  increment() {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement() {
    set((state) => ({ count: state.count - 1 }));
  },
  incBy(amount: number) {
    set((state) => ({ count: state.count + amount }));
  },
  decBy(amount: number) {
    set((state) => ({ count: state.count - amount }));
  },
}));

export default useStand;
