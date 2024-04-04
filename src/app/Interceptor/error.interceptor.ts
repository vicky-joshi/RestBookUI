import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toaster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
   Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.error instanceof ErrorEvent)
        {
          this.toaster.error(error.error.message)
        }
        else
        {
          this.toaster.error(`${error.error.StatusCode}`,error.error.ErrorDescription)
        }
        return throwError(error);
      })

    );
  }
}
