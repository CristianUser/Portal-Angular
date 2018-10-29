import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Route } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonaDataComponent } from './components/persona-data/persona-data.component';
import { HorarioPrematriculaComponent } from './components/horario-prematricula/horario-prematricula.component';
import { HorarioComponent } from './components/horario/horario.component';

import {DataService} from './data.service';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { SeccionesComponent } from './components/asignaturas/secciones/secciones.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes:Route[] = [
  {path: 'horario',component:HorarioComponent},
  {path: 'horario-prematricula',component:HorarioPrematriculaComponent},
  {path: '',component:PersonaDataComponent},
  {path: 'seleccion',component:AsignaturasComponent},
  {path: 'seccion',component:SeccionesComponent},
  {path: 'calificaciones',component:CalificacionesComponent},
  {path: 'shopping-cart',component:ShoppingCartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonaDataComponent,
    HorarioPrematriculaComponent,
    HorarioComponent,
    AsignaturasComponent,
    SeccionesComponent,
    CalificacionesComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
