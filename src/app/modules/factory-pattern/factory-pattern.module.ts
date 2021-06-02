import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateControlComponent } from './controls/date-control/date-control.component';
import { TextControlComponent } from './controls/text-control/text-control.component';
import { NumericControlComponent } from './controls/numeric-control/numeric-control.component';
import { RouterModule, Routes } from '@angular/router';
import { FactoryPatternDemoComponent } from './factory-pattern-demo/factory-pattern-demo.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: FactoryPatternDemoComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		FactoryPatternDemoComponent,
		TextControlComponent,
		NumericControlComponent,
		DateControlComponent
	]
})
export class FactoryPatternModule { }
