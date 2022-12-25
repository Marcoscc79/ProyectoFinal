import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../Modelo/persona';
import { PersonaService } from '../../Servicio/persona.service';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  persona: Persona = null;

  constructor(private personaS: PersonaService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar la persona");
        this.route.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.modificar(id, this.persona).subscribe(
      data => {
        alert("Modificación correcta");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudo modificar la persona");
        this.route.navigate(['']);
      }
    )
  }
}
