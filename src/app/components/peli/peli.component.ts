import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styleUrls: ['./peli.component.css']
})
export class PeliComponent implements OnInit {

  pelicula: any;
  regresar: string;
  busqueda : string;

   

  constructor( private arouter: ActivatedRoute,
               private ps: PeliculasService) {

    this.arouter.params.subscribe(data => {
      //lo que regresa el params es un arreglo por eso se   convierte a string
      this.getPelicula(data [ 'id' ] );
      this.regresar = data['dir'];
      if (data['busqueda']) {
        this.busqueda = data['busqueda'];
      }
    });


   }

   

  ngOnInit() {

  }

  getPelicula(id: string) {
   this.ps.getPelicula(id).subscribe((resp: any) => {
      console.log('resp', resp);
      this.pelicula = resp;
    });

  }

}
