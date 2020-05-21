import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/_models/index';
import { MoviesService, AlertifyService } from '../../_services/index';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie.MovieObject;
  @Output() reloadMovies = new EventEmitter();

  constructor(
    private moviesService: MoviesService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  // Delete movie from list 
  deleteMovieFromList(id) {
    this.moviesService.deleteMovie(id).subscribe(
      data => {
        this.alertify.error('Movie deleted from list');
        this.loadMoviesAfterDelete();
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  // Reload movie list after delete
  loadMoviesAfterDelete() {
    this.reloadMovies.emit();
  }
}
