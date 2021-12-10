import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
//var cryptoJS = require('crypto-js');
import * as cryptoJS from "crypto-js";

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  
  fgValidator: FormGroup = this.fb.group({
    'user':['',[Validators.required, Validators.email]],/* forma reactiva validar campo email*/
    'password':['',[Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService
    ) 
  { }

  ngOnInit(): void {
    //this.fgValidator.controls["user"].setValue("                    Use your email ")
  }

  //Método para ejecutar instrucciones como leer datos usuario y clave
  IdentifyUser(){
    let usuario = this.fgValidator.controls["user"].value;
    let clave = this.fgValidator.controls["password"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    //alert(usuario)
    /*this.securityService.Identify(usuario, claveCifrada).subscribe((Datos:any)=>{
      //ok
      alert(`Datos correctos $(this.claveCifrada)`)
    },(error:any)=>{
      //KO
      alert("Datos inválidos")
    })*/
    this.securityService.Identify(usuario, claveCifrada).subscribe({
      next: (v) => {alert(`Datos ${usuario} ${claveCifrada}`),console.log(v)},
      error: (e) => {alert(`Datos inválidos \n ${usuario} ${claveCifrada}`),console.error(e)},
      complete: () => console.info('subscribe transaction complete')
    })
  }
}