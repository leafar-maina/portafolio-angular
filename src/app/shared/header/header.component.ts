import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Se puede invocar el servicio InfoPagina para traer toda la información de la interfaz
  constructor( public _infoPagina: InfoPaginaService ) {}

  ngOnInit() {

  }
}
