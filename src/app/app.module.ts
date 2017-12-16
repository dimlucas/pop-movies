import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from 'app/components/movies-list/movies-list.component';
import { MoviesSearchComponent } from 'app/components/movies-search/movies-search.component';
import { MovieDetailsComponent } from 'app/components/movie-details/movie-details.component';
import { MoviesService } from 'app/services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesSearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
