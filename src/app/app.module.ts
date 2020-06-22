import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponentComponent } from './crear-persona-component/crear-persona-component.component';
import { ConsultarPersonasComponentComponent } from './consultar-personas-component/consultar-personas-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponentComponent,
    ConsultarPersonasComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
