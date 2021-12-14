import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PetOwnerModel } from 'src/app/models/petOwner.model';
import { PetOwnerService } from 'src/app/services/pet-owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {
  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    personaid:['', [Validators.required]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private PetOwnerService: PetOwnerService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  CreatePetOwner(){
    /* Obtener cada valor del formulario */
    let personaid = this.fgValidator.controls["personaid"].value;
    console.log(`Valores campos: ${personaid}`);
    let vt = new PetOwnerModel();
    vt.personaId = personaid;
    this.PetOwnerService.CreatePetOwner(vt).subscribe((data:PetOwnerModel)=>{
      alert(` PetOwner of person ${personaid} Created!`);
      this.router.navigate(["/administration/search-pet-owner"])
    }, (_error: any)=>{
      alert("Error creating PetOwner");
    }
    )
  }
}
