import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    FaqComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
