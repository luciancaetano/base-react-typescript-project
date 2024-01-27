import React from 'react';

import { ITestableProps } from '@app/types/testing';


export interface HomePageProps extends React.PropsWithChildren<object>, ITestableProps {
    className?: string;
    styles?: React.CSSProperties;
}

export interface HomePageStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    incBy: (amount: number) => void;
    decBy: (amount: number) => void;
}

export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}