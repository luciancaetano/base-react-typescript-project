import React, { PropsWithChildren } from 'react';
import './AppLayout.scss';

const AppLayout = ({ children }: PropsWithChildren<{}>) => (
  <div className="applayout">
    {children}
  </div>
);

export default AppLayout;
