import {Component, OnInit} from '@angular/core';
import {ProjetaApiService} from '../projeta-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private api: ProjetaApiService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(event: any) {
    this.username = event.srcElement[0].value;
    this.password = event.srcElement[1].value;
    this.api.login(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/']);
      }
    );
  }

}
