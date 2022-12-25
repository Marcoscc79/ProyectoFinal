import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from '../../Servicio/persona.service';

@Component({
  selector: 'app-nuevapersona',
  templateUrl: './nuevapersona.component.html',
  styleUrls: ['./nuevapersona.component.css']
})
export class NuevapersonaComponent {

  nombre: string;
  apellido: string;
  descrpcion: string;

  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const persona = new Persona(this.nombre, this.apellido, this.descrpcion);
    this.personaS.save(persona).subscribe(
      data => {
        alert("Persona añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo cargar la persona");
        this.router.navigate(['']);
      }
    )
  }
}
