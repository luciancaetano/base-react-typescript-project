/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import AppLayout from './AppLayout';

describe('AppLayout Component', () => {
  it('should render', () => {
    const { container } = render(<AppLayout />);
    expect(container).toBeTruthy();
  });

  it('should render with className', () => {
    const { container } = render(<AppLayout className="test">Test</AppLayout>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
