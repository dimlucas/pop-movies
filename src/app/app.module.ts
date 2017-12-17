import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from 'app/components/movies-list/movies-list.component';
import { MovieDetailsComponent } from 'app/components/movie-details/movie-details.component';
import { MoviesService } from 'app/services/movies.service';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import { TmdbInterceptor } from 'app/interceptors/tmdb-interceptor';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { DateToYearPipe } from 'app/pipes/date-to-year.pipe';
import { PosterToUrlPipe } from 'app/pipes/poster-to-url';

@NgModule({
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieDetailsComponent,
        NavbarComponent,
        DateToYearPipe,
        PosterToUrlPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TmdbInterceptor,
            multi: true
        },
        MoviesService,
        ErrorHandlerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
