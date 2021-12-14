import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetOwnerModel } from '../models/petOwner.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class PetOwnerService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetPetOwner(): Observable<PetOwnerModel[]>{
    console.log(`Im in GetPetOwner inside mascotics PetOwner service`);
    return this.http.get<PetOwnerModel[]>(`${this.url}/propietario-mascota`);
  }

  GetPetOwnerById(id: string): Observable<PetOwnerModel>{
    console.log(`Im in GetPetOwnerById inside mascotics PetOwner service`);
    return this.http.get<PetOwnerModel>(`${this.url}/propietario-mascota/${id}`);
  }

  CreatePetOwner(veterinary: PetOwnerModel): Observable<PetOwnerModel>{
    //we send /propietario-mascota`, veterinary, because it's entire object veterinary
    return this.http.post<PetOwnerModel>(`${this.url}/propietario-mascota`, veterinary,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdatePetOwner(mascotics: PetOwnerModel,id: string): Observable<PetOwnerModel>{
    return this.http.put<PetOwnerModel>(`${this.url}/propietario-mascota/${id}`, mascotics,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeletePetOwner(id: string): Observable<any>{
    //is not "return this.http.delete<PetOwnerModel>" because if we delete system won't return model, will be empty
    return this.http.delete<PetOwnerModel>(`${this.url}/propietario-mascota/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
