import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from '../../Servicio/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  persona: Persona[] = [];

  constructor (private personaS: PersonaService) {}
    ngOnInit(): void {
      this.cargarPersona();
    }
    cargarPersona(): void {
      this.personaS.list().subscribe(
        data => {
          this.persona = data;
        }
      )
    }
    borrar(id?: number): void {
      if(id != undefined) {
        this.personaS.borrar(id).subscribe(
          data => {
            this.cargarPersona();
          }, err => {
            alert("No se pudo eliminar la persona");
          }
        )
      }
    }
}

