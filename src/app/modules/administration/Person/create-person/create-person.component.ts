import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  numberRegEx = '^[+ 0-9]{5,20}$';
  textRegEx1 = '^[+ a-z+áéíóú+A-Z]{5,30}$';
  textRegEx2 = '^[+. +áéíóú#a-z0-9+A-Z+\-]{5,40}$';
  emailRegEx = '^([+_.a-z0-9A-Z\-]+)@([a-z]+)\.([a-z]{2,4})$';
  cellphoneRegEx = '^0-9{3}[-.]?0-9{3}[-.]?0-9{4}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  /* Person model:
    id?: string;
    TipoDocIdentificacion?: string;
    Nombres?: string;
    Apellidos?: string;
    Direccion?: string;
    Telefono?: string;
    Correo?: string
  */
  fgValidator: FormGroup = this.fb.group({
    //id:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    tipodocidentificacion:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.textRegEx1)]],
    nombres:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    apellidos:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    direccion:['',[Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.textRegEx2)]],
    telefono:['',[Validators.required]],
    correo:['',[Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.emailRegEx)]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  CreatePerson(){
    /* Obtener cada valor del formulario */
    //let id = this.fgValidator.controls["nit"].value;
    let tipodocidentificacion = this.fgValidator.controls["tipodocidentificacion"].value;
    let nombres = this.fgValidator.controls["nombres"].value;
    let apellidos = this.fgValidator.controls["apellidos"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    let telefono = this.fgValidator.controls["telefono"].value;
    let correo = this.fgValidator.controls["correo"].value;
    console.log(`Valores campos: ${nombres} ${apellidos} ${direccion} ${telefono} ${correo}`);
    let vt = new PersonModel();
    //vt.id = id;
    vt.TipoDocIdentificacion = tipodocidentificacion;
    vt.Nombres = nombres;
    vt.Apellidos = apellidos;
    vt.Direccion = direccion;
    vt.Telefono = telefono;
    vt.Correo = correo;
    this.personService.CreatePerson(vt).subscribe((data:PersonModel)=>{
      alert(` person ${nombres} ${apellidos} ${direccion} ${telefono} ${correo} Created!`);
      this.router.navigate(["/administration/search-person"])
    }, (_error: any)=>{
      alert("Error creating person");
    }
    )
  }
}
