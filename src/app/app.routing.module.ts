import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntosComponent } from './distancia/puntos/puntos.component';
import { ResistenciaComponent } from './resistencia/resistencia.component';
import { PizzaComponent } from './pizzeria/pizza/pizza.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'PuntosComponent', component:PuntosComponent},
  {path: 'ResistenciaComponent', component: ResistenciaComponent},
  {path: 'PizzaComponent', component: PizzaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
