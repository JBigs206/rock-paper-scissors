import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main/main.component';



const routes: Routes = [
	{
		path: '', 
		redirectTo: 'main', 
		pathMatch: 'full'
	},
	{
		path: 'main', 
		component: MainComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
