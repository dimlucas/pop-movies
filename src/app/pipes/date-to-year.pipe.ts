import { Pipe, PipeTransform } from "@angular/core/";

@Pipe({
    name: 'dateToYear'
})
export class DateToYearPipe implements PipeTransform {
    transform(value: string) {
        return value.split("-")[0];
    }
}