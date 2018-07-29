import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

// Constantes de las rutas
const app_routes: Routes = [
    // Si se deja la ruta base '', se toma como caracter vacío y coincide con cualquier otra ruta para el routerLinkActive
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    // Especificando un parametro por URL con :id
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        // Se utiliza el useHash para que permita navegar por paginas sin usar el / porque un AppSrv puede pensar
        // que se trata de navegacion en carpetas y no simplemente en páginas que deben ser procesadas por Angular.
        // De esa forma, no es necesario modificar el htaccess e indicar que no se tratan de carpetas sino de rutas del index.html
        RouterModule.forRoot ( app_routes, { useHash: true } )
    ],
    // Se exporta el modulo para que sea visible el renderizado (router-outlet) desde el AppComponent
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}
