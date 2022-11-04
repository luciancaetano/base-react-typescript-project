/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

describe('AppRoutes Component', () => {
  it('should render', () => {
    const { container } = render(<HashRouter><AppRoutes /></HashRouter>);
    expect(container).toBeTruthy();
  });
});
