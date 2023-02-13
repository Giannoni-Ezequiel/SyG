import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    BannerComponent,
    BodyComponent,
    ContactoComponent,
    ProyectoComponent,
    EmprendimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
