/* eslint-disable no-alert */
import React, { useMemo } from 'react';
import { IAppState, IDuplicata, INotasItem } from '@types';
import { useSelector } from 'react-redux';
import { Button, Card } from '@blueprintjs/core';
import { useHistory, useParams } from 'react-router-dom';
import { get } from 'lodash';
import moment from 'moment';
import styles from './ViewNotaDetails.module.scss';

const formataReais = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

const formatDate = (date: string) => moment(date).format('DD/MM/YYYY');

const ViewNotaDetails = () => {
  const notasState = useSelector((state: IAppState) => state.notas);
  const { id } = useParams<any>();
  const history = useHistory();

  const nota: INotasItem = useMemo(() => get(notasState.notas, [id], {}), [notasState, id]) as any;

  const duplicatas: IDuplicata[] = useMemo(() => get(notasState.notas, [id, 'duplicatas'], []), [notasState, id]);

  return (
    <Card>
      <h1>Duplicatas da nota {nota.numero}</h1>
      <Button icon="arrow-left" onClick={() => history.goBack()}>Voltar</Button>
      {duplicatas.map((duplicata) => (
        <div className={styles.duplicata} key={duplicata.id}>
          <div className={styles.duplicataColuna}>#{duplicata.id}</div>
          <div className={styles.duplicataColuna}>{formataReais(parseInt(duplicata.valor, 10))}</div>
          <div className={styles.duplicataColuna}>Vencimento: {formatDate(duplicata.dataVencimento)}</div>
        </div>
      ))}
    </Card>
  );
};

export default React.memo(ViewNotaDetails);
