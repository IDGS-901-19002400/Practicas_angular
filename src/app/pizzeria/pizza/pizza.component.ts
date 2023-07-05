import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  //variable pata guardar el formulario reactivo
  pizzaForm!: FormGroup;
  //variables para guardar los datos del formulario
  nombre!: string;
  direccion!: string;
  telefono!: number;
  /*   let pizza = {
      tamano: this.pizzaForm.get('tamano')?.value,
      ingredientes: ingredientes,
      cantidad: this.pizzaForm.get('cantidadPizza')?.value,
      precio: totalprice

    } */
  arregloPizza: {tamano: string, ingredientes: string, cantidad: number, precio: number}[] = [];
  arregloPedidos: {nombre: string, direccion: string, telefono: number, totalOrden: number,Fecha: string, pizza: {tamano: string, ingredientes: string, cantidad: number, precio: number}[]}[] = [];


  ingr1!: string;
  ingr2!: string;
  ingr3!: string;
  tamano!: string;
  cantidadPizza!: number;


  //es para construir el formulario reactivo
  constructor(private readonly fb: FormBuilder) {

    this.pizzaForm = this.initForm();
  }

//metodo onSubmit para guardar los datos del formulario
  public onSubmit(): void {
    console.log(this.pizzaForm.value);


    let totalprice = 0;

    //sumar el precio de los ingredientes
    let ingredientes ="";
    if( this.pizzaForm.get('ingr1')?.value == true){
      totalprice= totalprice + 10;
      ingredientes = ingredientes + "Jamón, ";
    }
    if( this.pizzaForm.get('ingr2')?.value == true){
      totalprice= totalprice + 10;
      ingredientes = ingredientes + "Piña, ";
    }
    if( this.pizzaForm.get('ingr3')?.value == true){
      totalprice= totalprice + 10;
      ingredientes = ingredientes + "Champiñones, ";
    }

    //sumar el precio del tamaño
    totalprice= totalprice + parseInt(this.pizzaForm.get('tamano')?.value);

    //multiplicar por la cantidad de pizzas

    totalprice= totalprice * this.pizzaForm.get('cantidadPizza')?.value;

    //tamaño, ingredientes, cantidad, precio
    
    let pizza = {
      tamano: this.pizzaForm.get('tamano')?.value,
      ingredientes: ingredientes,
      cantidad: this.pizzaForm.get('cantidadPizza')?.value,
      precio: totalprice

    }

    this.arregloPizza.push(pizza);

    console.log(pizza);

  }

  //metodo eliminarPizza para eliminar una pizza del arregloPizza
  public eliminarPizza(index: number): void {
    this.arregloPizza.splice(index, 1);
  }


  //funcion terminarOrden para mostrar el total de la orden

  public terminarOrden(): void {
    let totalOrden = 0;
    for (let i = 0; i < this.arregloPizza.length; i++) {
      totalOrden = totalOrden + this.arregloPizza[i].precio;
    }
    //alert con boton de confirmacion y cancelacion
    if (confirm("El total de la orden es: $" + totalOrden + " ¿Desea confirmar la orden?")) {
      alert("Orden confirmada");
      //agregar el pedido al arreglo de pedidos
      let pedido = {
        nombre: this.pizzaForm.get('nombre')?.value,
        direccion: this.pizzaForm.get('direccion')?.value,
        telefono: this.pizzaForm.get('telefono')?.value,
        totalOrden: totalOrden,
        Fecha: new Date().toLocaleDateString("es-ES"),
        pizza: this.arregloPizza

      }

      this.arregloPedidos.push(pedido);
      this.arregloPizza = [];
      this.pizzaForm = this.initForm();

      console.log(pedido);

        
        
    }
    else {
      alert("Orden cancelada");
    }

  }


  calcularTotal(): number {
    let total = 0;
    this.arregloPedidos.forEach(pedido => total += pedido.totalOrden);
    return total;
  }


  //metodo para obtener datos 
  public obtenerDatos(): void {
    this.tamano = this.pizzaForm.get('tamano')?.value;
    
    this.cantidadPizza = this.pizzaForm.get('cantidadPizza')?.value;

  }

  //metodo para inicializar el formulario reactivo
  private initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      direccion: [''],
      telefono: [''],
      ingr1: [0],
      ingr2: [0],
      ingr3: [0],
      tamano: [0],
      cantidadPizza: [0]
    });
  }

}
