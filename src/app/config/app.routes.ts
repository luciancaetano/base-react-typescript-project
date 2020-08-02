import { createRoute } from '@utils/router';
import * as views from '@components/views';

export * from '@core.config/app.router.utils';

export const appRoutes = {
  todoList: createRoute('/todos')({
    component: views.TodoView,
  }),
};
