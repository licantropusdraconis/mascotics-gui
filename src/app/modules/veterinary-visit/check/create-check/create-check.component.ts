import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicalCheckModel } from 'src/app/models/medicalCheck.model';
import { MedicalCheckService } from 'src/app/services/medical-check.service';
import { Router } from '@angular/router';
import 'materialize-css';

@Component({
  selector: 'app-create-check',
  templateUrl: './create-check.component.html',
  styleUrls: ['./create-check.component.css']
})
export class CreateCheckComponent implements OnInit {

  numberRegEx = '^([0-9]+)';
  textRegEx2 = '^([ a-zA-Z0-9áéíóúÁÉÍÓÚ_\.:¿?!!,;-]+)';
  dateTimeRegEx = '^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  /* Medical Check model:
    id?: string;
    FechaAtencion?: string;
    Temperatura?: number;
    Peso?: number;
    FrecuenciaRespiratoria?: number;
    FrecuenciaCardiaca?: number;
    EstadoAnimo?: string;
    Recomendaciones?: string;
    Medicamentos?: string;
    solicitudVisitaDomiciliariaId?: string;
  */
  fgValidator: FormGroup = this.fb.group({
    //id:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    fechaatencion:['', [Validators.required, Validators.pattern(this.dateTimeRegEx)]],
    temperatura:['',[Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.numberRegEx)]],
    peso:['',[Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.numberRegEx)]],
    frecuenciarespiratoria:['',[Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.numberRegEx)]],
    frecuenciacardiaca:['',[Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.numberRegEx)]],
    estadoanimo:['',[Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.textRegEx2)]],
    recomendaciones:['',[Validators.required, Validators.minLength(5), Validators.maxLength(150), Validators.pattern(this.textRegEx2)]],
    medicamentos:['',[Validators.required, Validators.minLength(5), Validators.maxLength(150), Validators.pattern(this.textRegEx2)]],
    solicitudvisitadomiciliariaid:['',[Validators.required, Validators.minLength(21), Validators.maxLength(24), Validators.pattern(this.textRegEx2)]],
    updateOn: "blur"  
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private MedicalCheckService: MedicalCheckService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.MaterializeForm();
  }

  MaterializeForm(){
    var elems = document.querySelectorAll('input,textarea');
    var instances = M.CharacterCounter.init(elems);
  }

  CreateMedicalCheck(){
    /* Obtener cada valor del formulario */
    //let id = this.fgValidator.controls["nit"].value;
    let fechaatencion = this.fgValidator.controls["fechaatencion"].value;
    let temperatura = this.fgValidator.controls["temperatura"].value;
    let peso = this.fgValidator.controls["peso"].value;
    let frecuenciarespiratoria = this.fgValidator.controls["frecuenciarespiratoria"].value;
    let frecuenciacardiaca = this.fgValidator.controls["frecuenciacardiaca"].value;
    let estadoanimo = this.fgValidator.controls["estadoanimo"].value;
    let recomendaciones = this.fgValidator.controls["recomendaciones"].value;
    let medicamentos = this.fgValidator.controls["medicamentos"].value;
    let solicitudvisitadomiciliariaid = this.fgValidator.controls["solicitudvisitadomiciliariaid"].value;
    console.log(`Valores campos: ${fechaatencion} ${solicitudvisitadomiciliariaid} ${recomendaciones} ${medicamentos}`);
    let vt = new MedicalCheckModel();
    //vt.id = id;
    vt.FechaAtencion = fechaatencion;
    vt.Temperatura = temperatura;
    vt.Peso = peso;
    vt.FrecuenciaRespiratoria = frecuenciarespiratoria;
    vt.FrecuenciaCardiaca = frecuenciacardiaca;
    vt.EstadoAnimo = estadoanimo;
    vt.Recomendaciones = recomendaciones;
    vt.Medicamentos = medicamentos;
    vt.solicitudVisitaDomiciliariaId = solicitudvisitadomiciliariaid;
    this.MedicalCheckService.CreateMedicalCheck(vt).subscribe((data:MedicalCheckModel)=>{
      alert(` MedicalCheck ${fechaatencion} ${solicitudvisitadomiciliariaid} ${recomendaciones} ${medicamentos} Created!`);
      this.router.navigate(["/veterinary-visit/search-check"])
    }, (_error: any)=>{
      alert("Error creating MedicalCheck");
    }
    )
  }
}

