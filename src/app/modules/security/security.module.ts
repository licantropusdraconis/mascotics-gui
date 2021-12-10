import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { IdentificationComponent } from './identification/identification.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IdentificationComponent,
    PasswordChangeComponent,
    PasswordRecoveryComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
