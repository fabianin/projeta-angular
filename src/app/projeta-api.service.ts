import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetaApiService {

  constructor(private http: Http) {
  }

  public login(username: string, password: string) {
    let body = 'username=' + username + '&password=' + password;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post('http://localhost:8080/login', body, {headers: headers})
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  public registraPonto(matricula: string, senha: string) {
    let body = 'matricula=' + matricula + '&senha=' + senha;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post('http://localhost:8080/registrar/ponto', body, {headers: headers})
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  public listarMembro(matricula: string) {
    return this.http.get('http://localhost:8080/listar/membro/' + matricula).map(res => {
      return res.json();
    });
  }

  public listarMembros() {
    return this.http.get('http://localhost:8080/listar/membros').map(res => {
      return res.json();
    });
  }

  public cadastraMembro(values: any) {
    let body = this.encodeQueryData(values);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post('http://localhost:8080/editar', body, {headers: headers})
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  encodeQueryData(data) {
    let ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }

}
