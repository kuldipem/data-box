import { TIMEZONES } from './data';

export interface Timezone {
	value: string;
	abbr: string;
	offset: number;
	isdst: boolean;
	text: string;
	utc: string[];
}

export const timezones: Timezone[] = TIMEZONES;
