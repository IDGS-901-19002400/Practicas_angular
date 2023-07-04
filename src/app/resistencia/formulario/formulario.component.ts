import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {

  @Output() valoresCalculados = new EventEmitter<any>();

  coloresBanda1: { color: string, valor: string ,coloringles :string }[] = [
    { color: 'Negro', valor: '0' , coloringles : 'black'},
    { color: 'Marrón', valor: '1'  , coloringles : 'brown'},
    { color: 'Rojo', valor: '2' , coloringles : 'red'},
    { color: 'Naranja', valor: '3', coloringles : 'orange'},
    { color: 'Amarillo', valor: '4' , coloringles : 'yellow'},
    { color: 'Verde', valor: '5' , coloringles : 'green'},
    { color: 'Azul', valor: '6' , coloringles : 'blue'},
    { color: 'Violeta', valor: '7' , coloringles : 'violet'},
    { color: 'Gris', valor: '8' , coloringles : 'grey'},
    { color: 'Blanco', valor: '9' , coloringles : 'white'},
  ];

  coloresBanda2: { color: string, valor: string,coloringles :string }[] = [
    { color: 'Negro', valor: '0' , coloringles : 'black'},
    { color: 'Marrón', valor: '1'  , coloringles : 'brown'},
    { color: 'Rojo', valor: '2' , coloringles : 'red'},
    { color: 'Naranja', valor: '3', coloringles : 'orange'},
    { color: 'Amarillo', valor: '4' , coloringles : 'yellow'},
    { color: 'Verde', valor: '5' , coloringles : 'green'},
    { color: 'Azul', valor: '6' , coloringles : 'blue'},
    { color: 'Violeta', valor: '7' , coloringles : 'violet'},
    { color: 'Gris', valor: '8' , coloringles : 'grey'},
    { color: 'Blanco', valor: '9' , coloringles : 'white'},
  ];

  coloresBanda3: { color: string, valor: string ,coloringles :string}[] = [
    { color: 'Negro', valor: '1' , coloringles : 'black'},
    { color: 'Marrón', valor: '10'  , coloringles : 'brown'},
    { color: 'Rojo', valor: '100' , coloringles : 'red'},
    { color: 'Naranja', valor: '1000' , coloringles : 'orange'},
    { color: 'Amarillo', valor: '10000' , coloringles : 'yellow'},
    { color: 'Verde', valor: '100000'  , coloringles : 'green'},
    { color: 'Azul', valor: '1000000'  , coloringles : 'blue'},
    { color: 'Violeta', valor: '10000000' , coloringles : 'violet'},
    { color: 'Gris', valor: '100000000' , coloringles : 'grey'},
    { color: 'Blanco', valor: '1000000000' , coloringles : 'white'},
  ];

  coloresBanda4: { color: string, valor: string,coloringles :string }[] = [
    { color: 'Dorado', valor: '5' , coloringles : 'gold'},
    { color: 'Plata', valor: '10' , coloringles : 'silver'},
  ];

  valorBanda1!: string;
  valorBanda2!: string;
  valorBanda3!: string;
  valorBanda4!: string;

  resultadoMinimo = 0;
  resultadoMaximo = 0;
  valor = 0;

  calcularValores() {

    const valor = parseFloat(this.valorBanda1 + this.valorBanda2)  * parseFloat(this.valorBanda3);

    const valorMinimo = valor - (valor * parseFloat(this.valorBanda4) / 100);

    const valorMaximo = valor + (valor * parseFloat(this.valorBanda4) / 100);

    this.valor = valor;
    this.resultadoMinimo = valorMinimo;
    this.resultadoMaximo = valorMaximo;

    let colorBanda1 = this.coloresBanda1.find(color => color.valor == this.valorBanda1)?.coloringles;
    let colorBanda2 = this.coloresBanda2.find(color => color.valor == this.valorBanda2)?.coloringles;
    let colorBanda3 = this.coloresBanda3.find(color => color.valor == this.valorBanda3)?.coloringles;
    let colorBanda4 = this.coloresBanda4.find(color => color.valor == this.valorBanda4)?.coloringles;


    const bandas = [
      { banda: 'Banda 1', valor: this.valorBanda1 , color: colorBanda1 },
      { banda: 'Banda 2', valor: this.valorBanda2  , color: colorBanda2 },
      { banda: 'Banda 3', valor: this.valorBanda3 , color: colorBanda3 },
      { banda: 'Banda 4', valor: this.valorBanda4 , color: colorBanda4 }
    ];

    const valores = {
      bandas: bandas,
      valor : this.valor,
      minimo: this.resultadoMinimo,
      maximo: this.resultadoMaximo
    };

    this.valoresCalculados.emit(valores);

  }


}
