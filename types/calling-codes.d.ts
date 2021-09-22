export default CALLING_CODES;
declare const CALLING_CODES: ({
    code: string;
    label: string;
    phone: string;
    suggested?: undefined;
} | {
    code: string;
    label: string;
    phone: string;
    suggested: boolean;
})[];
