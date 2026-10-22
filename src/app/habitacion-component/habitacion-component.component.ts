import { Component } from '@angular/core';
import { PersianaComponentComponent } from './persiana-component/persiana-component.component';
import { input, output } from '@angular/core';

@Component({
  selector: 'app-habitacion-component',
  imports: [PersianaComponentComponent],
  templateUrl: './habitacion-component.component.html',
  styleUrl: './habitacion-component.component.css'
})
export class HabitacionComponentComponent {
  id = input<number>(0);
  hayCorriente = input<boolean>(false);
  estadoCambiado = output<boolean>();

  reenviarEstado(abierta: boolean) {
    this.estadoCambiado.emit(abierta);
  }
}
