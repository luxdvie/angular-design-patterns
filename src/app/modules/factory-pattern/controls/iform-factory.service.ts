import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { DateControlComponent } from './date-control/date-control.component';
import { IFormControl } from './i-form-control';
import { NumericControlComponent } from './numeric-control/numeric-control.component';
import { TextControlComponent } from './text-control/text-control.component';

@Injectable({
	providedIn: 'root'
})
export class IFormFactory {
	/** The library of types that are available to be used/instantiated by this factory. */
	readonly typeLibrary: { [controlType: string]: Type<IFormControl>; } = {
		TextControl: TextControlComponent,
		NumericControl: NumericControlComponent,
		DateControl: DateControlComponent
	};

	constructor(
		private cfr: ComponentFactoryResolver,
		private defaultInjector: Injector,
		private appRef: ApplicationRef) { }

	/**
	 * Creates an instance of the given control (by type name, defined in the library), and inserts
	 * it into the given location in the DOM.
	 * @param controlType The type name of the control you wish to instantiate
	 * @param parentElement The existing DOM element in which you wish to insert the new component
	 */
	makeControl(controlType: string, parentElement: HTMLElement): ComponentRef<IFormControl> {
		const componentFactory = this.cfr.resolveComponentFactory(this.typeLibrary[controlType]);

		// 1. Instantiate the component
		const componentRef = componentFactory.create(this.defaultInjector);

		// 2. Attach the component to the Angular application so that Angular knows about the
		//    component and performs change detection on it.
		this.appRef.attachView(componentRef.hostView);

		// 3. Insert the component HTML view as a child of the given HTML element or just as
		//    a child of "body" if no element is provided.
		const componentElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
		parentElement.appendChild(componentElement);

		return componentRef as any;
	}
}
