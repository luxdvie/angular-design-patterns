import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IFormControl } from '../i-form-control';

@Component({
	selector: 'app-numeric-control',
	templateUrl: './numeric-control.component.html',
	styleUrls: ['./numeric-control.component.scss']
})
export class NumericControlComponent implements OnInit, IFormControl {
	@Input() value: any = '9';
	@ViewChild('input', { static: true }) input: ElementRef<HTMLElement>;

	constructor() { }

	ngOnInit(): void {
	}

	focus() {
		this.value = 42;
		const ele = this.input.nativeElement as any;
		ele.select();
		ele.focus();
	}

}
