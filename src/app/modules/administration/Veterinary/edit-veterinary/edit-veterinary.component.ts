import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VeterinaryModel } from 'src/app/models/veterinary.model';
import { VeterinaryService } from 'src/app/services/veterinary.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-veterinary',
  templateUrl: './edit-veterinary.component.html',
  styleUrls: ['./edit-veterinary.component.css']
})
export class EditVeterinaryComponent implements OnInit {
  id:string = '';
  numberRegEx = '^[+ 0-9]{5,20}$';
  textRegEx1 = '^[+ a-z+ A-Z]{5,30}$';
  textRegEx2 = '^[+. #a-z0-9+A-Z+0-9+\-]{5,40}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //id:['', Validators.required],
    //nit:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    nombre:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(this.textRegEx1)]],
    direccion:['',[Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.textRegEx2)]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private veterinaryService: VeterinaryService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.SearchVeterinary();
  }

  SearchVeterinary(){
    this.veterinaryService.GetVeterinaryById(this.id).subscribe((data:VeterinaryModel)=>{
      //this.fgValidator.controls["id"].setValue(this.id);
      //this.fgValidator.controls["nit"].setValue(data.NIT);
      this.fgValidator.controls["nombre"].setValue(data.Nombre);
      this.fgValidator.controls["direccion"].setValue(data.Direccion);
    });
  }

  EditVeterinary(){
    /* Obtener cada valor del formulario */
    //let nit = this.fgValidator.controls["nit"].value;
    let nombre = this.fgValidator.controls["nombre"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    console.log(`Valores campos: ${nombre} ${direccion}`);
    let vt = new VeterinaryModel();
    //vt.id = this.id;
    //vt.NIT = nit;
    vt.NIT = parseInt(this.id);
    vt.Nombre = nombre;
    vt.Direccion = direccion;
    this.veterinaryService.UpdateVeterinary(vt,this.id).subscribe((data:VeterinaryModel)=>{
      alert(` Veterinary ${nombre} ${direccion} updated!`);
      this.router.navigate(["/administration/search-veterinary"])
    }, (_error: any)=>{
      alert("Error updating veterinary");
    }
    )
  }
}
