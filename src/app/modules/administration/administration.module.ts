import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreatePersonComponent } from './Person/create-person/create-person.component';
import { EditPersonComponent } from './Person/edit-person/edit-person.component';
import { DeletePersonComponent } from './Person/delete-person/delete-person.component';
import { SearchPersonComponent } from './Person/search-person/search-person.component';
import { CreatePetComponent } from './Pet/create-pet/create-pet.component';
import { EditPetComponent } from './Pet/edit-pet/edit-pet.component';
import { DeletePetComponent } from './Pet/delete-pet/delete-pet.component';
import { SearchPetComponent } from './Pet/search-pet/search-pet.component';
import { CreateVeterinaryComponent } from './Veterinary/create-veterinary/create-veterinary.component';
import { EditVeterinaryComponent } from './Veterinary/edit-veterinary/edit-veterinary.component';
import { DeleteVeterinaryComponent } from './Veterinary/delete-veterinary/delete-veterinary.component';
import { SearchVeterinaryComponent } from './Veterinary/search-veterinary/search-veterinary.component';
import { CreateDocComponent } from './Veterinarian/create-doc/create-doc.component';
import { EditDocComponent } from './Veterinarian/edit-doc/edit-doc.component';
import { DeleteDocComponent } from './Veterinarian/delete-doc/delete-doc.component';
import { SearchDocComponent } from './Veterinarian/search-doc/search-doc.component';
import { CreateOwnerComponent } from './Pet-owner/create-owner/create-owner.component';
import { EditOwnerComponent } from './Pet-owner/edit-owner/edit-owner.component';
import { DeleteOwnerComponent } from './Pet-owner/delete-owner/delete-owner.component';
import { SearchOwnerComponent } from './Pet-owner/search-owner/search-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatePersonComponent,
    EditPersonComponent,
    DeletePersonComponent,
    SearchPersonComponent,
    CreatePetComponent,
    EditPetComponent,
    DeletePetComponent,
    SearchPetComponent,
    CreateVeterinaryComponent,
    EditVeterinaryComponent,
    DeleteVeterinaryComponent,
    SearchVeterinaryComponent,
    CreateDocComponent,
    EditDocComponent,
    DeleteDocComponent,
    SearchDocComponent,
    CreateOwnerComponent,
    EditOwnerComponent,
    DeleteOwnerComponent,
    SearchOwnerComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
