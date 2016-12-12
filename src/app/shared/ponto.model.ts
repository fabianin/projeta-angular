export class Ponto {
  matricula: number;
  entrada: {
    epochSecond: number,
    nano: number
  };
  saida: {
    epochSecond: number,
    nano: number
  };
  duracaoHours: number;
  duracaoMinutes: number;
}
