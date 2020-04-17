/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JOURNEY_INTERACTION_TYPE } from './journey.typings';
import { Injectable } from '@angular/core';
import { TrackingAction } from './tracker';

/**
 * @description
 * Service to intercept HttpClient requests
 *
 * @ngModule JourneyModule
 * @publicApi
 */
@Injectable()
export class TrackingHttpRequest implements HttpInterceptor {

  /**
   * @description
   * Method implemented by signature of HttpInterceptor. Triggers track-step event
   * registering all requests even errors.
   *
   * @param req HttpRequest
   * @param next HttpHandler
   * @memberof TrackingHttpRequest
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => {
        let stack = 'UNKOWN HTTP REQUEST';

          try {
            stack = JSON.stringify({ body: req.body, headers: req.headers, params: req.params });
          } catch (error) { }

          TrackingAction(JOURNEY_INTERACTION_TYPE.REQUEST, {
            method: req.method,
            endpoint: req.url,
            stack: stack
          });
      }),
      catchError( response => {
        if (response instanceof HttpErrorResponse) {
          let stack = 'UNKOWN STACK FROM HTTP REQUEST';

          try {
            stack = JSON.stringify({ error: response, body: req.body, headers: req.headers, params: req.params });
          } catch (error) { }

          TrackingAction(JOURNEY_INTERACTION_TYPE.REQUEST, {
            method: req.method,
            endpoint: req.url,
            stack: stack
          });
        }

        return throwError(response);
      })
    );
  }
}
