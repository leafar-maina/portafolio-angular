import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, InfoEquipo } from '../interfaces/info-pagina.interface';


// Con este decorador (Injectable), Angular lo inyecta donde le indicamos (root) y no es necesario hacer referencia
// al servicio en el app.module.ts
@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {
    // Declarar variables
    info: InfoPagina = {};
    cargada = false;
    // En este caso se hace la declaracion con any[] porque el *ngFor solo recorre arreglos, no objetos
    infoEquipo: any[] = [];

    constructor( private http: HttpClient ) {
        // console.log('Servicio cargado');

        // llamar a la funcion de carga de info
        this.cargarInfo();
        // Llamar a la funcion de carga de info equipo
        this.cargarInfoEquipo();
    }

    // Funcion para cargar la informacion del site
    private cargarInfo() {
        // Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json').subscribe(
            // Se coloca el tipo Interface InfoPagina a la respuesta para poder acceder a sus objetos
            (resp: InfoPagina) => {
                // Info cargada
                this.cargada = true;
                // Obtener respueta
                this.info = resp;
                console.log(resp);
                // console.log(resp['twitter']);
            }
        );
    }

    // Funcion para cargar la información del equipo
    private cargarInfoEquipo() {
        // Leer el archivo JSON
        this.http.get('https://angular-html-be7ff.firebaseio.com/equipo.json').subscribe(
            // Se coloca el tipo Interface InfoEquipo a la respuesta para poder acceder a sus objetos
            (resp: any[]) => {
                // Obtener respueta
                this.infoEquipo = resp;
                console.log(resp);
                // console.log(resp['twitter']);
            }
        );
    }
}
