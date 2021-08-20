import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules adicionados/criados
import { PagesModule } from './pages/pages.module';
import { RoutingModule } from './pages/routing.module';

//components

@NgModule({
  declarations: [
    AppComponent
  ],
  //Aqui é o módulo principal e aqui importamos os módulos gerados posteriormente (ng g m "nome do módulo")
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
