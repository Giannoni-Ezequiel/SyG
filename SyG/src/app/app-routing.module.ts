import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = 
[
  // HOME
  {path: '', component: ProyectoComponent },
  // CONTACTO
  {path: 'contact', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
