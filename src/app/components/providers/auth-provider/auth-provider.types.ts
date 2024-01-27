import React from 'react';

export interface AuthProviderProps extends React.PropsWithChildren<object> {
    className?: string;
}

export interface AuthProviderStore {
    isAuthenticated: boolean;
    user: string;
}

export interface AuthProviderContextType {
    isAuthenticated: boolean;
    user: string;

    authenticate: (user: string) => void;
    signout: () => void;
}