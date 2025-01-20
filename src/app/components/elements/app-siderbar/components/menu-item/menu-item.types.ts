import { ITestableProps } from '@app/types/testing';
import { IMenuItem } from '@config/menu.config';
import React from 'react';

export interface MenuItemProps extends ITestableProps, React.PropsWithChildren {
    className?: string;
    styles?: React.CSSProperties;
    item: IMenuItem;
    isChild?: boolean;
    sidebarExpanded: boolean;
}
