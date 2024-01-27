import { useCallback, useState } from 'react';

import { useAuth } from '@components/providers/auth-provider';

import { ProtectedPageProps } from './protected-page.types';

function useProtectedPageViewModel({ }: ProtectedPageProps) {
    const [counter, setCounter] = useState(0);
    const { signout } = useAuth();

    const handleIncClick = useCallback(() => {
        setCounter((c) => c + 1);
    }, []);

    return {
        handleIncClick,
        counter,
        signout,
    };
}

export default useProtectedPageViewModel;