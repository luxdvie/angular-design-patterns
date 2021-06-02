import { ElementRef, ViewChild } from "@angular/core";
import { Component, Input, OnInit } from '@angular/core';
import { IFormControl } from "../i-form-control";

@Component({
	selector: 'app-text-control',
	templateUrl: './text-control.component.html',
	styleUrls: ['./text-control.component.scss']
})
export class TextControlComponent implements OnInit, IFormControl {
	@Input() value: any = 'asdf...';
	@ViewChild('input', { static: true }) input: ElementRef<HTMLElement>;

	constructor() { }
	ngOnInit(): void { }

	focus() {
		this.value = 'focused!';
		const ele = this.input.nativeElement as any;
		ele.select();
		ele.focus();
	}

}
