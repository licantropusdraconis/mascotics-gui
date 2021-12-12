import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './Person/create-person/create-person.component';
import { DeletePersonComponent } from './Person/delete-person/delete-person.component';
import { EditPersonComponent } from './Person/edit-person/edit-person.component';
import { SearchPersonComponent } from './Person/search-person/search-person.component';
import { CreateOwnerComponent } from './Pet-owner/create-owner/create-owner.component';
import { DeleteOwnerComponent } from './Pet-owner/delete-owner/delete-owner.component';
import { EditOwnerComponent } from './Pet-owner/edit-owner/edit-owner.component';
import { SearchOwnerComponent } from './Pet-owner/search-owner/search-owner.component';
import { CreatePetComponent } from './Pet/create-pet/create-pet.component';
import { DeletePetComponent } from './Pet/delete-pet/delete-pet.component';
import { EditPetComponent } from './Pet/edit-pet/edit-pet.component';
import { SearchPetComponent } from './Pet/search-pet/search-pet.component';
import { CreateDocComponent } from './Veterinarian/create-doc/create-doc.component';
import { DeleteDocComponent } from './Veterinarian/delete-doc/delete-doc.component';
import { EditDocComponent } from './Veterinarian/edit-doc/edit-doc.component';
import { SearchDocComponent } from './Veterinarian/search-doc/search-doc.component';
import { CreateVeterinaryComponent } from './Veterinary/create-veterinary/create-veterinary.component';
import { DeleteVeterinaryComponent } from './Veterinary/delete-veterinary/delete-veterinary.component';
import { EditVeterinaryComponent } from './Veterinary/edit-veterinary/edit-veterinary.component';
import { SearchVeterinaryComponent } from './Veterinary/search-veterinary/search-veterinary.component';

const routes: Routes = [
  {
    path: 'create-person',
    component: CreatePersonComponent
  },
  {
    path: 'edit-person/:id',
    component: EditPersonComponent
  },
  {
    path: 'delete-person',
    component: DeletePersonComponent
  },
  {
    path: 'search-person',
    component: SearchPersonComponent
  },
  {
    path: 'create-pet',
    component: CreatePetComponent
  },
  {
    path: 'edit-pet/:id',
    component: EditPetComponent
  },
  {
    path: 'delete-pet',
    component: DeletePetComponent
  },
  {
    path: 'search-pet',
    component: SearchPetComponent
  },
  {
    path: 'create-pet-owner',
    component: CreateOwnerComponent
  },
  {
    path: 'edit-pet-owner/:id',
    component: EditOwnerComponent
  },
  {
    path: 'delete-pet-owner',
    component: DeleteOwnerComponent
  },
  {
    path: 'search-pet-owner',
    component: SearchOwnerComponent
  },
  {
    path: 'create-veterinarian',
    component: CreateDocComponent
  },
  {
    path: 'edit-veterinarian/:id',
    component: EditDocComponent
  },
  {
    path: 'delete-veterinarian',
    component: DeleteDocComponent
  },
  {
    path: 'search-veterinarian',
    component: SearchDocComponent
  },
  {
    path: 'create-veterinary',
    component: CreateVeterinaryComponent
  },
  {
    path: 'edit-veterinary/:NIT',
    component: EditVeterinaryComponent
  },
  {
    path: 'delete-veterinary',
    component: DeleteVeterinaryComponent
  },
  {
    path: 'search-veterinary',
    component: SearchVeterinaryComponent
  },
  {
    path: 'list-veterinary',
    component: SearchVeterinaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
