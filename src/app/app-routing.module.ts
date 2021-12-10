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
  {/* Lazy loading */
    path:"administration",
    loadChildren: () => import("./modules/administration/administration.module").then(m1 => m1.AdministrationModule)
  },
  {/* Lazy loading */
    path:"security",
    loadChildren: () => import("./modules/security/security.module").then(m2 => m2.SecurityModule)
  },
  {/* Lazy loading */
    path:"veterinary-visit",
    loadChildren: () => import("./modules/veterinary-visit/veterinary-visit.module").then(m3 => m3.VeterinaryVisitModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
