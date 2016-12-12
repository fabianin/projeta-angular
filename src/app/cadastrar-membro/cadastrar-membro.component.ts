import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjetaApiService} from '../projeta-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pa-cadastrar-membro',
  templateUrl: './cadastrar-membro.component.html',
  styleUrls: ['./cadastrar-membro.component.sass']
})
export class CadastrarMembroComponent implements OnInit {

  data = {
    nome: '',
    sobrenome: '',
    curso: '',
    matricula: '',
    dataNascimento: '',
    naturalidade: '',
    cargo: '',
    dataAdmissao: '',
    dataDemissao: '',
    senha: '',
    confsenha: '',
    dicaSenha: ''
  };

  constructor(private api: ProjetaApiService, private routes: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    this.api.cadastraMembro(form.value).subscribe(
      res => {
        console.log(res);
        this.routes.navigate(['/']);
      },
      err => {
        console.log(err);
        this.routes.navigate(['/']);
      }
    );
  }

}
