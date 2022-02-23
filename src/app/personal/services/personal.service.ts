import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/personal';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private baseUrl: string = environment.baseUrl;

  constructor( private _http: HttpClient) { }

// OBTENER LA LSITA DE PERSONAS
  getPersonal(): Observable<Persona[]> {

   return  this._http.get<Persona[]>(`${this.baseUrl}/persona/`);

  }

  //GUARDAR UNA NUEVA PERSONA

  salvarPersona(persona: Persona): Observable<Persona> {

    return this._http.post<Persona>(`${this.baseUrl}/persona/`, persona);
  }

    //ACTUALIZAR DATOS DE UNA PERSONA

    actualizarPersona(persona: Persona): Observable<Persona> {

      return this._http.put<Persona>(`${this.baseUrl}/persona/${persona.id}`, persona);
    }

  //BUSCAR PERSONA POR ID

  getPersonaById(id: string): Observable<Persona> {

    return this._http.get<Persona>(`${this.baseUrl}/persona/${id}`);
  }

}
