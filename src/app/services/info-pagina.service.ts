import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


// Con este decorador (Injectable), Angular lo inyecta donde le indicamos (root) y no es necesario hacer referencia
// al servicio en el app.module.ts
@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {
    // Declarar variables
    info: InfoPagina = {};
    cargada = false;

    constructor( private http: HttpClient ) {
        // console.log('Servicio cargado');

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
}
