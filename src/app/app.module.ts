import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from 'app/components/movies-list/movies-list.component';
import { MoviesSearchComponent } from 'app/components/movies-search/movies-search.component';
import { MovieDetailsComponent } from 'app/components/movie-details/movie-details.component';
import { MoviesService } from 'app/services/movies.service';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import { TmdbInterceptor } from 'app/interceptors/tmdb-interceptor';

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
    providers: [
        MoviesService,
        ErrorHandlerService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TmdbInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
