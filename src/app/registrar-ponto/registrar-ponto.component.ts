import {Component, OnInit} from '@angular/core';
import {ProjetaApiService} from '../projeta-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pa-registrar-ponto',
  templateUrl: './registrar-ponto.component.html',
  styleUrls: ['./registrar-ponto.component.sass']
})
export class RegistrarPontoComponent implements OnInit {

  username: string;
  password: string;

  constructor(private api: ProjetaApiService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(event: any) {
    this.username = event.srcElement[0].value;
    this.password = event.srcElement[1].value;
    this.api.registraPonto(this.username, this.password).subscribe(
      res => {
        console.log(res);
        alert('Algo deu errado');
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

}
