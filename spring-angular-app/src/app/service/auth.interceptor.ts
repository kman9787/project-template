import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getAuthToken;

    console.log("requets intercepted")
    if(this.authService.getAuthToken){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` }
      });
    }
    

    return next.handle(request);
  }
}
