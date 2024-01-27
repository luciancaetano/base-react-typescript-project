import HomePage from './index';
import AuthProvider from '@components/providers/auth-provider';
import { render } from '@testing-library/react';
import React from 'react';

const wrapper = ({ children }: React.PropsWithChildren<object>) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

describe('HomePage Component', () => {
  it('should render', () => {
    const { container } = render(
      <HomePage />,
      { wrapper },
    );
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<HomePage className="test"></HomePage>, { wrapper });

    expect(container.querySelector('.test')).toBeTruthy();
  });
});