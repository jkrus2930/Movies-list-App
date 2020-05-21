import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../_models/index';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  headers = new Headers({ 'Content-Type': 'application/json' });
  moviesUrl = 'api/movies';
  searchResult: any;

  constructor(private http: HttpClient) {}


  // Search movies
  searchMovie(term): Observable<Movie.MovieObject[]> {
    let params = new HttpParams();

    if (term != '') {
      params = params.append('api_key', this.apiKey);
      params = params.append('query', term);

      return this.http
        .get(this.baseUrl + 'search/movie', {
          params
        })
        .pipe(
          map(response => {
            return (this.searchResult = response['results']);
          })
        );
    }
  }

  _searchEntries(term) {
    return this.searchMovie(term);
  }
}
