import { Component } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent {

  //Declaración de variables
  public x1: number;
  public y1: number;
  public x2: number; 
  public y2: number;

  public distancia: number;

  //Declaración de constructor
  constructor() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;

    this.distancia = 0;

  }

//Distancia entre dos puntos
  public calcularDistancia(): void {
    this.distancia = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));

  }
  
}


