import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetallado } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // Declarar variables
  producto: ProductoDetallado;
  productoID: string;

  // Se agrega propiedad (ActivatedRoute) para leer parametro desde URL
  constructor( private route: ActivatedRoute, public _infoProducto: ProductosService ) {}

  ngOnInit() {
    // Leer el parametro de entrada en la URL
    this.route.params.subscribe( parametros => {
      // Imprime todo el objeto
      console.log(parametros);
      // Imprime solo un elemento
      console.log(parametros['id']);
      this.productoID = parametros['id'];
      this._infoProducto.getProducto(parametros['id']).subscribe( (producto: ProductoDetallado) => {
        console.log(producto);
        this.producto = producto;
      });
    });
  }
}
