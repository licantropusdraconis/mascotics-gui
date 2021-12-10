import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishSessionComponent } from './finish-session/finish-session.component';
import { IdentificationComponent } from './identification/identification.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path:"identification",
    component: IdentificationComponent
  },
  {
    path:"finish-session",
    component: FinishSessionComponent
  },
  {
    path:"password-change",
    component: PasswordChangeComponent
  },
  {
    path:"password-recovery",
    component: PasswordRecoveryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
