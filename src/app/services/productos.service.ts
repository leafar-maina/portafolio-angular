import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

// Con este decorador (Injectable), Angular lo inyecta donde le indicamos (root) y no es necesario hacer referencia
// al servicio en el app.module.ts
@Injectable({
    providedIn: 'root'
})
export class ProductosService {
    // Declarar variables
    // En este caso se hace la declaracion con any[] porque el *ngFor solo recorre arreglos, no objetos
    infoProductos: Producto[] = [];
    cargando = true;

    constructor( private http: HttpClient ) {
        // console.log('Servicio cargado');

        // Llamar a la funcion de carga de productos
        this.cargarProductos();

    }

    // Funcion para cargar los productos
    private cargarProductos() {
        // Leer el archivo JSON
        this.http.get('https://angular-html-be7ff.firebaseio.com/productos_idx.json').subscribe(
            // Se coloca de tipo any[] como arreglo de cualquier tipo para poderlo recorrer en el html
            (resp: Producto[]) => {
                // Obtener respueta
                this.infoProductos = resp;
                console.log(resp);
                // Agregar un timeout para que dure más tiempo
                setTimeout(() => {
                    this.cargando = false;
                }, 2000);
            }
        );
    }
}
