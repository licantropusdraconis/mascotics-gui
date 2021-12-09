import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecurityModule } from './modules/security/security.module';
import { ErrorComponent } from './template/error/error.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:"**",
    component: ErrorComponent
  },
  {/* Lazy loading */
    path:"administration",
    loadChildren: () => import("./modules/administration/administration.module").then(x => x.AdministrationModule)
  },
  {/* Lazy loading */
    path:"security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {/* Lazy loading */
    path:"veterinary-visit",
    loadChildren: () => import("./modules/veterinary-visit/veterinary-visit.module").then(x => x.VeterinaryVisitModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
