/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react';
import useAppRoutesViewModel from './AppRoutes.view-model';

describe('AppRoutes ViewModel', () => {
  it('should render', () => {
    const { result } = renderHook(() => useAppRoutesViewModel({}));
    expect(result.current).toBeTruthy();
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useAppRoutesViewModel({}));
    expect(result.current.counter).toBe(0);
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.counter).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useAppRoutesViewModel({}));
    expect(result.current.counter).toBe(0);
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.counter).toBe(1);
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.counter).toBe(2);
  });
});
