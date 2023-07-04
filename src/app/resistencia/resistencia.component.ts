import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  valoresCalculados: any;

  handleValoresCalculados(valores: any) {

    
    this.valoresCalculados = valores;
    
  }

}
