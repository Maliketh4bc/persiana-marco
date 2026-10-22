import { Component } from '@angular/core';
import { PersianaComponentComponent } from './persiana-component/persiana-component.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-habitacion-component',
  imports: [PersianaComponentComponent],
  templateUrl: './habitacion-component.component.html',
  styleUrl: './habitacion-component.component.css'
})
export class HabitacionComponentComponent {
  hayCorriente = input<boolean>(false);
}
