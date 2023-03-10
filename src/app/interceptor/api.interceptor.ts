import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debounceTime, finalize, Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	constructor(private _ngxUiLoaderService: NgxUiLoaderService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		this._ngxUiLoaderService.start();
		return next.handle(request).pipe(
			debounceTime(20),
			finalize(() => this._ngxUiLoaderService.stop())
		);
	}
}
