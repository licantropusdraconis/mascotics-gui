import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PetOwnerModel } from 'src/app/models/petOwner.model';
import { PetOwnerService } from 'src/app/services/pet-owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit {
  id:string = '';
  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //nit:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    personaid:['',[Validators.required]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private PetOwnerService: PetOwnerService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.SearchPetOwner();
  }

  SearchPetOwner(){
    this.PetOwnerService.GetPetOwnerById(this.id).subscribe((data:PetOwnerModel)=>{
      //this.fgValidator.controls["id"].setValue(this.id);
      //this.fgValidator.controls["nit"].setValue(data.NIT);
      this.fgValidator.controls["personaid"].setValue(data.personaId);
    });
  }

  EditPetOwner(){
    /* Obtener cada valor del formulario */
    //let nit = this.fgValidator.controls["nit"].value;
    let personaid = this.fgValidator.controls["personaid"].value;
    console.log(`Valores campos: ${personaid}`);
    let vt = new PetOwnerModel();
    //vt.id = this.id;
    //vt.NIT = nit;
    vt.id = String(this.id);
    vt.personaId = personaid;
    this.PetOwnerService.UpdatePetOwner(vt,this.id).subscribe((data:PetOwnerModel)=>{
      alert(` PetOwner ${personaid} ${this.id} updated!`);
      this.router.navigate(["/administration/search-pet-owner"])
    }, (_error: any)=>{
      alert("Error updating PetOwner");
    }
    )
  }
}
