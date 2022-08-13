import { Injectable } from '@angular/core';
import { MovieModel } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  // public fetchMovies(filter: string): Promise<MovieModel[]> {
  //   return [];
  // }

}
