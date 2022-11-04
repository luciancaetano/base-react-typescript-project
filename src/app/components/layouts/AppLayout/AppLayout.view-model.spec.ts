/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook } from '@testing-library/react';
import useAppLayoutViewModel from './AppLayout.view-model';

describe('AppLayout ViewModel', () => {
  it('should render', () => {
    const { result } = renderHook(() => useAppLayoutViewModel({}));
    expect(result.current).toBeTruthy();
  });
});
