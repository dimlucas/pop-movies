import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'environments/environment';


@Pipe({
    name: 'posterToUrl'
})
export class PosterToUrlPipe implements PipeTransform{
    transform(value: string, size: string = "w154") {
        let baseUrl = environment.moviesEndpoints.posterBase;
        return `${baseUrl}${size}/${value}`;
    }
}