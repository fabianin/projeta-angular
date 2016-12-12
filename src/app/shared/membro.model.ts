import {Ponto} from './ponto.model';

export class Membro {
  public nome: string;
  public sobrenome: string;
  curso: string;
  matricula: number;
  dataAdmissao: string;
  dataNascimento: string;
  dataDemissao: string;
  senha: string;
  dicaSenha: string;
  naturalidade: string;
  cargo: string;
  pontos: Array<Ponto> = [];
}
