import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResistenciaComponent } from '../resistencia/resistencia.component';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';

import { IndicadorComponent } from '../resistencia/indicador/indicador.component';
import { TablavaloresComponent } from '../resistencia/tablavalores/tablavalores.component';
import { FormularioComponent } from '../resistencia/formulario/formulario.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ResistenciaComponent,
    IndicadorComponent,
    TablavaloresComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    ResistenciaComponent
  ]
})
export class ResistenciasModule { }