import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {
    movies: Movie[] = [];
    loading: boolean = false;
    selectedMovie: Movie;
    searchTerm: string;

    constructor(private _http: HttpClient, private _errorHandler: ErrorHandlerService) {
        
    }    

    deactivateMovies() {
        this.movies.forEach(m => m.active  = false);
    }

    selectMovie(movie: Movie) {
        this.deactivateMovies();
        movie.active = true;
        this.selectedMovie = movie;
    }

    refresh() {
        this.loading = true;
        this._http.get(environment.moviesEndpoints.popular).toPromise().then(response => {
            this.movies = (response as any).results;
            this.loading = false;
        }).catch(err => {
            this._errorHandler.handleHttpError(err);
        });
    }

}