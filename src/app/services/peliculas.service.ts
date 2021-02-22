import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = 'e8bb34393c3599a03fb9f8d6beeceb4e';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  public path: string = 'http://image.tmdb.org/t/p/w500';
  public path1: string = 'http://image.tmdb.org/t/p/w300';
  

  constructor( private http: HttpClient) { }

  getPopulares(){
    const url = `${this.urlMoviedb}/movie/popular?api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback=JSONP_CALLBACK' ).pipe(map((resp: any) => {
        return resp.results;
    }));
  }

  getPelicula( id: string ) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback=JSONP_CALLBACK' );


  }

  getPeliculas(termino: string){

    const url = `${this.urlMoviedb}/search/movie?api_key=${ this.apikey }&language=es&query=${termino}`;
    
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK' );

  }
}

//&callback=JSONP_CALLBACK
// /dicover/movie?sort_by=popularity.desc&api_key=
// image.tmdb.org/t/p/w500