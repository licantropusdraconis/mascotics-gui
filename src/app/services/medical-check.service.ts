import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalCheckModel } from '../models/medicalCheck.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalCheckService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetMedicalCheck(): Observable<MedicalCheckModel[]>{
    console.log(`Im in GetMedicalCheck inside mascotics MedicalCheck service`);
    return this.http.get<MedicalCheckModel[]>(`${this.url}/registro-visita-domiciliaria`);
  }

  GetMedicalCheckById(id: string): Observable<MedicalCheckModel>{
    console.log(`Im in GetMedicalCheckById inside mascotics MedicalCheck service`);
    return this.http.get<MedicalCheckModel>(`${this.url}/registro-visita-domiciliaria/${id}`);
  }

  CreateMedicalCheck(medicalcheck: MedicalCheckModel): Observable<MedicalCheckModel>{
    //we send /MedicalChecka`, veterinary, because it's entire object veterinary
    return this.http.post<MedicalCheckModel>(`${this.url}/registro-visita-domiciliaria`, medicalcheck,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdateMedicalCheck(mascotics: MedicalCheckModel,id: string): Observable<MedicalCheckModel>{
    return this.http.put<MedicalCheckModel>(`${this.url}/registro-visita-domiciliaria/${id}`, mascotics,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeleteMedicalCheck(id: string): Observable<any>{
    //is not "return this.http.delete<MedicalCheckModel>" because if we delete system won't return model, will be empty
    return this.http.delete<MedicalCheckModel>(`${this.url}/registro-visita-domiciliaria/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
