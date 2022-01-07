import apiServices from '@config/api.services';
import {
  INotasItem,
  ThunkActionType,
} from '@types';
import Swal from 'sweetalert2';

export enum NotasActionsEnum {
  NOTAS_UPLOAD_REQUEST = 'NOTAS_UPLOAD_REQUEST',
  NOTAS_UPLOAD_SUCCESS = 'NOTAS_UPLOAD_SUCCESS',
  NOTAS_UPLOAD_FAILURE = 'NOTAS_UPLOAD_FAILURE',

  NOTAS_LIST_REQUEST = 'NOTAS_LIST_REQUEST',
  NOTAS_LIST_SUCCESS = 'NOTAS_LIST_SUCCESS',
  NOTAS_LIST_FAILURE = 'NOTAS_LIST_FAILURE',

  NOTAS_DELETE_REQUEST = 'NOTAS_DELETE_REQUEST',
  NOTAS_DELETE_SUCCESS = 'NOTAS_DELETE_SUCCESS',
  NOTAS_DELETE_FAILURE = 'NOTAS_DELETE_FAILURE',
}

export type NFeNotasActionType =
  | { readonly type: NotasActionsEnum.NOTAS_UPLOAD_REQUEST}
  | { readonly type: NotasActionsEnum.NOTAS_UPLOAD_SUCCESS}
  | { readonly type: NotasActionsEnum.NOTAS_UPLOAD_FAILURE; readonly payload: { message: string }}

  | { readonly type: NotasActionsEnum.NOTAS_LIST_REQUEST}
  | { readonly type: NotasActionsEnum.NOTAS_LIST_SUCCESS; readonly payload: { notas: INotasItem[] }}
  | { readonly type: NotasActionsEnum.NOTAS_LIST_FAILURE; readonly payload: { message: string }}

  | { readonly type: NotasActionsEnum.NOTAS_DELETE_REQUEST; readonly payload: { id: number }}
  | { readonly type: NotasActionsEnum.NOTAS_DELETE_SUCCESS; readonly payload: { id: number }}
  | { readonly type: NotasActionsEnum.NOTAS_DELETE_FAILURE; readonly payload: { id: number; message: string }};

const uploadNotas = (file: File):ThunkActionType<NFeNotasActionType> => (dispatch) => {
  dispatch({
    type: NotasActionsEnum.NOTAS_UPLOAD_REQUEST,
  });

  return apiServices.nfeUpload.upload(file).then(() => {
    dispatch({
      type: NotasActionsEnum.NOTAS_UPLOAD_SUCCESS,
    });

    Swal.fire('Sucesso', 'Nota importada com sucesso', 'success');

    dispatch(listNotas());
  }).catch(() => {
    dispatch({
      type: NotasActionsEnum.NOTAS_UPLOAD_FAILURE,
      payload: {
        message: 'Erro ao enviar a nota',
      },
    });
  });
};

const listNotas = ():ThunkActionType<NFeNotasActionType> => (dispatch) => {
  dispatch({
    type: NotasActionsEnum.NOTAS_LIST_REQUEST,
  });

  return apiServices.nfe.getAll().then((notas) => {
    dispatch({
      type: NotasActionsEnum.NOTAS_LIST_SUCCESS,
      payload: {
        notas,
      },
    });
  }).catch(() => {
    dispatch({
      type: NotasActionsEnum.NOTAS_LIST_FAILURE,
      payload: {
        message: 'Erro ao listar as notas',
      },
    });
  });
};

const deleteNotas = (id: number):ThunkActionType<NFeNotasActionType> => (dispatch) => {
  dispatch({
    type: NotasActionsEnum.NOTAS_DELETE_REQUEST,
    payload: { id },
  });

  return apiServices.nfe.delete(id).then(() => {
    dispatch({
      type: NotasActionsEnum.NOTAS_DELETE_SUCCESS,
      payload: { id },
    });

    Swal.fire('Sucesso', 'Nota excluída com sucesso', 'success');
  }).catch(() => {
    dispatch({
      type: NotasActionsEnum.NOTAS_DELETE_FAILURE,
      payload: {
        id,
        message: 'Erro ao excluir a nota',
      },
    });
  });
};

export const notasActions = {
  uploadNotas, listNotas, deleteNotas,
};
