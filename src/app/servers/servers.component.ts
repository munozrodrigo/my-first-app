import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template:`
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //Ahora le vamos a dar funcionalidad al botón
  //ESTABLECEMOS PROPIEDADES DE NOMBRE DE SERVIDOR
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName ='Testserver';

  constructor() {//Rol= Inyección de dependencias
  /*Retrasa la ejecución de la función. Se pasan 2 parámetros (La función qu quiere llamar y el tiempo "ms")*/ 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
}
  ngOnInit(): void {
  }

  onCreateServer() {//Creamos este métodow
    this.serverCreationStatus = 'Server was created! Name is ' +this.serverName;
  }

  onUpdateServerName(event: any) {//Sabemos que vamos a recibir este evento
    // console.log(event);//Lo registramos en la consola para verlo en este registro de depuración.
    this.serverName = (<HTMLInputElement>event.target).value;//El evento, onjetivo(elemento de entrada) y valor

  }

}
