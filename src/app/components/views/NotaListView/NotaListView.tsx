/* eslint-disable no-alert */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notasActions } from '@redux/actions/notasActions';
import { Button, Card, Spinner } from '@blueprintjs/core';
import { IAppState } from '@types';
import { get, map } from 'lodash';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import styles from './NotaListView.module.scss';

const NOTA_STATUS_MAP = {
  0: 'Aguardando Processamento',
  1: 'Processando',
  2: 'Nota processada',
  3: 'Erro',
};

const NotaListView = () => {
  const dispatch = useDispatch();
  const uploadButtonRef = React.useRef<HTMLInputElement>(null);
  const notasState = useSelector((state: IAppState) => state.notas);
  const history = useHistory();

  const handleUpload = useCallback((e: any) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(notasActions.uploadNotas(file));
      e.target.value = null;
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(notasActions.listNotas());
  }, [dispatch]);

  const viewDetails = useCallback((id: number) => () => {
    history.push(`/duplicatas/${id}`);
  }, [history]);

  const deleteNota = useCallback((id: number) => async () => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        dispatch(notasActions.deleteNotas(id));
      }
    });
  }, [dispatch]);

  return (
    <div className={styles.container}>

      <div>
        <h1>Notas Fiscais</h1>
      </div>

      <Card elevation={3}>
        <p>Selecione uma nota para ser enviada, e aguarde a fila de processamento</p>
        <input
          ref={uploadButtonRef}
          type="file"
          className="bp3-button"
          onChange={handleUpload}
          accept=".xml"
          style={{ display: 'none' }}
        />
        <Button
          icon={notasState.isUploading ? 'time' : 'upload'}
          disabled={notasState.isUploading}
          onClick={() => uploadButtonRef.current?.click()}
        >
          Enviar nota
        </Button>
      </Card>

      <Card>
        <Button icon="refresh" onClick={() => dispatch(notasActions.listNotas())} disabled={notasState.isListing}>Atualizar</Button>
        {!notasState.isListing && map(notasState.notas, (nota) => (
          <div className={styles.nota} key={nota.id}>
            <div className={styles.notaColuna}>{nota.arquivoNome.slice(0, -7)}</div>
            <div className={styles.notaColuna}>{nota.id}</div>
            <div className={styles.notaColuna}>{nota.nomeEmitente}</div>
            <div className={styles.notaColuna}>{nota.nomeDestinatario}</div>
            <div className={styles.notaColuna}>{nota.valorNota}</div>
            <div className={styles.notaColuna}>{get(NOTA_STATUS_MAP, nota.status, 'indefinido')}</div>
            <div className={styles.notaColuna}>
              {nota.status !== 0 && <Button icon="delete" onClick={deleteNota(nota.id)} intent="danger" />}
              &nbsp;
              {nota.status === 2 && <Button icon="eye-open" onClick={viewDetails(nota.id)} intent="warning" />}
            </div>
          </div>
        ))}
        {notasState.isListing && <Spinner intent="primary" size={100} />}
      </Card>
    </div>
  );
};

export default React.memo(NotaListView);
