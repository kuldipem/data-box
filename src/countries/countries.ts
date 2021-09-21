import { COUNTRIES } from './data';

export interface Country {
	code: string;
	name: string;
}

export const countries: Country[] = COUNTRIES;
