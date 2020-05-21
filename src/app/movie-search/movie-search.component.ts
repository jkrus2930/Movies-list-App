import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Movie } from '../_models/index';
import {
  MoviesService,
  MovieSearchService,
  AlertifyService
} from '../_services/index';
import { Subject, throwError } from 'rxjs';

import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: Movie.MovieObject[];
  movie: Movie.MovieObject;
  searchTerms = new Subject<string>();
  searchResults: any;
  searchByNameForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private movieSearService: MovieSearchService,
    private alertify: AlertifyService
  ) {}

  
  ngOnInit() {
    this.search();
    this.createsearchByNameForm();
  }


  // Create the form 
  createsearchByNameForm() {
    this.searchByNameForm = this.fb.group({
      query: ['', Validators.required]
    });
  }


  // search method
  search() {
    this.searchTerms
      .pipe(
        map((e: any) => {
          //console.log(e.target.value);
          return e.target.value;
        }),
        // wait 400ms after each keystroke before considering the term
        debounceTime(400),
        // ignore if next search term is same as previous
        distinctUntilChanged(),
        // switch to new observable each time the term changes
        switchMap(term => {
                            // return the http search observable
                            return this.movieSearService._searchEntries(term);
                          }),
        catchError(e => {
          // show rror if any
          this.alertify.error(e);
          return throwError(e);
        })
      )
      .subscribe(res => {
        // save results
        this.searchResults = res;
      });
  }


  // Reset the inpuut search 
  reset() {
    this.searchResults = [];
  }


  //Add movie to list 
  addToList(id: any) {
    this.moviesService.getMovieResultById(id).subscribe(
      res => {
        this.alertify.success('Movie added to list');
        this.movie = res;

        this.moviesService.addMovieToList(this.movie).subscribe();
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
