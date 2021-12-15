import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinaryVisitRoutingModule } from './veterinary-visit-routing.module';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { EditAppointmentComponent } from './appointment/edit-appointment/edit-appointment.component';
import { DeleteAppointmentComponent } from './appointment/delete-appointment/delete-appointment.component';
import { SearchAppointmentComponent } from './appointment/search-appointment/search-appointment.component';
import { CreateCheckComponent } from './check/create-check/create-check.component';
import { EditCheckComponent } from './check/edit-check/edit-check.component';
import { DeleteCheckComponent } from './check/delete-check/delete-check.component';
import { SearchCheckComponent } from './check/search-check/search-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAppointmentComponent,
    EditAppointmentComponent,
    DeleteAppointmentComponent,
    SearchAppointmentComponent,
    CreateCheckComponent,
    EditCheckComponent,
    DeleteCheckComponent,
    SearchCheckComponent
  ],
  imports: [
    CommonModule,
    VeterinaryVisitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VeterinaryVisitModule { }
