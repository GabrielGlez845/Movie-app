import { Pipe, PipeTransform } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  constructor(private ps: PeliculasService){

  }

  url: string;

  transform(poster_path: any): string {

    if (!poster_path){
      return 'assets/img/noimage.png';
    }

    if(poster_path.length > 0){
      this.url = this.ps.path1 + poster_path;
       return this.url;
    }else{
      return 'assets/img/noimage.png';
    }

    return null;
  }

}
