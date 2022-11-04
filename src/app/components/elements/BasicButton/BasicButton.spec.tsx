/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent } from '@testing-library/react';
import BasicButton from './BasicButton';

describe('BasicButton Store', () => {
  it('should render', () => {
    const { container } = render(<BasicButton />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<BasicButton><div>Test</div></BasicButton>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<BasicButton className="test">Test</BasicButton>);

    expect(container.querySelector('.test')).toBeTruthy();
  });

  it('should render with children and onClick', () => {
    const onClickFn = jest.fn();
    const { container } = render(<BasicButton onClick={onClickFn}>Test</BasicButton>);

    expect(container).toBeTruthy();
    expect(onClickFn).not.toHaveBeenCalled();

    fireEvent.click(container.querySelector('button') as Element);

    expect(onClickFn).toHaveBeenCalled();
  });
});
