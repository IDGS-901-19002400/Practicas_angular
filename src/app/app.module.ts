import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistModule } from './dist/dist.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResistenciasModule } from './resistance/resistance.module';
import { PizzModule } from './pizz/pizz.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { CineModule } from './cinepolis/cinepolis.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DistModule,
    PizzModule,
    ResistenciasModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CineModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
