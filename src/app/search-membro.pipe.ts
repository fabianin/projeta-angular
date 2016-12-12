import {Pipe, PipeTransform} from '@angular/core';
import {Membro} from './shared/membro.model';

@Pipe({
  name: 'searchMembro'
})
export class SearchMembroPipe implements PipeTransform {

  transform(membros: Array<Membro>, nome?: string, matricula?: string): any {
    if (nome && matricula) {
      return membros.filter(item => item.nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1)
        .filter(item => item.matricula.toString().toLowerCase().indexOf(matricula.toLowerCase()) !== -1);
    } else if (nome) {
      return membros.filter(item => item.nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1);
    } else if (matricula) {
      return membros.filter(item => item.matricula.toString().toLowerCase().indexOf(matricula.toLowerCase()) !== -1);
    }

    return membros;
  }

}
