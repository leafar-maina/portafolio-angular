import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Se inyectará el servicio para poder ser utilizado por la primera pagina del sitio
  constructor( public _infoPagina: InfoPaginaService, public _infoProductos: ProductosService ) {

  }
}
