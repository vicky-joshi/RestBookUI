import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private spinnerService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
   Observable<HttpEvent<unknown>> {
    this.spinnerService.show()
    return next.handle(request).pipe(
      delay(1000),
      finalize(()=>{
        this.spinnerService.hide();
      })
    );
  }
}
