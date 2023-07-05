import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {

  //guardar el formulario reactivo

  cineForm!: FormGroup;

  
  nombreCliente!: string;
  cantidadClientes!: number;
  cantidadBoletos!: number;
  tarjeta!: string;

  //arreglo para guardar los datos del formulario
  arregloCine: { nombre: string, cantClientes: number, cantBoletos: number, tarjeta: string, total: number }[] = [];

  //construir el formulario reactivo
  constructor() {
    this.cineForm = this.initForm();
  }

  //metodo onSubmit para guardar los datos del formulario
  public onSubmit(): void {
    console.log(this.cineForm.value);

    let total = 0;

    this.cantidadClientes = this.cineForm.get('cantClientes')?.value;

    if (this.cineForm.get('cantBoletos')?.value <= 7) {
      //si el pago es con tarjeta se le agrega un descuento del 10% al total 
      if (this.cineForm.get('tarjeta')?.value == 'si') {
        alert("Pago con tarjeta")
        total = this.cineForm.get('cantBoletos')?.value * this.cineForm.get('cantClientes')?.value * 12.00;
        total = total - (total * 0.10);
      }
      else {
        alert("Pago en efectivo")
        total = this.cineForm.get('cantBoletos')?.value * this.cineForm.get('cantClientes')?.value * 12.00;
      }
      alert("El total a pagar es: " + total);
    } else {
      alert("No se puede realizar la compra");
    }

    //mostrar el total a pagar en el input total
    this.cineForm.get('total')?.setValue(total);

    //si compra mas de 5 boletos se hace un descuento del 15% 
    if (this.cineForm.get('cantBoletos')?.value > 5) {
      //si el pago es con tarjeta se le agrega un descuento del 10% al total
      if (this.cineForm.get('tarjeta')?.value == 'si') {
      //  alert("Pago con tarjeta")
        total = this.cineForm.get('cantBoletos')?.value * this.cineForm.get('cantClientes')?.value * 12.00;
        total = total - (total * 0.15);
        total = total - (total * 0.10);
        alert("El total a pagar con descuento de 15% mas el 10% por pago con tarjeta es: " + total);
        this.cineForm.get('total')?.setValue(total);
      }
      else {
       // alert("Pago en efectivo")
        total = this.cineForm.get('cantBoletos')?.value * this.cineForm.get('cantClientes')?.value * 12.00;
        total = total - (total * 0.15);
        alert("El total a pagar con descuento del 15%: " + total);
        this.cineForm.get('total')?.setValue(total);
      }

    }
    //si compran 3 o 4 o 5 boletos se hace un descuento del 10% y si el pago es con tarjeta se hace al total un descuento del 10%
    if (this.cineForm.get('cantBoletos')?.value >= 3 && this.cineForm.get('cantBoletos')?.value <= 5) {
      //si el pago es con tarjeta se le agrega un descuento del 10% al total
      if (this.cineForm.get('tarjeta')?.value == 'si') {
      /*   alert("Pago con tarjeta") */
        total = this.cineForm.get('cantBoletos')?.value * this.cineForm.get('cantClientes')?.value * 12.00;
        total = total - (total * 0.10);
        total = total - (total * 0.10);
        alert("El total a pagar con descuento del 20% es: " + total);
        this.cineForm.get('total')?.setValue(total);
      }
      else {
       // alert("Pago en efectivo")
        total = this.cineForm.get('cantBoletos')?.value * this.cineForm.get('cantClientes')?.value * 12.00;
        total = total - (total * 0.10);
        alert("El total a pagar con descuento del 10%: " + total);
        this.cineForm.get('total')?.setValue(total);
      }
    }

    //mostar los datos del formulario en la tabla
    this.arregloCine.push(this.cineForm.value);
    
  }

  //metodo para inicializar el formulario reactivo
  private initForm(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cantClientes: new FormControl('', [Validators.required]),
      cantBoletos: new FormControl('', [Validators.required]),
      tarjeta: new FormControl('', [Validators.required]),
      total: new FormControl('', [Validators.required]),

    });
  }

}
