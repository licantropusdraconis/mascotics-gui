import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { DeleteAppointmentComponent } from './appointment/delete-appointment/delete-appointment.component';
import { EditAppointmentComponent } from './appointment/edit-appointment/edit-appointment.component';
import { SearchAppointmentComponent } from './appointment/search-appointment/search-appointment.component';
import { CreateCheckComponent } from './check/create-check/create-check.component';
import { DeleteCheckComponent } from './check/delete-check/delete-check.component';
import { EditCheckComponent } from './check/edit-check/edit-check.component';
import { SearchCheckComponent } from './check/search-check/search-check.component';

const routes: Routes = [
  {
    path: "create-appointment",
    component: CreateAppointmentComponent
  },
  {
    path: "edit-appointment",
    component: EditAppointmentComponent
  },
  {
    path: "delete-appointment",
    component: DeleteAppointmentComponent
  },
  {
    path: "search-appointment",
    component: SearchAppointmentComponent
  },
  {
    path: "create-check",
    component: CreateCheckComponent
  },
  {
    path: "edit-check",
    component: EditCheckComponent
  },
  {
    path: "delete-check",
    component: DeleteCheckComponent
  },
  {
    path: "search-check",
    component: SearchCheckComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinaryVisitRoutingModule { }
