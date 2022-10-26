import createStore from '@utils/store';
import { BasicStore } from './BasicButton.types';

const useBasicButtonStore = createStore<BasicStore>((setState) => ({
  count: 0,
  increment() {
    setState((state) => ({
      count: state.count + 1,
    }));
  },
  decrement() {
    setState((state) => ({ count: state.count - 1 }));
  },
  incBy(amount: number) {
    setState((state) => ({ count: state.count + amount }));
  },
  decBy(amount: number) {
    setState((state) => ({ count: state.count - amount }));
  },
}));

export default useBasicButtonStore;
