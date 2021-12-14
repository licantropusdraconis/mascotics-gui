import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorModel } from '../models/veterinarianDoctor.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetVeterinarianDoctor(): Observable<DoctorModel[]>{
    console.log(`Im in GetVeterinarianDoctor inside veterinarian doctor service`);
    return this.http.get<DoctorModel[]>(`${this.url}/medico-veterinario`);
  }

  GetVeterinarianDoctorById(id: string): Observable<DoctorModel>{
    console.log(`Im in GetVeterinarianDoctorById inside veterinarian doctor service`);
    return this.http.get<DoctorModel>(`${this.url}/medico-veterinario/${id}`);
  }

  CreateVeterinarianDoctor(veterinary: DoctorModel): Observable<DoctorModel>{
    //we send /medico-veterinario`, veterinary, because it's entire object veterinary
    return this.http.post<DoctorModel>(`${this.url}/medico-veterinario`, veterinary,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdateVeterinarianDoctor(veterinarian: DoctorModel,id: string): Observable<DoctorModel>{
    return this.http.put<DoctorModel>(`${this.url}/medico-veterinario/${id}`, veterinarian,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeleteVeterinarianDoctor(id: string): Observable<any>{
    //is not "return this.http.delete<DoctorModel>" because if we delete system won't return model, will be empty
    return this.http.delete<DoctorModel>(`${this.url}/medico-veterinario/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
