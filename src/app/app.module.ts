import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules adicionados/criados
import { PagesModule } from './pages/pages.module';
import { RoutingModule } from './pages/routing.module';
import { HttpClientModule } from '@angular/common/http';


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
    RoutingModule,
    /* httpClientModule é uma ferramente própria do Angular para conexões externas do back-end
    No nosso caso aqui vai ser a PokeApi*/
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
