import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResponseResult } from './models';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  // eslint-disable-next-line
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event) => {
          //console.log(customReq);
          /*if (ev instanceof HttpResponse) {
                    //console.error(ev);
                    //console.log('processing response', ev);
                }*/
        },
        (response) => {
          const respResult = new ResponseResult(200, '');
          //console.error(response);
          if (response instanceof HttpErrorResponse) {
            const err = response.message || JSON.stringify(response.error);
            respResult.statusCode = response.status;
            respResult.message = `${response.statusText || ''} Details: ${err}`;
          } else {
            respResult.statusCode = 400;
            respResult.message = response.message ? response.message : response.toString(); // eslint-disable-line
          }
          //console.error(respResult.message);
          return respResult;
        },
      ),
    );
  }
}

/**
 * Provider POJO for the interceptor
 */
export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorHttpInterceptor,
  multi: true,
};
