import React from 'react';
import './AppLayout.scss';
import AppHeader from '@components/partials/AppHeader';
import { Outlet } from 'react-router';

function AppLayout() {
  return (
    <div className="applayout">
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default AppLayout;
