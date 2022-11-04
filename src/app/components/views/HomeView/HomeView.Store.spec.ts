/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react';
import useHomeViewStore from './HomeView.Store';

describe('HomeView Store', () => {
  it('should render', () => {
    const { result } = renderHook(() => useHomeViewStore());
    expect(result.current).toBeTruthy();
  });

  it('should increment', () => {
    const { result } = renderHook(() => useHomeViewStore());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement', () => {
    const { result } = renderHook(() => useHomeViewStore());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  it('should increment by 5', () => {
    const { result } = renderHook(() => useHomeViewStore());
    act(() => {
      result.current.incBy(5);
    });
    expect(result.current.count).toBe(5);
  });

  it('should decrement by 5', () => {
    const { result } = renderHook(() => useHomeViewStore());
    act(() => {
      result.current.decBy(5);
    });
    expect(result.current.count).toBe(-5);
  });
});
