import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "environments/environment";


export class TmdbInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        req = req.clone();
        req.params.append("api_key", environment.tmdbApiKey);
        return next.handle(req);
    }
}