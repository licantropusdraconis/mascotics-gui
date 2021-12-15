import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentModel } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';
import 'materialize-css';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  numberRegEx = '^[+ 0-9]';
  textRegEx2 = '^([ a-zA-Z0-9áéíóúÁÉÍÓÚ_\.:¿?!!,;-]+)';
  dateTimeRegEx = '^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$';

  /* IMPORTANT: fgValidator NEEDS to be declared BEFORE constructor to WORK OK */
  /* Syntax: FormControl(<initial value>,<list of Validators>) */
  /* Medical Appointment model:
    id?: string;
    FechaEstimadaDeAtencion?: string;
    propietarioMascotaId?: string;
    medicoVeterinarioId?: string;
    mascotaId?: string;
  */
  fgValidator: FormGroup = this.fb.group({
    //id:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.numberRegEx)]],
    fechaestimadadeatencion: ['', [Validators.required, Validators.pattern(this.dateTimeRegEx)]],
    propietariomascotaid: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern(this.textRegEx2)]],
    medicoveterinarioid: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern(this.textRegEx2)]],
    mascotaid: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern(this.textRegEx2)]],
    updateOn: "blur"
  });/* formgroup se le pasa un objeto con cada elemento*/

  constructor(
    private fb: FormBuilder,
    private AppointmentService: AppointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.MaterializeForm();
  }

  MaterializeForm() {
    var elems = document.querySelectorAll('input,textarea');
    var instances = M.CharacterCounter.init(elems);
  }

  CreateAppointment() {
    /* Obtener cada valor del formulario */
    //let id = this.fgValidator.controls["nit"].value;
    let fechaestimadadeatencion = this.fgValidator.controls["fechaestimadadeatencion"].value;
    let propietariomascotaid = this.fgValidator.controls["propietariomascotaid"].value;
    let medicoveterinarioid = this.fgValidator.controls["medicoveterinarioid"].value;
    let mascotaid = this.fgValidator.controls["mascotaid"].value;
    console.log(`Valores campos: ${fechaestimadadeatencion} ${propietariomascotaid} ${medicoveterinarioid} ${mascotaid}`);
    let vt = new AppointmentModel();
    //vt.id = id;
    vt.FechaEstimadaDeAtencion = fechaestimadadeatencion;
    vt.propietarioMascotaId = propietariomascotaid;
    vt.medicoVeterinarioId = medicoveterinarioid;
    vt.mascotaId = mascotaid;
    this.AppointmentService.CreateAppointment(vt).subscribe((data: AppointmentModel) => {
      alert(` Appointment ${fechaestimadadeatencion} ${propietariomascotaid} ${medicoveterinarioid} ${mascotaid} Created!`);
      this.router.navigate(["/veterinary-visit/search-check"])
    }, (_error: any) => {
      alert("Error creating Appointment");
    }
    )
  }
}