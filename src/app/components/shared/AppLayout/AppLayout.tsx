import React, { PropsWithChildren } from 'react';
import './AppLayout.scss';
import { AppHeader } from '@components/shared';

const AppLayout = ({ children }: PropsWithChildren<{}>) => (
  <div className="appLayout">
    <AppHeader />
    {children}
  </div>
);

export default AppLayout;
