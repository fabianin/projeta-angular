import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjetaApiService} from '../projeta-api.service';
import {Membro} from '../shared/membro.model';
import * as moment from 'moment';

@Component({
  selector: 'pa-listar-membro',
  templateUrl: './listar-membro.component.html',
  styleUrls: ['./listar-membro.component.sass']
})
export class ListarMembroComponent implements OnInit {

  public membro: Membro;
  public matricula: string;
  public error: boolean = false;

  constructor(private route: ActivatedRoute, private api: ProjetaApiService) {
  }

  ngOnInit() {
    this.matricula = this.route.params['value']['matricula'];
    this.api.listarMembro(this.matricula).subscribe(
      response => {
        console.log(response);
        this.membro = response;
      },
      error => {
        this.error = true;
        console.log(error);
      }
    );
  }

  formatData(timestamp: number) {
    return moment.unix(timestamp).format('DD/MM/YYYY hh:mm:ss');
  }

  getDiffTime(from: number, to: number) {
    let fromTime = moment.unix(from);
    let toTime = moment.unix(to);
    let diff = toTime.diff(fromTime);
    let duration = moment.duration(diff);

    return duration.get('hours') + ':' + duration.get('minutes') + ':' + duration.get('seconds');
  }

}
