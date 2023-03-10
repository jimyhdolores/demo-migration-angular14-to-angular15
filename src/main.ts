import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { ROUTES_ROOT } from './app/app.routes';
import { ApiInterceptor } from './app/interceptor/api.interceptor';

bootstrapApplication(AppComponent, {
	providers: [provideRouter(ROUTES_ROOT), provideHttpClient(withInterceptors([ApiInterceptor])), provideAnimations()]
}).catch((err) => console.error(err));
