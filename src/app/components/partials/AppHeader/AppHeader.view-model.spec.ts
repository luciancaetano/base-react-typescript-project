/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook } from '@testing-library/react';
import useAppHeaderViewModel from './AppHeader.view-model';

describe('AppHeader ViewModel', () => {
  it('should render', () => {
    const { result } = renderHook(() => useAppHeaderViewModel({}));
    expect(result.current).toBeTruthy();
  });
});
