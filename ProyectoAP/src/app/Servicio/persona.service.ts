import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Persona } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  [x: string]: any;

  URL = environment.URL + 'persona/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL + `detail/${id}`);
  }
  public save(persona: Persona): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', persona);
  }
  public modificar(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + `modificar/${id}`, persona);
  }
  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
