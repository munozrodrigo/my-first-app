import { Component } from '@angular/core';

@Component({/*Esto es un decordador*/
  selector: 'app-root',/* Propiedades y valores */
  templateUrl: './app.component.html',
  /*styleUrls: ['./app.component.css'] Referenica a varias hojas de estilo externas, por lo que se agregan punteros a otras hojas  */
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  /*name = 'Rodrigo';*/
  //Agregamos una propiedad a mi componenete de app y le daré un nombre de usuario
  username = '';
}
