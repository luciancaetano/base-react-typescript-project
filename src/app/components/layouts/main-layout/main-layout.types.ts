import React from 'react';

import { ITestableProps } from '@app/types/testing';

export interface MainLayoutProps extends React.PropsWithChildren<object>, ITestableProps {
    className?: string;
    styles?: React.CSSProperties;
}

export interface MainLayoutStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    incBy: (amount: number) => void;
    decBy: (amount: number) => void;
}