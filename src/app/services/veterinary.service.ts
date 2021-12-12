import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeterinaryModel } from '../models/veterinary.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetVeterinary(): Observable<VeterinaryModel[]>{
    console.log(`Im in GetVeterinary inside veterinary service`);
    return this.http.get<VeterinaryModel[]>(`${this.url}/empresa-veterinaria`)
  }

  CreateVeterinary(veterinary: VeterinaryModel): Observable<VeterinaryModel>{
    //we send /empresa-veterinaria`, veterinary, because it's entire object veterinary
    return this.http.post<VeterinaryModel>(`${this.url}/empresa-veterinaria`, veterinary,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdateVeterinary(veterinary: VeterinaryModel): Observable<VeterinaryModel>{
    return this.http.put<VeterinaryModel>(`${this.url}/empresa-veterinaria`, veterinary,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeleteVeterinary(id: string): Observable<any>{
    //is not "return this.http.delete<VeterinaryModel>" because if we delete system won't return model, will be empty
    return this.http.delete<VeterinaryModel>(`${this.url}/empresa-veterinaria/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
