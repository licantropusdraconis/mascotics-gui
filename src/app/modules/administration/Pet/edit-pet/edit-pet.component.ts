import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PetModel } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  id:string = '';
  //numberRegEx = '^[+ 0-9]{5,20}$';
  textRegEx1 = '^[+ a-z+ A-Z]{4,30}$';
  //textRegEx2 = '^[+. #a-z0-9+A-Z+0-9+\-]{5,40}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //id:['', Validators.required],
    //nit:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
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
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.SearchPet();
  }

  SearchPet(){
    this.PetService.GetPetById(this.id).subscribe((data:PetModel)=>{
      //this.fgValidator.controls["id"].setValue(this.id);
      //this.fgValidator.controls["nit"].setValue(data.NIT);
      this.fgValidator.controls["nombre"].setValue(data.Nombre);
      this.fgValidator.controls["colorojos"].setValue(data.ColorOjos);
      this.fgValidator.controls["colorpiel"].setValue(data.ColorPiel);
      this.fgValidator.controls["estatura"].setValue(data.Estatura);
      this.fgValidator.controls["raza"].setValue(data.Raza);
      this.fgValidator.controls["tipoanimalid"].setValue(data.tipoAnimalId);
      this.fgValidator.controls["propietariomascotaid"].setValue(data.propietarioMascotaId);
    });
  }

  EditPet(){
    /* Obtener cada valor del formulario */
    //let nit = this.fgValidator.controls["nit"].value;
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
    this.PetService.UpdatePet(vt,this.id).subscribe((data:PetModel)=>{
      alert(` Pet ${nombre} ${raza} updated!`);
      this.router.navigate(["/administration/search-pet"])
    }, (_error: any)=>{
      alert("Error updating Pet");
    }
    )
  }
}
