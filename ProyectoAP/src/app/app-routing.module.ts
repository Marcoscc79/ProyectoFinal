import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes2/login/login.component';
import { HomeComponent } from './componentes2/home/home.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { EditarpersonaComponent } from './componentes/persona/editarpersona.component';
import { NuevapersonaComponent } from './componentes/persona/nuevapersona.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: '', component: PersonaComponent},
  {path: 'editarpersona/:id', component: EditarpersonaComponent},
  {path: 'nuevapersona', component: NuevapersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
