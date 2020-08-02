import { createRoute } from '@utils/router';
import * as views from '@components/views';

export const appRoutes = {
  todoList: createRoute('/todos')({
    component: views.TodoView,
  }),
};
