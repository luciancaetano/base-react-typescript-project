import React from 'react';
import './NotFoundView.scss';
import { AppLink } from '@components/elements';

const NotFoundView = () => (
  <div id="notFoundView">
    Page Not Found
    <AppLink to="todoList">
      Go to TodoList
    </AppLink>
  </div>
);

export default React.memo(NotFoundView);
