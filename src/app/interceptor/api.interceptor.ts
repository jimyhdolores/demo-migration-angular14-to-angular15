import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debounceTime, finalize } from 'rxjs';

export const ApiInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
	const ngxUiLoaderService = inject(NgxUiLoaderService);
	ngxUiLoaderService.start();

	return next(req).pipe(
		debounceTime(20),
		finalize(() => ngxUiLoaderService.stop())
	);
};
