import { INotasState } from '@types';
import immutable from 'seamless-immutable';
import { createReducer } from '@utils/redux';
import { NFeNotasActionType, NotasActionsEnum } from '@redux/actions/notasActions';
import { omit } from 'lodash';

const initialState = immutable<INotasState>({
  isListing: false,
  loadingIds: {},
  notas: {},
  isUploading: false,
});

const arrayToObjectWithId = (array: any[]) => array.reduce((acc, item) => {
  acc[item.id || Math.floor(Math.random() * 100)] = item;
  return acc;
}, {});

export const notasReducer = createReducer<NFeNotasActionType, typeof initialState>(initialState, (state, action) => {
  switch (action.type) {
    case NotasActionsEnum.NOTAS_UPLOAD_REQUEST:
      return state.set('isUploading', true);

    case NotasActionsEnum.NOTAS_UPLOAD_SUCCESS:
      return state.set('isUploading', false);

    case NotasActionsEnum.NOTAS_UPLOAD_FAILURE:
      return state.set('isUploading', false);

    case NotasActionsEnum.NOTAS_LIST_REQUEST:
      return state.set('isListing', true);

    case NotasActionsEnum.NOTAS_LIST_SUCCESS:
      return state.set('isListing', false).set('notas', arrayToObjectWithId(action.payload.notas));

    case NotasActionsEnum.NOTAS_LIST_FAILURE:
      return state.set('isListing', false);

    case NotasActionsEnum.NOTAS_DELETE_REQUEST:
      return state.set('loadingIds', {
        ...state.loadingIds,
        [action.payload.id]: true,
      });

    case NotasActionsEnum.NOTAS_DELETE_SUCCESS:
      return state.set('notas', omit(state.notas, action.payload.id))
        .set('loadingIds', {
          ...state.loadingIds,
          [action.payload.id]: false,
        });

    case NotasActionsEnum.NOTAS_DELETE_FAILURE:
      return state.set('loadingIds', {
        ...state.loadingIds,
        [action.payload.id]: false,
      });

    default: return state;
  }
}, 'keep-on-clear-store', 'keep-on-state-reload');
