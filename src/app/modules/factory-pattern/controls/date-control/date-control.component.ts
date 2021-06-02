import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IFormControl } from '../i-form-control';

@Component({
	selector: 'app-date-control',
	templateUrl: './date-control.component.html',
	styleUrls: ['./date-control.component.scss']
})
export class DateControlComponent implements OnInit, IFormControl {
	value: any = new Date();

	@ViewChild('input', { static: true }) input: ElementRef<HTMLElement>;

	constructor() { }

	ngOnInit(): void { }

	focus() {
		(this.input.nativeElement as any).value = '2021-12-25';
		this.input.nativeElement.focus();
	}
}
