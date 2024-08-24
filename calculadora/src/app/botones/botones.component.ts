import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  @Input() valorUno: number = 0;
  @Input() valorDos: number = 0;

  @Output() resultadoChange = new EventEmitter<number>();
  @Output() limpiarCampos = new EventEmitter<void>(); 
  
  resultado: number = 0;

  sumar() {
    this.resultado = this.valorUno + this.valorDos;
    this.resultadoChange.emit(this.resultado);
  }

  restar() {
    this.resultado = this.valorUno - this.valorDos;
    this.resultadoChange.emit(this.resultado);
  }

  cuadrado() {
    this.resultado = Math.pow(this.valorUno, 2);
    this.resultadoChange.emit(this.resultado);
  }

  multiplicar() {
    this.resultado = this.valorUno * this.valorDos;
    this.resultadoChange.emit(this.resultado);
  }

  dividir() {
    if (this.valorDos !== 0) {
      this.resultado = this.valorUno / this.valorDos;
    } else {
      this.resultado = NaN;
    }
    this.resultadoChange.emit(this.resultado);
  }

  limpiar() {
    this.resultado = 0;
    this.resultadoChange.emit(this.resultado);
    this.limpiarCampos.emit(); 
  }
}
