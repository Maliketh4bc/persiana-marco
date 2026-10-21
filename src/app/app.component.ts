import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponentComponent } from './habitacion-component/habitacion-component.component';
import { PersianaComponentComponent } from './habitacion-component/persiana-component/persiana-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponentComponent, PersianaComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'persiana-marco';
  corrienteVivienda = false;

  onConectDisconect(event: Event) {
    let conDes = event.target as HTMLButtonElement;

    if(!this.corrienteVivienda){
      this.corrienteVivienda = true;
      conDes.innerText = 'Desconectar';
    }else{
      this.corrienteVivienda = false;
      conDes.innerText = 'Conectar';
    }
  }

}

