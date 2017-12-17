import {Component} from '@angular/core';
import { MoviesService } from 'app/services/movies.service';
import { Movie } from 'app/models/movie';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
    get movie(): Movie {
        return this.service.selectedMovie;
    }
 
    constructor(public service: MoviesService) {

    }
}