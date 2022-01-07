export interface IDuplicata {
  id: number;
  parcela: number;
  valor: string;
  dataVencimento: string;
}

export interface INotasItem {
  id: number;
  numero: number | null;
  dhRegistro: string | null;
  processadoEm?: string | null;
  nomeEmitente: string | null;
  nomeDestinatario: string | null;
  valorNota: string | null;
  erro: boolean | null;
  arquivoNome: string;
  status: number;
  duplicatas: IDuplicata[];
}

export interface INotasState {
  isListing: boolean;
  notas: {
    [id: string]: INotasItem;
  };
  loadingIds: Record<string, boolean>;
  isUploading: boolean;

}
