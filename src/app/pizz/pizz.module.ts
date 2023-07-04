import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PizzaComponent} from '../pizzeria/pizza/pizza.component';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
    declarations: [
        PizzaComponent
    ],
    imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatRadioModule,
      FormsModule,
      MatSelectModule,
      MatCheckboxModule,
      ReactiveFormsModule
    ],
    exports: [
        PizzaComponent
  
    ]
  })

  export class PizzModule{}
