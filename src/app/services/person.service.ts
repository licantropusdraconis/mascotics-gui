import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../models/person.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetPerson(): Observable<PersonModel[]>{
    console.log(`Im in GetPerson inside mascotics Person service`);
    return this.http.get<PersonModel[]>(`${this.url}/persona`);
  }

  GetPersonById(id: string): Observable<PersonModel>{
    console.log(`Im in GetPersonById inside mascotics Person service`);
    return this.http.get<PersonModel>(`${this.url}/persona/${id}`);
  }

  CreatePerson(veterinary: PersonModel): Observable<PersonModel>{
    //we send /persona`, veterinary, because it's entire object veterinary
    return this.http.post<PersonModel>(`${this.url}/persona`, veterinary,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdatePerson(mascotics: PersonModel,id: string): Observable<PersonModel>{
    return this.http.put<PersonModel>(`${this.url}/persona/${id}`, mascotics,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeletePerson(id: string): Observable<any>{
    //is not "return this.http.delete<PersonModel>" because if we delete system won't return model, will be empty
    return this.http.delete<PersonModel>(`${this.url}/persona/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
