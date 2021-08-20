
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components criados
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //pode ser que o console do inspecionar elemento do navegador apresente um erro com o for root
  //Nesses casos é só trocar o "forRoot" pelo "forChild"
  exports: [RouterModule]
})
export class RoutingModule { }
