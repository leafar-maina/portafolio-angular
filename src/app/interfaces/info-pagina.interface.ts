// Se crea una interface que sirve para declarar variables con propiedades insertas
// Mediante extensión JSON to TS, se puede copiar un JSON completo y convertirlo en interface

// Se le coloca el ? para indicar que son propiedades opcionales

export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  equipo_trabajo?: any[];
}

// Nueva interfaz para la info del Equipo
export interface InfoEquipo {
  frase?: string;
  nombre?: string;
  subtitulo?: string;
  twitter?: string;
  url?: string;
}
