import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'factory-pattern',
		loadChildren: () => import('./modules/factory-pattern/factory-pattern.module').then(m => m.FactoryPatternModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
