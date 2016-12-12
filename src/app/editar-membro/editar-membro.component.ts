import {Component, OnInit} from '@angular/core';
import {Membro} from '../shared/membro.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjetaApiService} from '../projeta-api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'pa-editar-membro',
  templateUrl: './editar-membro.component.html',
  styleUrls: ['./editar-membro.component.sass']
})
export class EditarMembroComponent implements OnInit {

  public membro: Membro;
  public matricula: string;
  public error: boolean = false;

  constructor(private route: ActivatedRoute, private api: ProjetaApiService, private router: Router) {
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

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    this.api.cadastraMembro(form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

}
