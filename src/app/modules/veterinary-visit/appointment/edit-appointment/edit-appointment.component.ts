import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentModel } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  id: string = '';
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.SearchAppointment();
  }

  SearchAppointment() {
    this.AppointmentService.GetAppointmentById(this.id).subscribe((data: AppointmentModel) => {
      //this.fgValidator.controls["id"].setValue(this.id);
      //this.fgValidator.controls["nit"].setValue(data.NIT);
      this.fgValidator.controls["fechaestimadadeatencion"].setValue(data.FechaEstimadaDeAtencion);
      this.fgValidator.controls["propietariomascotaid"].setValue(data.propietarioMascotaId);
      this.fgValidator.controls["medicoveterinarioid"].setValue(data.medicoVeterinarioId);
      this.fgValidator.controls["mascotaid"].setValue(data.mascotaId);
    });
  }

  EditAppointment() {
    /* Obtener cada valor del formulario */
    //let nit = this.fgValidator.controls["nit"].value;
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
    this.AppointmentService.UpdateAppointment(vt, this.id).subscribe((data: AppointmentModel) => {
      alert(` Medical Appointment ${fechaestimadadeatencion} ${propietariomascotaid} ${medicoveterinarioid} ${mascotaid} updated!`);
      this.router.navigate(["/veterinary-visit/search-appointment"])
    }, (_error: any) => {
      alert("Error updating Medical Appointment");
    }
    )
  }
}
