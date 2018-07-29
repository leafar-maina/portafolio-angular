import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor( private route: ActivatedRoute,  public _infoProductos: ProductosService ) {}

  ngOnInit() {
    // Leer el parametro de entrada en la URL
    this.route.params.subscribe( parametros => {
        // Imprime todo el objeto
        // console.log(parametros);
        // Imprime solo un elemento
        // console.log(parametros['termino']);
        this._infoProductos.buscarProductos(parametros['termino']);
      });
  }
}
