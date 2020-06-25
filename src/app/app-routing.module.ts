import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from './consultar-personas/consultar-personas.component';


const routes: Routes = [

{ path: 'crear-persona', component: CrearPersonaComponent  },
{ path: 'consultar-personas', component: ConsultarPersonasComponent},

{path: '', redirectTo: 'consultar-personas', pathMatch: 'full' },
// 	  //{ path: '**', component: ConsultarPersonasComponent }
// ];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
