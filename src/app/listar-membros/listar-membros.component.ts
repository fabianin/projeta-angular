import {Component, OnInit} from '@angular/core';
import {Membro} from '../shared/membro.model';
import {ProjetaApiService} from '../projeta-api.service';

@Component({
  selector: 'pa-listar-membros',
  templateUrl: './listar-membros.component.html',
  styleUrls: ['./listar-membros.component.sass']
})
export class ListarMembrosComponent implements OnInit {

  public membros: Array<Membro> = [];

  constructor(private api: ProjetaApiService) {
  }

  ngOnInit() {
    this.api.listarMembros().subscribe(
      response => {
        console.log(response)
        this.membros = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
