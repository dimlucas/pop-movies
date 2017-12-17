import {Component} from '@angular/core';
import { MoviesService } from 'app/services/movies.service';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
    constructor(_service: MoviesService) {

    }
}