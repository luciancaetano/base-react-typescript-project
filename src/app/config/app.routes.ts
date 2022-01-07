import { createRoute } from '@utils/router';
import * as views from '@components/views';

export const appRoutes = {
  notasList: createRoute('/notas')({
    component: views.NotaListView,
  }),
  notaDetails: createRoute('/duplicatas/:id')({
    component: views.ViewNotaDetails,
  }),
};
