import { Component } from '@angular/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ContainerModule } from './container/container.module';

@Component({
	standalone: true,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [NgxUiLoaderModule, ContainerModule]
})
export class AppComponent {
	title = 'demo-migration-angular14-to-angular15';
}
