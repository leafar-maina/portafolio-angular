import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Se puede invocar el servicio InfoPagina para traer toda la información de la interfaz
  constructor( public _infoPagina: InfoPaginaService, private router: Router ) {}

  ngOnInit() {

  }

  // Funcion para buscar producto
  buscarProducto ( termino: string ) {
    // Validar el termino
    if ( termino.length < 1) {
      return;
    }
    // Navegar a la pagina de busqueda
    this.router.navigate(['/search', termino]);
    // console.log (termino);
  }
}
