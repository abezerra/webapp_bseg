import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Injectable, Injector} from "@angular/core";

@Injectable()
export default class AuthInterceptor implements HttpInterceptor {

  public auth: any

  constructor(injector: Injector) {
    this.auth = injector.get(AuthService)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request =  request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   }
    // });

    request = request.clone({
      headers: request.headers.set('Authorization', this.auth.getToken())
    })
    return next.handle(request);
  }
}
