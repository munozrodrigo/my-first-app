import { Component } from '@angular/core';

/* Aqui vamos a agregar un decorador de componentes */
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})    

export class ServerComponent {/* La convención de nomenclautra aqui tiene primero el nombre del componente, servidor y luego tambi{en la descripión, componente} */
    serverId = 10;/*El nombre de la propiedad y luego el tipo*/
    serverStatus: string = 'offline';

    getServerStatus() {/* Aquí devuelve un método*/
        return this.serverStatus;
    }
}