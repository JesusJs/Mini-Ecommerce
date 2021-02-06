import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { PagosComponent } from './shared/pagos/pagos.component';
import { CardsComponent } from './shared/cards/cards.component';


const routes: Routes = [
  { path: 'inicio',   component: InicioComponent   },
  { path: 'pagos',    component: PagosComponent    },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
