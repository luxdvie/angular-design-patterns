import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IFormDefinition, IFormControl } from '../controls/i-form-control';
import { IFormFactory } from '../controls/iform-factory.service';

@Component({
	selector: 'app-factory-pattern-demo',
	templateUrl: './factory-pattern-demo.component.html',
	styleUrls: ['./factory-pattern-demo.component.scss']
})
export class FactoryPatternDemoComponent implements OnInit {
	/** A list of controls we want to show to the user. */
	readonly controls: IFormDefinition[] = [
		{ type: 'TextControl', instance: null },
		{ type: 'NumericControl', instance: null },
		{ type: 'DateControl', instance: null },
		{ type: 'TextControl', instance: null }
	];

	constructor() { }

	ngOnInit(): void { }

	addControl(type: string) {
		this.controls.push({ type, instance: null });
	}

	focusControl(index: number) {
		this.controls[index]?.instance?.focus();
	}

}
