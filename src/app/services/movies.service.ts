import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';


@Injectable()
export class MoviesService {
    private _movies: Movie[];
    selectedMovie: Movie;
    searchTerm: string;

    constructor(private http: HttpClient) {
        
    }    

    get movies(): Observable<Movie[]> {
        if(this._movies) {
            return Observable.create((observer) => {
                if(this.searchTerm) {
                    observer.next(this._movies.filter(movie => {
                        return movie.title.toUpperCase().includes(this.searchTerm);
                    }));
                }
                else {
                    observer.next(this._movies);
                }
                observer.next(this._movies);
                observer.complete();
            });
        }
        else {
            return this.fetchMovies();
        }
    }

    selectMovie(movie: Movie) {
        this.selectedMovie = movie;
    }

    private fetchMovies(): Observable<Movie[]> {
        
    }
}