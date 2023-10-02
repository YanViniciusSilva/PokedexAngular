//components nativos do anular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components adicionados
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
