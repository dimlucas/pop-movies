import { Component } from '@angular/core';
import { MoviesService } from 'app/services/movies.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    searchTerm: string = "";
    
    constructor(public moviesService: MoviesService) {
        
    }   

    search() {
        this.moviesService.searchTerm = this.searchTerm;        
    }
}