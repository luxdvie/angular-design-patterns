import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IFormDefinition, IFormControl } from '../controls/i-form-control';
import { IFormFactory } from '../controls/iform-factory.service';

@Component({
	selector: 'app-factory-pattern-demo',
	templateUrl: './factory-pattern-demo.component.html',
	styleUrls: ['./factory-pattern-demo.component.scss']
})
export class FactoryPatternDemoComponent implements OnInit, AfterViewInit {
	/** All the containers for our IFormControl instances. */
	@ViewChildren('containerList') containerList: QueryList<ElementRef<HTMLElement>> = new QueryList();

	/** A list of controls we want to show to the user. */
	readonly controls: IFormDefinition[] = [
		{ type: 'TextControl', instance: null },
		{ type: 'NumericControl', instance: null },
		{ type: 'DateControl', instance: null },
		{ type: 'TextControl', instance: null }
	];

	constructor(private formFactory: IFormFactory) { }

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.containerList.forEach((ele: ElementRef<HTMLElement>, i: number) => {
			this.setupControl(this.controls[i], ele.nativeElement);
		});
	}

	private setupControl(control: IFormDefinition, ele: HTMLElement) {
		control.instance = this.formFactory.makeControl(control.type, ele).instance as IFormControl;
	}

	addControl(type: string) {
		this.controls.push({ type, instance: null });
		const control = this.controls[this.controls.length - 1];
		this.setupControl(control, this.containerList.last.nativeElement);
	}

	focusControl(oneIndex: number) {
		this.controls[oneIndex - 1]?.instance?.focus();
	}

}
