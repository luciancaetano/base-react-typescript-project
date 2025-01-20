import { ITestableProps } from '@app/types/testing';
import React, { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RefCallBack = (instance: any) => void;

export type ChangeHandler = (event: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type?: any;
}) => Promise<void | boolean>;

export interface InputProps extends ITestableProps {
    styles?: React.CSSProperties;
    className?: string;
    error?: ReactNode;
    icon?: ReactNode;
    type: string;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: string;
    placeholder?: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
}
