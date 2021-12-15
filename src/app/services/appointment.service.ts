import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentModel } from '../models/appointment.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url = 'http://localhost:3000';
  token: String = '';//create variable token as string and initially empty
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
    )
    { 
      this.token=this.securityService.GetToken();//get tk and assign to variable token
    }

  GetAppointment(): Observable<AppointmentModel[]>{
    console.log(`Im in GetAppointment inside mascotics Appointment service`);
    return this.http.get<AppointmentModel[]>(`${this.url}/solicitud-visita-domiciliaria`);
  }

  GetAppointmentById(id: string): Observable<AppointmentModel>{
    console.log(`Im in GetAppointmentById inside mascotics Appointment service`);
    return this.http.get<AppointmentModel>(`${this.url}/solicitud-visita-domiciliaria/${id}`);
  }

  CreateAppointment(Appointment: AppointmentModel): Observable<AppointmentModel>{
    //we send /Appointmenta`, veterinary, because it's entire object veterinary
    return this.http.post<AppointmentModel>(`${this.url}/solicitud-visita-domiciliaria`, Appointment,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  UpdateAppointment(mascotics: AppointmentModel,id: string): Observable<AppointmentModel>{
    return this.http.put<AppointmentModel>(`${this.url}/solicitud-visita-domiciliaria/${id}`, mascotics,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //this method has Observable<any> becuase system can return or not something
  DeleteAppointment(id: string): Observable<any>{
    //is not "return this.http.delete<AppointmentModel>" because if we delete system won't return model, will be empty
    return this.http.delete<AppointmentModel>(`${this.url}/solicitud-visita-domiciliaria/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
