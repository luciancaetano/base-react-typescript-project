/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import AppHeader from './AppHeader';

describe('AppHeader Component', () => {
  it('should render', () => {
    const { container } = render(<AppHeader />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<AppHeader><div>Test</div></AppHeader>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<AppHeader className="test">Test</AppHeader>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
