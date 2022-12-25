export class Persona {
  id?: number;
  nombre: string;
  apellido: string;
  descrpcion: string;

  constructor(nombre: string, apellido: string, descrpcion: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descrpcion = descrpcion;
  }
}
