import React, { PropsWithChildren } from 'react';
import './AppLayout.scss';
import { AppHeader } from '@components/partials';

const AppLayout = ({ children }: PropsWithChildren<{}>) => (
  <div className="applayout">
    <AppHeader />
    {children}
  </div>
);

export default AppLayout;
