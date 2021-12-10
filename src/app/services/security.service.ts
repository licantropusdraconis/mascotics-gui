import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelIdentify } from '../models/identify.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url = 'http://localhost:3000';
  // a behaviorsubject to check behaior of a variable
  userDataInSession = new BehaviorSubject<ModelIdentify>(new ModelIdentify());//start as new empty object model ModelIdentify
  
  constructor(private http: HttpClient) {
    this.VerifyActualSession();//since the very first load of page we check if user is logged
  }

  VerifyActualSession(){
    let data = this.GetSessionInformation();
    if (data){//if exist infomation, then we put in the defined "behaviorSubject" object
      //this.userDataInSession.next(data);
      this.RefreshSessionData(data);
    }
    /*else{
      //this.userDataInSession.closed;
      //this.userDataInSession.error(error);
    }*/
  }

  RefreshSessionData(data: ModelIdentify){
    this.userDataInSession.next(data);
  }

  GetUserDataInSession(){
    return this.userDataInSession.asObservable();//return as observable the user data in session
  }

  Identify(usuario: string, clave: string): Observable<ModelIdentify> {
    return this.http.post<ModelIdentify>(`${this.url}/identificar-persona`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({

      })
    })
  }

  /* SAVE DATA IN LOCAL STORAGE - LOGIN ELEMENTS AND TOKEN - */
  SaveSession(data: ModelIdentify){
    data.isLogged = true;
    /* from JSON to string */
    let stringData = JSON.stringify(data);
    /* save in localstorage as string the elements */
    localStorage.setItem("sessionData", stringData);
    this.RefreshSessionData(data);
  }

  /* read local storage data */
  GetSessionInformation(){
    /*if(this.SessionHasStarted()){
      try{*/
        /* from string to JSON*/
        let stringData = JSON.parse(localStorage.getItem("sessionData")|| '{}');
        if(stringData=='{}' || JSON.stringify(stringData) == '{}' || Object.entries(stringData).length === 0){
          console.log('stringData passed as non existent, contents: '+stringData);
          return null;
        }
        else{
          console.log('stringData passed as existent, contents: '+stringData);
          //let data=JSON.parse(stringData);
          let data=JSON.parse(JSON.stringify(stringData));
          //console.log(data);
          return data;
        }
      /*}
      catch (e){
        console.error(e);
        return null;
      }
    }
    else{
      return null;
    }*/
  }

  /* Remove local storage information */
  DeleteSessionInformation(){
    localStorage.removeItem("sessionData");
    this.RefreshSessionData(new ModelIdentify());
  }

  /* Check if user is logged in, reading localstorage */
  SessionHasStarted(){
    let stringData = localStorage.getItem("sessionData");
    return stringData;
  }
}