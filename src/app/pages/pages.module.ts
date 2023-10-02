

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { SharedModule } from './../shared/shared.module';
import { RoutingModule } from './routing.module';

// component da home page gerado (ng g c ./pages/home)
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,

  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
