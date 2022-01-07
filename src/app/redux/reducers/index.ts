import { combineReducers } from 'redux';
import { configureReducerPeristence } from '@utils/redux';
import { notasReducer } from './notas.reducer';

export default combineReducers({
  notas: configureReducerPeristence({
    name: 'notas',
    blacklist: ['isListing', 'loadingIds', 'isUploading'],
    reducer: notasReducer,
  }),
});
