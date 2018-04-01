import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './messages/home.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/message' , pathMatch: 'full' },
	{ path: 'message', component:HomeComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);