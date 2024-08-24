import { Component } from '@angular/core';
import { BotonesComponent } from '../botones/botones.component';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  valorU:number=0;
  valorD:number=0;   
  resultado: number = 0;

  onInputChangeNumberOne(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.valorU = Number(inputElement.value);
  }
  onInputChangeNumberTwo(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.valorD = Number(inputElement.value);
  }

  updateResultado(resultado: number): void {
    this.resultado = resultado;
  }

  limpiarCampos(): void {
    this.valorU = 0;
    this.valorD = 0;
    this.resultado = 0;
  }
}
