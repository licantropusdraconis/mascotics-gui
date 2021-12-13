import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VeterinaryModel } from 'src/app/models/veterinary.model';
import { VeterinaryService } from 'src/app/services/veterinary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-veterinary',
  templateUrl: './create-veterinary.component.html',
  styleUrls: ['./create-veterinary.component.css']
})
export class CreateVeterinaryComponent implements OnInit {

  numberRegEx = '^[+ 0-9]{5,20}$';
  textRegEx1 = '^[+ a-z+ A-Z]{5,30}$';
  textRegEx2 = '^[+. #a-z0-9+A-Z+0-9+\-]{5,40}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //nit : new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.numberRegEx)]),
    nit:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    nombre:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    direccion:['',[Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.textRegEx2)]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private veterinaryService: VeterinaryService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  CreateVeterinary(){
    /* Obtener cada valor del formulario */
    let nit = this.fgValidator.controls["nit"].value;
    let nombre = this.fgValidator.controls["nombre"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    console.log(`Valores campos: ${nit} ${nombre} ${direccion}`);
    let vt = new VeterinaryModel();
    vt.NIT = nit;
    vt.Nombre = nombre;
    vt.Direccion = direccion;
    this.veterinaryService.CreateVeterinary(vt).subscribe((data:VeterinaryModel)=>{
      alert(` Veterinary ${nit} ${nombre} ${direccion} Created!`);
      this.router.navigate(["/administration/search-veterinary"])
    }, (_error: any)=>{
      alert("Error creating veterinary");
    }
    )
  }
}
