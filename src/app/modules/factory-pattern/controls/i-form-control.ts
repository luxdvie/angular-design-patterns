export interface IFormControl {
	focus: () => void;
}

export interface IFormDefinition {
	type: string;
	instance: IFormControl | null;
}
