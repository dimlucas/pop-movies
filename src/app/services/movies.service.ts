import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {
    private _movies: Movie[] = [];
    loading: boolean = false;
    selectedMovie: Movie;
    searchTerm: string;

    constructor(private _http: HttpClient, private _errorHandler: ErrorHandlerService) {
        
    }    

    get movies(): Movie[] {
        if(this.searchTerm && this.searchTerm.length > 0) {
            return this._movies.filter(m => m.title.toUpperCase().includes(this.searchTerm.toUpperCase()));
        }
        else {
            return this._movies;
        }
    }

    deactivateMovies() {
        this._movies.forEach(m => m.active  = false);
    }

    selectMovie(movie: Movie) {
        this.deactivateMovies();
        movie.active = true;
        this.selectedMovie = movie;
    }

    refresh() {
        this.loading = true;
        this._http.get(environment.moviesEndpoints.popular).toPromise().then(response => {
            this._movies = (response as any).results;
            console.log("Movies fetched: ", this._movies);
            this.loading = false;
        }).catch(err => {
            this._errorHandler.handleHttpError(err);
        });
    }

}