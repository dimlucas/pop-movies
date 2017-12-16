import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import * as toastr from 'toastr';

export interface ErrorHandlerServiceOptions  {
    badRequest: string,
    unauthorized: string,
    notFound: string,
    internalServerError: string,
    unknown: string
}

@Injectable()
export class ErrorHandlerService {
    
    private options: ErrorHandlerServiceOptions = {
        badRequest:  "Bad Request",
        unauthorized: "Unauthorized",
        notFound:  "Not Found",
        internalServerError:  "Internal Server Error",
        unknown:  "Unknown Error"
    }

    constructor() {
    }

    //Called externally to override default values
    configure(options: ErrorHandlerServiceOptions) {
        this.options = {
            ...this.options,
            ...options
        }
    }

    handleHttpError(error: HttpErrorResponse) {
        switch(error.status) {
            case 400:
                toastr.error(this.options.badRequest);
                break;
            case 401:
                toastr.error(this.options.unauthorized);
                break;
            case 404:
                toastr.error(this.options.notFound);
                break;
            case 500:   
                toastr.error(this.options.internalServerError);
                break;
            default:
                toastr.error(this.options.unknown);
                break;
        }
    }
}