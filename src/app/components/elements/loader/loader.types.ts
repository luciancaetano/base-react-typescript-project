import React from 'react';

import { ITestableProps } from '@app/types/testing';

export interface LoaderProps extends ITestableProps {
    className?: string;
    styles?: React.CSSProperties;
}
