import { ITestableProps } from '@app/types/testing';
import React, { ReactNode } from 'react';

export interface ExternalFormPageLayoutLayoutProps extends React.PropsWithChildren<object>, ITestableProps {
    className?: string;
    style?: React.CSSProperties;
    title: string;
    isPeding?: boolean;
    error?: ReactNode;
    isError?: boolean;
}
