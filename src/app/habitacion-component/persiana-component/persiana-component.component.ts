import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana-component',
  imports: [],
  templateUrl: './persiana-component.component.html',
  styleUrl: './persiana-component.component.css'
})
export class PersianaComponentComponent {

  hayCorriente = input<boolean>(false);
  estadoCambiado = output<boolean>();

  abierta = false;

  cambiarEstado() {
    this.abierta = !this.abierta;
    this.estadoCambiado.emit(this.abierta);
  }
}
