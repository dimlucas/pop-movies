import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

const defaultBadRequest: string = "Bad Request";
const defaultUnauthorized: string = "Unauthorized";
const defaultNotFound: string = "Not Found";
const defaultInternalServerError: string = "Internal Server Error";
const defaultUnknown: string = "Unknown Error";

const configuredBadRequest: string = "Request to tMDB is malformed";
const configuredInternalServerError: string = "tMDB server unavailable";
const configuredNotFound: string = "Nothing found";
const configuredUnauthorized: string = "You are not allowed to view this content";
const configuredUnknown: string = "Something went wrong";

@Component({
    selector: 'mock-component',
    template: '<div>Mock Component</div>'
})
export class MockComponent {
    constructor(private _errorHandler: ErrorHandlerService) {

    }

    configureErrorHandler() {
        this._errorHandler.configure({
            badRequest: configuredBadRequest,
            internalServerError: configuredInternalServerError,
            notFound: configuredNotFound,
            unauthorized: configuredUnauthorized,
            unknown: configuredUnknown
        });
    }

    throwBadRequest(): void {
        this.throwHttpError(400);
    }

    throwInternalServerError(): void {
        this.throwHttpError(500);
    }

    throwNotFound(): void {
        this.throwHttpError(404);
    }

    throwUnauthorized(): void {
        this.throwHttpError(401);
    }

    throwUnknown(): void {
        this.throwHttpError(0);
    }

    private throwHttpError(status: number, statusText: string = "") {
        let error = new HttpErrorResponse({
            status: status,
            statusText: statusText
        });
        this._errorHandler.handleHttpError(error);
    }
}

describe("ErrorHandlerService", () => {
    var fixture: ComponentFixture<MockComponent>;
    var el;
    var component: MockComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MockComponent],
            imports: [
                HttpClientModule
            ],
            providers: [ErrorHandlerService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MockComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement.nativeElement;
    });

    afterEach(() => {
        $('#toast-container').remove();
    })

    function assertToast(message) {
        let container = $('#toast-container');
        let toastError = $('.toast-error');
        let toastMessage = $('.toast-message');
        expect(container).toBeTruthy();
        expect(container.length).toEqual(1);
        expect(toastError).toBeTruthy();
        expect(toastError.length).toEqual(1);
        expect(toastMessage).toBeTruthy();
        expect(toastMessage.length).toEqual(1);
        expect(toastMessage[0].textContent).toContain(message);
    }


    describe("When not configured", () => {
        it("should display default bad request error message", () => {
            component.throwBadRequest();
            assertToast(defaultBadRequest);
        });

        it("should display default unauthorized error message", () => {
            component.throwUnauthorized();
            assertToast(defaultUnauthorized);
        });

        it("should display default not found error message", () => {
            component.throwNotFound();
            assertToast(defaultNotFound);
        });

        it("should display default internal server error message", () => {
            component.throwInternalServerError();
            assertToast(defaultInternalServerError);
        });

        it("should display default unknown error message", () => {
            component.throwUnknown();
            assertToast(defaultUnknown);
        });
    });

    describe("When configured", () => {
        beforeEach(() => {
            component.configureErrorHandler();
        });

        it("should display custom bad request message", () => {
            component.throwBadRequest();
            assertToast(configuredBadRequest);
        });

        it("should display custom unauthorized message", () => {
            component.throwUnauthorized();
            assertToast(configuredUnauthorized);
        });

        it("should display custom not found message", () => {
            component.throwNotFound();
            assertToast(configuredNotFound);
        });

        it("should display custom internal server error message", () => {
            component.throwInternalServerError();
            assertToast(configuredInternalServerError);
        });

        it("should display custom unknown error message", () => {
            component.throwUnknown();
            assertToast(configuredUnknown);
        });
    });
});
