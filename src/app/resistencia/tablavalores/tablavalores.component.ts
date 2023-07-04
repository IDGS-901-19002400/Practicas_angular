import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablavalores',
  templateUrl: './tablavalores.component.html',
  styleUrls: ['./tablavalores.component.css']
})
export class TablavaloresComponent {

  valorestabla: any;

  @Input() valores: any;

  ngOnChanges() {
    this.valorestabla = this.valores;
  }


}