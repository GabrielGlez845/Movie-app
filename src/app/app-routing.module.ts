import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliComponent } from './components/peli/peli.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar/:par', component: BuscarComponent },
  { path: 'peli/:id/:dir', component: PeliComponent },
  { path: 'peli/:id/:dir/:busqueda', component: PeliComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
