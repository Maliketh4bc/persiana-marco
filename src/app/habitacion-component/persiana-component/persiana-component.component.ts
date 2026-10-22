import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-persiana-component',
  imports: [],
  templateUrl: './persiana-component.component.html',
  styleUrl: './persiana-component.component.css'
})
export class PersianaComponentComponent {

  hayCorriente = input<boolean>(false);

  abierta = false;

  cambiarEstado() {
    this.abierta = !this.abierta;
  }
}
