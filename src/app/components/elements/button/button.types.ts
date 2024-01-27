import React from 'react';

import { ITestableProps } from '@app/types/testing';

import { sizes, variants } from './button.constants';

type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never }
    | { endIcon: React.ReactElement; startIcon?: never }
    | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & IconProps & ITestableProps & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
}
