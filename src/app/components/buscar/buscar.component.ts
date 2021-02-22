import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  peliculas: any[] = [];
  forma: FormGroup;
  valores: any;
  regresar: string = '';
  

  constructor( private ps: PeliculasService,
               private router: Router, 
               private fb: FormBuilder,
               private rout: ActivatedRoute) {  
     this.rout.params.subscribe(data => {
      this.regresar = data['par'];
     
     });
     this.buscador();
   }

  ngOnInit() {
    
    this.valores = Object.values(this.forma.value);

    if (this.valores.length === 0) {
      console.log('no hay valores');
      return;
    }else{
    
    this.ps.getPeliculas(this.valores[0]).subscribe((resp: any) => {
      console.log(resp);
      this.peliculas = resp.results;
    });
   }
  }

  buscador(){
    
    this.forma = this.fb.group({
      texto: [this.regresar]
    });
  }

  buscar() {
    this.valores = Object.values(this.forma.value);
    
    this.ps.getPeliculas(this.valores[0]).subscribe((resp: any) => {
      console.log(resp);
      this.peliculas = resp.results;
    });
  }

 

  
  verPelicula( pelicula: any ){
    this.valores = Object.values(this.forma.value);
    this.router.navigate(['peli', pelicula.id, 'buscar' , this.valores[0]]);
  }

}
