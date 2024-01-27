import { sizes, variants } from './button.constants';
import { ITestableProps } from '@app/types/testing';
import React from 'react';



type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never }
    | { endIcon: React.ReactElement; startIcon?: never }
    | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & IconProps & ITestableProps & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
}
