import { TestBed } from '@angular/core/testing';

import { IFormFactory } from './iform-factory.service';

describe('IFormFactory', () => {
	let service: IFormFactory;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(IFormFactory);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
