import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorModel } from 'src/app/models/veterinarianDoctor.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doc',
  templateUrl: './edit-doc.component.html',
  styleUrls: ['./edit-doc.component.css']
})
export class EditDocComponent implements OnInit {
  id:string = '';
  numberRegEx = '^[+ 0-9]{5,20}$';
  textRegEx1 = '^[+ a-z+ A-Z]{5,30}$';
  textRegEx2 = '^[+. #a-z0-9+A-Z+0-9+\-]{5,40}$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  fgValidator: FormGroup = this.fb.group({
    //id:['', [Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
    personaid:['',[Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
    empresaveterinariaid:['',[Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
    updateOn: "blur" 
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.SearchDoctor();
  }

  SearchDoctor(){
    this.doctorService.GetVeterinarianDoctorById(this.id).subscribe((data:DoctorModel)=>{
      //this.fgValidator.controls["id"].setValue(this.id);
      //this.fgValidator.controls["nit"].setValue(data.NIT);
      //console.log(data);
      this.fgValidator.controls["personaid"].setValue(data.personaId);
      this.fgValidator.controls["empresaveterinariaid"].setValue(data.empresaVeterinariaId);
    });
  }

  EditDoctor(){
    /* Obtener cada valor del formulario */
    //let docid = this.fgValidator.controls["id"].value;
    let docid= this.id;
    let personaid = this.fgValidator.controls["personaid"].value;
    let empresaveterinariaid = this.fgValidator.controls["empresaveterinariaid"].value;
    console.log(`Valores campos: ${docid} ${personaid} ${empresaveterinariaid}`);
    let vt = new DoctorModel();
    //vt.id = this.id;
    //vt.NIT = nit;
    vt.id = docid;
    vt.personaId = personaid;
    vt.empresaVeterinariaId = empresaveterinariaid;
    this.doctorService.UpdateVeterinarianDoctor(vt,this.id).subscribe((data:DoctorModel)=>{
      alert(` doc ${docid} ${personaid} ${empresaveterinariaid} Updated!`);
      this.router.navigate(["/administration/search-veterinarian"])
    }, (_error: any)=>{
      alert("Error updating veterinarian doctor");
    }
    )
  }
}