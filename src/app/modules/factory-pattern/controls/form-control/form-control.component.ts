import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IFormControl, IFormDefinition } from '../i-form-control';
import { IFormFactory } from '../iform-factory.service';

@Component({
	selector: 'app-form-control',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, AfterViewInit, IFormControl {
	@Input() control: IFormDefinition;
	@ViewChild('controlTemplate', { static: true }) template: ElementRef<HTMLElement>;

	constructor(private formFactory: IFormFactory) { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		if (this.control) {
			this.control.instance = this.formFactory.makeControl(this.control.type, this.template.nativeElement).instance as IFormControl;
		}
	}

	focus() {
		this.control?.instance?.focus();
	}
}
