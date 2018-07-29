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
    // Arreglo para productos filtrados por medio de busqueda
    productosFiltrados: Producto[] = [];

    constructor( private http: HttpClient ) {
        // console.log('Servicio cargado');

        // Llamar a la funcion de carga de productos
        this.cargarProductos();

    }

    // Funcion para cargar los productos
    private cargarProductos() {
        // NOTA: Hacer que esto cargue de manera asincrona mediante una promesa (Promise)
        return new Promise( ( resolve, reject ) => {
            // Leer el archivo JSON
            this.http.get('https://angular-html-be7ff.firebaseio.com/productos_idx.json').subscribe(
                // Se coloca de tipo any[] como arreglo de cualquier tipo para poderlo recorrer en el html
                (resp: Producto[]) => {
                    // Obtener respueta
                    this.infoProductos = resp;
                    // console.log(resp);
                    this.cargando = false;
                    // // Agregar un timeout para que dure más tiempo
                    // setTimeout(() => {
                    //     this.cargando = false;
                    //     resolve();
                    // }, 2000);
                }
            );
        });
    }

    // Funcion para obtener los detalles del producto
    getProducto( id: string ) {
        // Leer el archivo JSON pero dejarlo en un Observable
        // `colocar esto para que sea un template literal y poder concatenar rapidamente cualquier expresion
        return this.http.get(`https://angular-html-be7ff.firebaseio.com/productos/${ id }.json`);

    }

    // Funcion para buscar productos por termino de busqueda
    // NOTA: Si se recarga la pagina de busqueda directamente, esta no carga productos porque no se ha ido primero a la pagina de home.
        // Para resolver esto, se debe primero cargar los productos aunque no se haya pasado a la pagina de home
    buscarProductos( termino: string ) {
        // Validar que existan los productos cargados, de lo contrario, cargarlos
        if (this.infoProductos.length === 0) {
            // cargar productos
            this.cargarProductos().then( () => {
                // Se ejecuta despues de tener los productos. Aplicar filtro
                this.filtrarProductos( termino );
            });
        } else {
            // Ejecutar busqueda
            this.filtrarProductos( termino );
        }
    }

    // Funcion para filtrar los productos
    filtrarProductos( termino: string ) {
        // Limpiar el arreglo de productos filtrados
        this.productosFiltrados = [];
        // Llevar el termino a minusculas porque TS es case-sensitive
        termino = termino.toLocaleLowerCase();

        // Retornar la lista completa de productos filtrada
        // this.productosFiltrados = this.infoProductos.filter( producto => {
        //     return true;
        // });
        this.infoProductos.forEach( producto => {
            // llevar los campos de producto a minusculas
            const tituloProd = producto.titulo.toLocaleLowerCase();
            const categoriaProd = producto.categoria.toLocaleLowerCase();
            if ( categoriaProd.indexOf( termino ) >= 0 || tituloProd.indexOf( termino ) >= 0 ) {
                this.productosFiltrados.push( producto );
            }
        });
        // Imprimir por consola los productos filtrados
        // console.log(this.productosFiltrados);
    }
}
