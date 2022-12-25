import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes2/header/header.component';
import { LogoAPComponent } from './componentes2/logo-ap/logo-ap.component';
import { BannerComponent } from './componentes2/banner/banner.component';
import { AcercaDeComponent } from './componentes2/acerca-de/acerca-de.component';
import { LoginComponent } from './componentes2/login/login.component';
import { HomeComponent } from './componentes2/home/home.component';
import { ExperienciaComponent } from './componentes2/experiencia/experiencia.component';
import { EducacionComponent } from './componentes2/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './componentes2/skills/skills.component';
import { EditarpersonaComponent } from './componentes/persona/editarpersona.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { NuevapersonaComponent } from './componentes/persona/nuevapersona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    LoginComponent,
    HomeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    EditarpersonaComponent,
    PersonaComponent,
    NuevapersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
