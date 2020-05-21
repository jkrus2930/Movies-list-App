import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {
  MoviesService,
  DataService,
  MovieSearchService,
  AlertifyService
} from './_services/index';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailResolver } from './_resolvers/movie-detail.resolver';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [
    MoviesService,
    MovieSearchService,
    MovieDetailResolver,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
