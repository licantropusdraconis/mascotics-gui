import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorModel } from 'src/app/models/veterinarianDoctor.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent implements OnInit {

  //numberRegEx = '^[+ 0-9]{5,20}$';
  //textRegEx1 = '^[+ a-z+ A-Z]{5,30}$';
  //textRegEx2 = '^[+. #a-z0-9+A-Z+0-9+\-]{5,40}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //id:['', [Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
    personaid:['',[Validators.required]],
    empresaveterinariaid:['',[Validators.required]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private docService: DoctorService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  CreateVeterinarianDoctor(){
    /* Obtener cada valor del formulario */
    //let docid = this.fgValidator.controls["id"].value;
    let personaid = this.fgValidator.controls["personaid"].value;
    let empresaveterinariaid = this.fgValidator.controls["empresaveterinariaid"].value;
    console.log(`Valores campos: ${personaid} ${empresaveterinariaid}`);
    let vt = new DoctorModel();
    //vt.id = docid;
    vt.personaId = personaid;
    vt.empresaVeterinariaId = empresaveterinariaid;
    this.docService.CreateVeterinarianDoctor(vt).subscribe((data:DoctorModel)=>{
      alert(` doc ${personaid} ${empresaveterinariaid} Created!`);
      this.router.navigate(["/administration/search-veterinarian"])
    }, (_error: any)=>{
      alert("Error creating doctor");
    }
    )
  }
}
