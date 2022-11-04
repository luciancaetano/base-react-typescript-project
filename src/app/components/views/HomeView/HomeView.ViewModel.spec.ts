/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { act, renderHook } from '@testing-library/react';
import useHomeViewViewModel from './HomeView.ViewModel';

describe('HomeView ViewModel', () => {
  it('should render', () => {
    const { result } = renderHook(() => useHomeViewViewModel({}));
    expect(result.current).toBeTruthy();
  });

  it('should increment', () => {
    const { result } = renderHook(() => useHomeViewViewModel({}));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.handleIncrementClick();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement', () => {
    const { result } = renderHook(() => useHomeViewViewModel({}));
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.handleDecrementClick();
    });

    expect(result.current.count).toBe(-1);
  });
});
