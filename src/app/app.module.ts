import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { PagosComponent } from './shared/pagos/pagos.component';
import { CardsComponent } from './shared/cards/cards.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    PagosComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
