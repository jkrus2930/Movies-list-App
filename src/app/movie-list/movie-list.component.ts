import { Component, OnInit } from '@angular/core';
import { MoviesService, AlertifyService } from '../_services/index';
import { Movie } from '../_models/index';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie.MovieObject[];
  movie: Movie.MovieObject;

  constructor(
    private moviesService: MoviesService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this.moviesService.getMovies().subscribe(
      (res: Movie.MovieObject[]) => {
        this.movies = res;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  reloadMovies() {
    this.getMoviesList();
  }
}
