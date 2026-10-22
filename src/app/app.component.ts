import { Component } from '@angular/core';
import { HabitacionComponentComponent } from './habitacion-component/habitacion-component.component';

@Component({
  selector: 'app-root',
  imports: [HabitacionComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'persiana-marco';
  corrienteVivienda = false;
  corrienteHabitacion = false;
  estadoPersiana = false;

  onConectDisconectHabitacion() {
    this.corrienteHabitacion = !this.corrienteHabitacion;
  }

  onConectDisconect() {
    this.corrienteVivienda = !this.corrienteVivienda;
  }
  
  onEstadoPersiana(abierta: boolean) {
    this.estadoPersiana = abierta;
  }
}

