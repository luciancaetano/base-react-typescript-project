import AuthProvider, { useAuth } from './index';
import { renderHook, act } from '@testing-library/react-hooks';
import { PropsWithChildren } from 'react';

describe('AuthProvider Component and useAuth hook', () => {
  it('should initialize with default value', () => {
    const wrapper = ({ children }: PropsWithChildren<object>) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current).toBeDefined();
  });

  it('should login', () => {
    const wrapper = ({ children }: PropsWithChildren<object>) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.authenticate('user');
    });

    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should logout', () => {
    const wrapper = ({ children }: PropsWithChildren<object>) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.signout();
    });

    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should validate name', () => {
    const wrapper = ({ children }: PropsWithChildren<object>) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.authenticate('user');
    });

    expect(result.current.user).toBe('user');
  });
});