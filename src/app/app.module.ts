import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {ListarMembrosComponent} from './listar-membros/listar-membros.component';
import {ListarMembroComponent} from './listar-membro/listar-membro.component';
import {ProjetaApiService} from './projeta-api.service';
import {LoginComponent} from './login/login.component';
import {RegistrarPontoComponent} from './registrar-ponto/registrar-ponto.component';
import {CadastrarMembroComponent} from './cadastrar-membro/cadastrar-membro.component';
import { EditarMembroComponent } from './editar-membro/editar-membro.component';
import { SearchMembroPipe } from './search-membro.pipe';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'listar-membros', component: ListarMembrosComponent},
  {path: 'cadastrar-membro', component: CadastrarMembroComponent},
  {path: 'registrar-ponto', component: RegistrarPontoComponent},
  {path: 'editar-membro/:matricula', component: EditarMembroComponent},
  {path: 'listar-membros/:matricula', component: ListarMembroComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListarMembrosComponent,
    ListarMembroComponent,
    LoginComponent,
    RegistrarPontoComponent,
    CadastrarMembroComponent,
    EditarMembroComponent,
    SearchMembroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ProjetaApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
