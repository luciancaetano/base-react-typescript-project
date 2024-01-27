import { createContext, useContext, PropsWithChildren } from 'react';

import { AuthProviderContextType } from './auth-provider.types';

const AuthProviderContext = createContext<AuthProviderContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthProviderContext);

    if (context === undefined) {
        throw new Error('AuthProviderContext must be used within a AuthProviderProvider');
    }
    return context;
};


export default function AuthProviderContextProvider({ value, children }: PropsWithChildren<{ value: AuthProviderContextType }>) {
    return (
        <AuthProviderContext.Provider value={value}>
            {children}
        </AuthProviderContext.Provider>
    );
}
