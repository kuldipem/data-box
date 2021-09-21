import { CALLING_CODES } from './data';

export interface CallingCode {
	code: string;
	label: string;
	phone: string;
}

export const callingCodes: CallingCode[] = CALLING_CODES;
