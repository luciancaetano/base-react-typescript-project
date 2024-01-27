import { ITestableProps } from '@app/types/testing';
import React from 'react';


export interface LoaderProps extends ITestableProps {
    className?: string;
    styles?: React.CSSProperties;
}
