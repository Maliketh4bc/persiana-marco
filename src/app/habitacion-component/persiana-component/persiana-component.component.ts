import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-persiana-component',
  imports: [],
  templateUrl: './persiana-component.component.html',
  styleUrl: './persiana-component.component.css'
})
export class PersianaComponentComponent {

  estado = false;

  cambiarEstado(event: Event) {
    let conEs = event.target as HTMLButtonElement;
    
    if(!this.estado){
      this.estado = true;
      conEs.innerText = 'ABIERTA';
    }else{
      this.estado = false;
      conEs.innerText = 'CERRADA';
    }
  }
}
