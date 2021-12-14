import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetModel } from '../models/pet.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetPet(): Observable<PetModel[]>{
    console.log(`Im in GetPet inside mascotics Pet service`);
    return this.http.get<PetModel[]>(`${this.url}/mascota`);
  }

  GetPetById(id: string): Observable<PetModel>{
    console.log(`Im in GetPetById inside mascotics Pet service`);
    return this.http.get<PetModel>(`${this.url}/mascota/${id}`);
  }

  CreatePet(veterinary: PetModel): Observable<PetModel>{
    //we send /mascota`, veterinary, because it's entire object veterinary
    return this.http.post<PetModel>(`${this.url}/mascota`, veterinary,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdatePet(mascotics: PetModel,id: string): Observable<PetModel>{
    return this.http.put<PetModel>(`${this.url}/mascota/${id}`, mascotics,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeletePet(id: string): Observable<any>{
    //is not "return this.http.delete<PetModel>" because if we delete system won't return model, will be empty
    return this.http.delete<PetModel>(`${this.url}/mascota/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
