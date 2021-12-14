import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PetModel } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  //numberRegEx = '^[+ 0-9]{5,20}$';
  textRegEx1 = '^[+ a-z+ A-Z]{4,30}$';
  //textRegEx2 = '^[+. #a-z0-9+A-Z+0-9+\-]{5,40}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //nit:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    nombre:['',[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    colorojos:['',[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    colorpiel:['',[Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(this.textRegEx1)]],
    estatura:['',[Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
    raza:['',[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    tipoanimalid:['',[Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
    propietariomascotaid:['',[Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private PetService: PetService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  CreatePet(){
    /* Obtener cada valor del formulario */
    //let id = this.fgValidator.controls["id"].value;
    let nombre = this.fgValidator.controls["nombre"].value;
    let colorojos = this.fgValidator.controls["colorojos"].value;
    let colorpiel = this.fgValidator.controls["colorpiel"].value;
    let estatura = this.fgValidator.controls["estatura"].value;
    let raza = this.fgValidator.controls["raza"].value;
    let tipoanimalid = this.fgValidator.controls["tipoanimalid"].value;
    let propietariomascotaid = this.fgValidator.controls["propietariomascotaid"].value;
    console.log(`Valores campos: ${nombre} ${raza}`);
    let vt = new PetModel();
    //vt.id = id;
    vt.Nombre = nombre;
    vt.ColorOjos = colorojos;
    vt.ColorPiel = colorpiel;
    vt.Estatura = estatura;
    vt.Raza = raza;
    vt.tipoAnimalId = tipoanimalid;
    vt.propietarioMascotaId = propietariomascotaid;
    this.PetService.CreatePet(vt).subscribe((data:PetModel)=>{
      alert(` Pet ${nombre} ${raza} Created!`);
      this.router.navigate(["/administration/search-pet"])
    }, (_error: any)=>{
      alert("Error creating Pet");
    }
    )
  }
}
