import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    constructor(public service: MoviesService) {

    }

    ngOnInit() {
        this.service.refresh();
    }
}