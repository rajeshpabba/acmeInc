import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
    apiKey = 'Pz9oM_8fUY6h0E8YylOFyGM2mhLzrLfCZOkPGt8qQxpy99l8sEdYduwdntAq3v0nxgLfZx886m4-mCzz0dZvgfVyvE0_dPQ-SpkguUzpWJgxpVjdp-R3o4DDnYZUY3Yx'; 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
            request = request.clone({
                setHeaders: { 
                  'Content-Type': 'application/json; charset=utf-8',
                        'Accept': 'application/json',
                  Authorization: `Bearer ${this.apiKey}` 
                }
            });

        return next.handle(request);
    }
}