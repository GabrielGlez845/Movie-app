import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populares: any[] = [];
  

  constructor( public pelisService: PeliculasService,
               private router: Router) { 
    this.pelisService.getPopulares().subscribe((resp)  => {
    this.populares = resp;
  });
  }

  verPelicula( popular: any ) {
      
      this.router.navigate(['peli', popular.id, 'home']);

  }

  
  ngOnInit() {
    
  }

}
