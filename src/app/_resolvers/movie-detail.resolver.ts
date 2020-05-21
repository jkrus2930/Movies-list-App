import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoviesService, AlertifyService } from '../_services/index';
import { Movie } from '../_models/index';

@Injectable()
export class MovieDetailResolver implements Resolve<Movie.MovieObject> {
  constructor(
    private movieSerice: MoviesService,
    private alertify: AlertifyService,
    private router: Router
  ) {}


  // Resolver to reetrieve movie details by router link. 
  resolve(route: ActivatedRouteSnapshot): Observable<Movie.MovieObject> {
    return this.movieSerice.getMovieResultById(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error(error);
        // If any error, navigate to home
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
