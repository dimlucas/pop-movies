import { Component } from '@angular/core';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private _errorHandler: ErrorHandlerService) {
        this._errorHandler.configure({
            badRequest: "Request to tMDB is malformed",
            internalServerError: "tMDB server unavailable",
            notFound: "Nothing found",
            unauthorized: "You are not allowed to view this content",
            unknown: "Something went wrong"
        });
    }
}
