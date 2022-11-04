/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react';
import useBasicButtonViewModel from './BasicButton.ViewModel';

describe('BasicButton ViewModel', () => {
  it('should render', () => {
    const { result } = renderHook(() => useBasicButtonViewModel({
      onClick: jest.fn(),
    }));
    expect(result.current).toBeTruthy();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    const { result } = renderHook(() => useBasicButtonViewModel({
      onClick,
    }));
    act(() => {
      result.current.handleClick();
    });
    expect(onClick).toHaveBeenCalled();
  });
});
