/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook } from '@testing-library/react';
import useNotFoundViewViewModel from './NotFoundView.view-model';

describe('NotFoundView ViewModel', () => {
  it('should render', () => {
    const { result } = renderHook(() => useNotFoundViewViewModel({}));
    expect(result.current).toBeTruthy();
  });
});
