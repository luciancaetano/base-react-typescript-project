/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import NotFoundView from './NotFoundView';

describe('NotFoundView Component', () => {
  it('should render', () => {
    const { container } = render(<NotFoundView />);
    expect(container).toBeTruthy();
  });

  it('should render with className', () => {
    const { container } = render(<NotFoundView className="test" />);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
