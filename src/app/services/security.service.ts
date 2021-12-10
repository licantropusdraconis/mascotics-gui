import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelIdentify } from '../models/identify.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  Identify(usuario: string, clave: string): Observable<ModelIdentify> {
    return this.http.post<ModelIdentify>(`${this.url}/identificar-persona`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({

      })
    })
  }
}