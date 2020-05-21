import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../_models/index';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  headers = new Headers({ 'Content-Type': 'application/json' });
  moviesUrl = 'api/movies/';

  constructor(private http: HttpClient) {}


  // Get movie by Id
  getMovieById(id): Observable<Movie.MovieObject> {
    return this.http.get<Movie.MovieObject>(this.moviesUrl + '/' + id);
  }

  // Get movies in list
  getMovies(): Observable<Movie.MovieObject[]> {
    return this.http.get<Movie.MovieObject[]>(this.moviesUrl, {});
  }

  //Delete movie from list by Id
  deleteMovie(id: number) {
    return this.http.delete(this.moviesUrl + id);
  }

  // Add movie to list
  addMovieToList(movie: Movie.MovieObject) {
    return this.http.post(this.moviesUrl, movie);
  }

  // Get movie for details 
  getMovieResultById(id): Observable<Movie.MovieObject> {
    let params = new HttpParams();
  // Append api_key to the request
    params = params.append('api_key', this.apiKey);
    return this.http.get<Movie.MovieObject>(this.baseUrl + 'movie/' + id, {
      params
    });
  }
}
