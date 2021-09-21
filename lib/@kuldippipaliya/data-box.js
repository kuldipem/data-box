(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@kuldippipaliya/data-box", [], factory);
	else if(typeof exports === 'object')
		exports["@kuldippipaliya/data-box"] = factory();
	else
		root["@kuldippipaliya/data-box"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/countries/calling-code.ts":
/*!***************************************!*\
  !*** ./src/countries/calling-code.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callingCodes": () => /* binding */ callingCodes
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/countries/data.ts");

var callingCodes = _data__WEBPACK_IMPORTED_MODULE_0__.CALLING_CODES;

/***/ }),

/***/ "./src/countries/countries.ts":
/*!************************************!*\
  !*** ./src/countries/countries.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countries": () => /* binding */ countries
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/countries/data.ts");

var countries = _data__WEBPACK_IMPORTED_MODULE_0__.COUNTRIES;

/***/ }),

/***/ "./src/countries/data.ts":
/*!*******************************!*\
  !*** ./src/countries/data.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COUNTRIES": () => /* binding */ COUNTRIES,
/* harmony export */   "CALLING_CODES": () => /* binding */ CALLING_CODES
/* harmony export */ });
var COUNTRIES = [{
  code: 'AF',
  name: 'Afghanistan'
}, {
  code: 'AX',
  name: "\xC5land Islands"
}, {
  code: 'AL',
  name: 'Albania'
}, {
  code: 'DZ',
  name: 'Algeria'
}, {
  code: 'AS',
  name: 'American Samoa'
}, {
  code: 'AD',
  name: 'Andorra'
}, {
  code: 'AO',
  name: 'Angola'
}, {
  code: 'AI',
  name: 'Anguilla'
}, {
  code: 'AQ',
  name: 'Antarctica'
}, {
  code: 'AG',
  name: 'Antigua & Barbuda'
}, {
  code: 'AR',
  name: 'Argentina'
}, {
  code: 'AM',
  name: 'Armenia'
}, {
  code: 'AW',
  name: 'Aruba'
}, {
  code: 'AU',
  name: 'Australia'
}, {
  code: 'AT',
  name: 'Austria'
}, {
  code: 'AZ',
  name: 'Azerbaijan'
}, {
  code: 'BS',
  name: 'Bahamas'
}, {
  code: 'BH',
  name: 'Bahrain'
}, {
  code: 'BD',
  name: 'Bangladesh'
}, {
  code: 'BB',
  name: 'Barbados'
}, {
  code: 'BY',
  name: 'Belarus'
}, {
  code: 'BE',
  name: 'Belgium'
}, {
  code: 'BZ',
  name: 'Belize'
}, {
  code: 'BJ',
  name: 'Benin'
}, {
  code: 'BM',
  name: 'Bermuda'
}, {
  code: 'BT',
  name: 'Bhutan'
}, {
  code: 'BO',
  name: 'Bolivia'
}, {
  code: 'BA',
  name: 'Bosnia & Herzegovina'
}, {
  code: 'BW',
  name: 'Botswana'
}, {
  code: 'BV',
  name: 'Bouvet Island'
}, {
  code: 'BR',
  name: 'Brazil'
}, {
  code: 'IO',
  name: 'British Indian Ocean Territory'
}, {
  code: 'VG',
  name: 'British Virgin Islands'
}, {
  code: 'BN',
  name: 'Brunei'
}, {
  code: 'BG',
  name: 'Bulgaria'
}, {
  code: 'BF',
  name: 'Burkina Faso'
}, {
  code: 'BI',
  name: 'Burundi'
}, {
  code: 'KH',
  name: 'Cambodia'
}, {
  code: 'CM',
  name: 'Cameroon'
}, {
  code: 'CA',
  name: 'Canada'
}, {
  code: 'CV',
  name: 'Cape Verde'
}, {
  code: 'BQ',
  name: 'Caribbean Netherlands'
}, {
  code: 'KY',
  name: 'Cayman Islands'
}, {
  code: 'CF',
  name: 'Central African Republic'
}, {
  code: 'TD',
  name: 'Chad'
}, {
  code: 'CL',
  name: 'Chile'
}, {
  code: 'CN',
  name: 'China'
}, {
  code: 'CX',
  name: 'Christmas Island'
}, {
  code: 'CC',
  name: 'Cocos (Keeling) Islands'
}, {
  code: 'CO',
  name: 'Colombia'
}, {
  code: 'KM',
  name: 'Comoros'
}, {
  code: 'CG',
  name: 'Congo - Brazzaville'
}, {
  code: 'CD',
  name: 'Congo - Kinshasa'
}, {
  code: 'CK',
  name: 'Cook Islands'
}, {
  code: 'CR',
  name: 'Costa Rica'
}, {
  code: 'CI',
  name: "C\xF4te d\u2019Ivoire"
}, {
  code: 'HR',
  name: 'Croatia'
}, {
  code: 'CU',
  name: 'Cuba'
}, {
  code: 'CW',
  name: "Cura\xE7ao"
}, {
  code: 'CY',
  name: 'Cyprus'
}, {
  code: 'CZ',
  name: 'Czechia'
}, {
  code: 'DK',
  name: 'Denmark'
}, {
  code: 'DJ',
  name: 'Djibouti'
}, {
  code: 'DM',
  name: 'Dominica'
}, {
  code: 'DO',
  name: 'Dominican Republic'
}, {
  code: 'EC',
  name: 'Ecuador'
}, {
  code: 'EG',
  name: 'Egypt'
}, {
  code: 'SV',
  name: 'El Salvador'
}, {
  code: 'GQ',
  name: 'Equatorial Guinea'
}, {
  code: 'ER',
  name: 'Eritrea'
}, {
  code: 'EE',
  name: 'Estonia'
}, {
  code: 'SZ',
  name: 'Eswatini'
}, {
  code: 'ET',
  name: 'Ethiopia'
}, {
  code: 'FK',
  name: 'Falkland Islands'
}, {
  code: 'FO',
  name: 'Faroe Islands'
}, {
  code: 'FJ',
  name: 'Fiji'
}, {
  code: 'FI',
  name: 'Finland'
}, {
  code: 'FR',
  name: 'France'
}, {
  code: 'GF',
  name: 'French Guiana'
}, {
  code: 'PF',
  name: 'French Polynesia'
}, {
  code: 'TF',
  name: 'French Southern Territories'
}, {
  code: 'GA',
  name: 'Gabon'
}, {
  code: 'GM',
  name: 'Gambia'
}, {
  code: 'GE',
  name: 'Georgia'
}, {
  code: 'DE',
  name: 'Germany'
}, {
  code: 'GH',
  name: 'Ghana'
}, {
  code: 'GI',
  name: 'Gibraltar'
}, {
  code: 'GR',
  name: 'Greece'
}, {
  code: 'GL',
  name: 'Greenland'
}, {
  code: 'GD',
  name: 'Grenada'
}, {
  code: 'GP',
  name: 'Guadeloupe'
}, {
  code: 'GU',
  name: 'Guam'
}, {
  code: 'GT',
  name: 'Guatemala'
}, {
  code: 'GG',
  name: 'Guernsey'
}, {
  code: 'GN',
  name: 'Guinea'
}, {
  code: 'GW',
  name: 'Guinea-Bissau'
}, {
  code: 'GY',
  name: 'Guyana'
}, {
  code: 'HT',
  name: 'Haiti'
}, {
  code: 'HM',
  name: 'Heard & McDonald Islands'
}, {
  code: 'HN',
  name: 'Honduras'
}, {
  code: 'HK',
  name: 'Hong Kong SAR China'
}, {
  code: 'HU',
  name: 'Hungary'
}, {
  code: 'IS',
  name: 'Iceland'
}, {
  code: 'IN',
  name: 'India'
}, {
  code: 'ID',
  name: 'Indonesia'
}, {
  code: 'IR',
  name: 'Iran'
}, {
  code: 'IQ',
  name: 'Iraq'
}, {
  code: 'IE',
  name: 'Ireland'
}, {
  code: 'IM',
  name: 'Isle of Man'
}, {
  code: 'IL',
  name: 'Israel'
}, {
  code: 'IT',
  name: 'Italy'
}, {
  code: 'JM',
  name: 'Jamaica'
}, {
  code: 'JP',
  name: 'Japan'
}, {
  code: 'JE',
  name: 'Jersey'
}, {
  code: 'JO',
  name: 'Jordan'
}, {
  code: 'KZ',
  name: 'Kazakhstan'
}, {
  code: 'KE',
  name: 'Kenya'
}, {
  code: 'KI',
  name: 'Kiribati'
}, {
  code: 'KW',
  name: 'Kuwait'
}, {
  code: 'KG',
  name: 'Kyrgyzstan'
}, {
  code: 'LA',
  name: 'Laos'
}, {
  code: 'LV',
  name: 'Latvia'
}, {
  code: 'LB',
  name: 'Lebanon'
}, {
  code: 'LS',
  name: 'Lesotho'
}, {
  code: 'LR',
  name: 'Liberia'
}, {
  code: 'LY',
  name: 'Libya'
}, {
  code: 'LI',
  name: 'Liechtenstein'
}, {
  code: 'LT',
  name: 'Lithuania'
}, {
  code: 'LU',
  name: 'Luxembourg'
}, {
  code: 'MO',
  name: 'Macao SAR China'
}, {
  code: 'MG',
  name: 'Madagascar'
}, {
  code: 'MW',
  name: 'Malawi'
}, {
  code: 'MY',
  name: 'Malaysia'
}, {
  code: 'MV',
  name: 'Maldives'
}, {
  code: 'ML',
  name: 'Mali'
}, {
  code: 'MT',
  name: 'Malta'
}, {
  code: 'MH',
  name: 'Marshall Islands'
}, {
  code: 'MQ',
  name: 'Martinique'
}, {
  code: 'MR',
  name: 'Mauritania'
}, {
  code: 'MU',
  name: 'Mauritius'
}, {
  code: 'YT',
  name: 'Mayotte'
}, {
  code: 'MX',
  name: 'Mexico'
}, {
  code: 'FM',
  name: 'Micronesia'
}, {
  code: 'MD',
  name: 'Moldova'
}, {
  code: 'MC',
  name: 'Monaco'
}, {
  code: 'MN',
  name: 'Mongolia'
}, {
  code: 'ME',
  name: 'Montenegro'
}, {
  code: 'MS',
  name: 'Montserrat'
}, {
  code: 'MA',
  name: 'Morocco'
}, {
  code: 'MZ',
  name: 'Mozambique'
}, {
  code: 'MM',
  name: 'Myanmar (Burma)'
}, {
  code: 'NA',
  name: 'Namibia'
}, {
  code: 'NR',
  name: 'Nauru'
}, {
  code: 'NP',
  name: 'Nepal'
}, {
  code: 'NL',
  name: 'Netherlands'
}, {
  code: 'NC',
  name: 'New Caledonia'
}, {
  code: 'NZ',
  name: 'New Zealand'
}, {
  code: 'NI',
  name: 'Nicaragua'
}, {
  code: 'NE',
  name: 'Niger'
}, {
  code: 'NG',
  name: 'Nigeria'
}, {
  code: 'NU',
  name: 'Niue'
}, {
  code: 'NF',
  name: 'Norfolk Island'
}, {
  code: 'KP',
  name: 'North Korea'
}, {
  code: 'MK',
  name: 'North Macedonia'
}, {
  code: 'MP',
  name: 'Northern Mariana Islands'
}, {
  code: 'NO',
  name: 'Norway'
}, {
  code: 'OM',
  name: 'Oman'
}, {
  code: 'PK',
  name: 'Pakistan'
}, {
  code: 'PW',
  name: 'Palau'
}, {
  code: 'PS',
  name: 'Palestinian Territories'
}, {
  code: 'PA',
  name: 'Panama'
}, {
  code: 'PG',
  name: 'Papua New Guinea'
}, {
  code: 'PY',
  name: 'Paraguay'
}, {
  code: 'PE',
  name: 'Peru'
}, {
  code: 'PH',
  name: 'Philippines'
}, {
  code: 'PN',
  name: 'Pitcairn Islands'
}, {
  code: 'PL',
  name: 'Poland'
}, {
  code: 'PT',
  name: 'Portugal'
}, {
  code: 'PR',
  name: 'Puerto Rico'
}, {
  code: 'QA',
  name: 'Qatar'
}, {
  code: 'RE',
  name: "R\xE9union"
}, {
  code: 'RO',
  name: 'Romania'
}, {
  code: 'RU',
  name: 'Russia'
}, {
  code: 'RW',
  name: 'Rwanda'
}, {
  code: 'WS',
  name: 'Samoa'
}, {
  code: 'SM',
  name: 'San Marino'
}, {
  code: 'ST',
  name: "S\xE3o Tom\xE9 & Pr\xEDncipe"
}, {
  code: 'SA',
  name: 'Saudi Arabia'
}, {
  code: 'SN',
  name: 'Senegal'
}, {
  code: 'RS',
  name: 'Serbia'
}, {
  code: 'SC',
  name: 'Seychelles'
}, {
  code: 'SL',
  name: 'Sierra Leone'
}, {
  code: 'SG',
  name: 'Singapore'
}, {
  code: 'SX',
  name: 'Sint Maarten'
}, {
  code: 'SK',
  name: 'Slovakia'
}, {
  code: 'SI',
  name: 'Slovenia'
}, {
  code: 'SB',
  name: 'Solomon Islands'
}, {
  code: 'SO',
  name: 'Somalia'
}, {
  code: 'ZA',
  name: 'South Africa'
}, {
  code: 'GS',
  name: 'South Georgia & South Sandwich Islands'
}, {
  code: 'KR',
  name: 'South Korea'
}, {
  code: 'SS',
  name: 'South Sudan'
}, {
  code: 'ES',
  name: 'Spain'
}, {
  code: 'LK',
  name: 'Sri Lanka'
}, {
  code: 'BL',
  name: "St. Barth\xE9lemy"
}, {
  code: 'SH',
  name: 'St. Helena'
}, {
  code: 'KN',
  name: 'St. Kitts & Nevis'
}, {
  code: 'LC',
  name: 'St. Lucia'
}, {
  code: 'MF',
  name: 'St. Martin'
}, {
  code: 'PM',
  name: 'St. Pierre & Miquelon'
}, {
  code: 'VC',
  name: 'St. Vincent & Grenadines'
}, {
  code: 'SD',
  name: 'Sudan'
}, {
  code: 'SR',
  name: 'Suriname'
}, {
  code: 'SJ',
  name: 'Svalbard & Jan Mayen'
}, {
  code: 'SE',
  name: 'Sweden'
}, {
  code: 'CH',
  name: 'Switzerland'
}, {
  code: 'SY',
  name: 'Syria'
}, {
  code: 'TW',
  name: 'Taiwan'
}, {
  code: 'TJ',
  name: 'Tajikistan'
}, {
  code: 'TZ',
  name: 'Tanzania'
}, {
  code: 'TH',
  name: 'Thailand'
}, {
  code: 'TL',
  name: 'Timor-Leste'
}, {
  code: 'TG',
  name: 'Togo'
}, {
  code: 'TK',
  name: 'Tokelau'
}, {
  code: 'TO',
  name: 'Tonga'
}, {
  code: 'TT',
  name: 'Trinidad & Tobago'
}, {
  code: 'TN',
  name: 'Tunisia'
}, {
  code: 'TR',
  name: 'Turkey'
}, {
  code: 'TM',
  name: 'Turkmenistan'
}, {
  code: 'TC',
  name: 'Turks & Caicos Islands'
}, {
  code: 'TV',
  name: 'Tuvalu'
}, {
  code: 'UM',
  name: 'U.S. Outlying Islands'
}, {
  code: 'VI',
  name: 'U.S. Virgin Islands'
}, {
  code: 'UG',
  name: 'Uganda'
}, {
  code: 'UA',
  name: 'Ukraine'
}, {
  code: 'AE',
  name: 'United Arab Emirates'
}, {
  code: 'GB',
  name: 'United Kingdom'
}, {
  code: 'US',
  name: 'United States'
}, {
  code: 'UY',
  name: 'Uruguay'
}, {
  code: 'UZ',
  name: 'Uzbekistan'
}, {
  code: 'VU',
  name: 'Vanuatu'
}, {
  code: 'VA',
  name: 'Vatican City'
}, {
  code: 'VE',
  name: 'Venezuela'
}, {
  code: 'VN',
  name: 'Vietnam'
}, {
  code: 'WF',
  name: 'Wallis & Futuna'
}, {
  code: 'EH',
  name: 'Western Sahara'
}, {
  code: 'YE',
  name: 'Yemen'
}, {
  code: 'ZM',
  name: 'Zambia'
}, {
  code: 'ZW',
  name: 'Zimbabwe'
}];
var CALLING_CODES = [{
  code: 'AD',
  label: 'Andorra',
  phone: '376'
}, {
  code: 'AE',
  label: 'United Arab Emirates',
  phone: '971'
}, {
  code: 'AF',
  label: 'Afghanistan',
  phone: '93'
}, {
  code: 'AG',
  label: 'Antigua and Barbuda',
  phone: '1-268'
}, {
  code: 'AI',
  label: 'Anguilla',
  phone: '1-264'
}, {
  code: 'AL',
  label: 'Albania',
  phone: '355'
}, {
  code: 'AM',
  label: 'Armenia',
  phone: '374'
}, {
  code: 'AO',
  label: 'Angola',
  phone: '244'
}, {
  code: 'AQ',
  label: 'Antarctica',
  phone: '672'
}, {
  code: 'AR',
  label: 'Argentina',
  phone: '54'
}, {
  code: 'AS',
  label: 'American Samoa',
  phone: '1-684'
}, {
  code: 'AT',
  label: 'Austria',
  phone: '43'
}, {
  code: 'AU',
  label: 'Australia',
  phone: '61',
  suggested: true
}, {
  code: 'AW',
  label: 'Aruba',
  phone: '297'
}, {
  code: 'AX',
  label: 'Alland Islands',
  phone: '358'
}, {
  code: 'AZ',
  label: 'Azerbaijan',
  phone: '994'
}, {
  code: 'BA',
  label: 'Bosnia and Herzegovina',
  phone: '387'
}, {
  code: 'BB',
  label: 'Barbados',
  phone: '1-246'
}, {
  code: 'BD',
  label: 'Bangladesh',
  phone: '880'
}, {
  code: 'BE',
  label: 'Belgium',
  phone: '32'
}, {
  code: 'BF',
  label: 'Burkina Faso',
  phone: '226'
}, {
  code: 'BG',
  label: 'Bulgaria',
  phone: '359'
}, {
  code: 'BH',
  label: 'Bahrain',
  phone: '973'
}, {
  code: 'BI',
  label: 'Burundi',
  phone: '257'
}, {
  code: 'BJ',
  label: 'Benin',
  phone: '229'
}, {
  code: 'BL',
  label: 'Saint Barthelemy',
  phone: '590'
}, {
  code: 'BM',
  label: 'Bermuda',
  phone: '1-441'
}, {
  code: 'BN',
  label: 'Brunei Darussalam',
  phone: '673'
}, {
  code: 'BO',
  label: 'Bolivia',
  phone: '591'
}, {
  code: 'BR',
  label: 'Brazil',
  phone: '55'
}, {
  code: 'BS',
  label: 'Bahamas',
  phone: '1-242'
}, {
  code: 'BT',
  label: 'Bhutan',
  phone: '975'
}, {
  code: 'BV',
  label: 'Bouvet Island',
  phone: '47'
}, {
  code: 'BW',
  label: 'Botswana',
  phone: '267'
}, {
  code: 'BY',
  label: 'Belarus',
  phone: '375'
}, {
  code: 'BZ',
  label: 'Belize',
  phone: '501'
}, {
  code: 'CA',
  label: 'Canada',
  phone: '1',
  suggested: true
}, {
  code: 'CC',
  label: 'Cocos (Keeling) Islands',
  phone: '61'
}, {
  code: 'CD',
  label: 'Congo, Democratic Republic of the',
  phone: '243'
}, {
  code: 'CF',
  label: 'Central African Republic',
  phone: '236'
}, {
  code: 'CG',
  label: 'Congo, Republic of the',
  phone: '242'
}, {
  code: 'CH',
  label: 'Switzerland',
  phone: '41'
}, {
  code: 'CI',
  label: "Cote d'Ivoire",
  phone: '225'
}, {
  code: 'CK',
  label: 'Cook Islands',
  phone: '682'
}, {
  code: 'CL',
  label: 'Chile',
  phone: '56'
}, {
  code: 'CM',
  label: 'Cameroon',
  phone: '237'
}, {
  code: 'CN',
  label: 'China',
  phone: '86'
}, {
  code: 'CO',
  label: 'Colombia',
  phone: '57'
}, {
  code: 'CR',
  label: 'Costa Rica',
  phone: '506'
}, {
  code: 'CU',
  label: 'Cuba',
  phone: '53'
}, {
  code: 'CV',
  label: 'Cape Verde',
  phone: '238'
}, {
  code: 'CW',
  label: 'Curacao',
  phone: '599'
}, {
  code: 'CX',
  label: 'Christmas Island',
  phone: '61'
}, {
  code: 'CY',
  label: 'Cyprus',
  phone: '357'
}, {
  code: 'CZ',
  label: 'Czech Republic',
  phone: '420'
}, {
  code: 'DE',
  label: 'Germany',
  phone: '49',
  suggested: true
}, {
  code: 'DJ',
  label: 'Djibouti',
  phone: '253'
}, {
  code: 'DK',
  label: 'Denmark',
  phone: '45'
}, {
  code: 'DM',
  label: 'Dominica',
  phone: '1-767'
}, {
  code: 'DO',
  label: 'Dominican Republic',
  phone: '1-809'
}, {
  code: 'DZ',
  label: 'Algeria',
  phone: '213'
}, {
  code: 'EC',
  label: 'Ecuador',
  phone: '593'
}, {
  code: 'EE',
  label: 'Estonia',
  phone: '372'
}, {
  code: 'EG',
  label: 'Egypt',
  phone: '20'
}, {
  code: 'EH',
  label: 'Western Sahara',
  phone: '212'
}, {
  code: 'ER',
  label: 'Eritrea',
  phone: '291'
}, {
  code: 'ES',
  label: 'Spain',
  phone: '34'
}, {
  code: 'ET',
  label: 'Ethiopia',
  phone: '251'
}, {
  code: 'FI',
  label: 'Finland',
  phone: '358'
}, {
  code: 'FJ',
  label: 'Fiji',
  phone: '679'
}, {
  code: 'FK',
  label: 'Falkland Islands (Malvinas)',
  phone: '500'
}, {
  code: 'FM',
  label: 'Micronesia, Federated States of',
  phone: '691'
}, {
  code: 'FO',
  label: 'Faroe Islands',
  phone: '298'
}, {
  code: 'FR',
  label: 'France',
  phone: '33',
  suggested: true
}, {
  code: 'GA',
  label: 'Gabon',
  phone: '241'
}, {
  code: 'GB',
  label: 'United Kingdom',
  phone: '44'
}, {
  code: 'GD',
  label: 'Grenada',
  phone: '1-473'
}, {
  code: 'GE',
  label: 'Georgia',
  phone: '995'
}, {
  code: 'GF',
  label: 'French Guiana',
  phone: '594'
}, {
  code: 'GG',
  label: 'Guernsey',
  phone: '44'
}, {
  code: 'GH',
  label: 'Ghana',
  phone: '233'
}, {
  code: 'GI',
  label: 'Gibraltar',
  phone: '350'
}, {
  code: 'GL',
  label: 'Greenland',
  phone: '299'
}, {
  code: 'GM',
  label: 'Gambia',
  phone: '220'
}, {
  code: 'GN',
  label: 'Guinea',
  phone: '224'
}, {
  code: 'GP',
  label: 'Guadeloupe',
  phone: '590'
}, {
  code: 'GQ',
  label: 'Equatorial Guinea',
  phone: '240'
}, {
  code: 'GR',
  label: 'Greece',
  phone: '30'
}, {
  code: 'GS',
  label: 'South Georgia and the South Sandwich Islands',
  phone: '500'
}, {
  code: 'GT',
  label: 'Guatemala',
  phone: '502'
}, {
  code: 'GU',
  label: 'Guam',
  phone: '1-671'
}, {
  code: 'GW',
  label: 'Guinea-Bissau',
  phone: '245'
}, {
  code: 'GY',
  label: 'Guyana',
  phone: '592'
}, {
  code: 'HK',
  label: 'Hong Kong',
  phone: '852'
}, {
  code: 'HM',
  label: 'Heard Island and McDonald Islands',
  phone: '672'
}, {
  code: 'HN',
  label: 'Honduras',
  phone: '504'
}, {
  code: 'HR',
  label: 'Croatia',
  phone: '385'
}, {
  code: 'HT',
  label: 'Haiti',
  phone: '509'
}, {
  code: 'HU',
  label: 'Hungary',
  phone: '36'
}, {
  code: 'ID',
  label: 'Indonesia',
  phone: '62'
}, {
  code: 'IE',
  label: 'Ireland',
  phone: '353'
}, {
  code: 'IL',
  label: 'Israel',
  phone: '972'
}, {
  code: 'IM',
  label: 'Isle of Man',
  phone: '44'
}, {
  code: 'IN',
  label: 'India',
  phone: '91'
}, {
  code: 'IO',
  label: 'British Indian Ocean Territory',
  phone: '246'
}, {
  code: 'IQ',
  label: 'Iraq',
  phone: '964'
}, {
  code: 'IR',
  label: 'Iran, Islamic Republic of',
  phone: '98'
}, {
  code: 'IS',
  label: 'Iceland',
  phone: '354'
}, {
  code: 'IT',
  label: 'Italy',
  phone: '39'
}, {
  code: 'JE',
  label: 'Jersey',
  phone: '44'
}, {
  code: 'JM',
  label: 'Jamaica',
  phone: '1-876'
}, {
  code: 'JO',
  label: 'Jordan',
  phone: '962'
}, {
  code: 'JP',
  label: 'Japan',
  phone: '81',
  suggested: true
}, {
  code: 'KE',
  label: 'Kenya',
  phone: '254'
}, {
  code: 'KG',
  label: 'Kyrgyzstan',
  phone: '996'
}, {
  code: 'KH',
  label: 'Cambodia',
  phone: '855'
}, {
  code: 'KI',
  label: 'Kiribati',
  phone: '686'
}, {
  code: 'KM',
  label: 'Comoros',
  phone: '269'
}, {
  code: 'KN',
  label: 'Saint Kitts and Nevis',
  phone: '1-869'
}, {
  code: 'KP',
  label: "Korea, Democratic People's Republic of",
  phone: '850'
}, {
  code: 'KR',
  label: 'Korea, Republic of',
  phone: '82'
}, {
  code: 'KW',
  label: 'Kuwait',
  phone: '965'
}, {
  code: 'KY',
  label: 'Cayman Islands',
  phone: '1-345'
}, {
  code: 'KZ',
  label: 'Kazakhstan',
  phone: '7'
}, {
  code: 'LA',
  label: "Lao People's Democratic Republic",
  phone: '856'
}, {
  code: 'LB',
  label: 'Lebanon',
  phone: '961'
}, {
  code: 'LC',
  label: 'Saint Lucia',
  phone: '1-758'
}, {
  code: 'LI',
  label: 'Liechtenstein',
  phone: '423'
}, {
  code: 'LK',
  label: 'Sri Lanka',
  phone: '94'
}, {
  code: 'LR',
  label: 'Liberia',
  phone: '231'
}, {
  code: 'LS',
  label: 'Lesotho',
  phone: '266'
}, {
  code: 'LT',
  label: 'Lithuania',
  phone: '370'
}, {
  code: 'LU',
  label: 'Luxembourg',
  phone: '352'
}, {
  code: 'LV',
  label: 'Latvia',
  phone: '371'
}, {
  code: 'LY',
  label: 'Libya',
  phone: '218'
}, {
  code: 'MA',
  label: 'Morocco',
  phone: '212'
}, {
  code: 'MC',
  label: 'Monaco',
  phone: '377'
}, {
  code: 'MD',
  label: 'Moldova, Republic of',
  phone: '373'
}, {
  code: 'ME',
  label: 'Montenegro',
  phone: '382'
}, {
  code: 'MF',
  label: 'Saint Martin (French part)',
  phone: '590'
}, {
  code: 'MG',
  label: 'Madagascar',
  phone: '261'
}, {
  code: 'MH',
  label: 'Marshall Islands',
  phone: '692'
}, {
  code: 'MK',
  label: 'Macedonia, the Former Yugoslav Republic of',
  phone: '389'
}, {
  code: 'ML',
  label: 'Mali',
  phone: '223'
}, {
  code: 'MM',
  label: 'Myanmar',
  phone: '95'
}, {
  code: 'MN',
  label: 'Mongolia',
  phone: '976'
}, {
  code: 'MO',
  label: 'Macao',
  phone: '853'
}, {
  code: 'MP',
  label: 'Northern Mariana Islands',
  phone: '1-670'
}, {
  code: 'MQ',
  label: 'Martinique',
  phone: '596'
}, {
  code: 'MR',
  label: 'Mauritania',
  phone: '222'
}, {
  code: 'MS',
  label: 'Montserrat',
  phone: '1-664'
}, {
  code: 'MT',
  label: 'Malta',
  phone: '356'
}, {
  code: 'MU',
  label: 'Mauritius',
  phone: '230'
}, {
  code: 'MV',
  label: 'Maldives',
  phone: '960'
}, {
  code: 'MW',
  label: 'Malawi',
  phone: '265'
}, {
  code: 'MX',
  label: 'Mexico',
  phone: '52'
}, {
  code: 'MY',
  label: 'Malaysia',
  phone: '60'
}, {
  code: 'MZ',
  label: 'Mozambique',
  phone: '258'
}, {
  code: 'NA',
  label: 'Namibia',
  phone: '264'
}, {
  code: 'NC',
  label: 'New Caledonia',
  phone: '687'
}, {
  code: 'NE',
  label: 'Niger',
  phone: '227'
}, {
  code: 'NF',
  label: 'Norfolk Island',
  phone: '672'
}, {
  code: 'NG',
  label: 'Nigeria',
  phone: '234'
}, {
  code: 'NI',
  label: 'Nicaragua',
  phone: '505'
}, {
  code: 'NL',
  label: 'Netherlands',
  phone: '31'
}, {
  code: 'NO',
  label: 'Norway',
  phone: '47'
}, {
  code: 'NP',
  label: 'Nepal',
  phone: '977'
}, {
  code: 'NR',
  label: 'Nauru',
  phone: '674'
}, {
  code: 'NU',
  label: 'Niue',
  phone: '683'
}, {
  code: 'NZ',
  label: 'New Zealand',
  phone: '64'
}, {
  code: 'OM',
  label: 'Oman',
  phone: '968'
}, {
  code: 'PA',
  label: 'Panama',
  phone: '507'
}, {
  code: 'PE',
  label: 'Peru',
  phone: '51'
}, {
  code: 'PF',
  label: 'French Polynesia',
  phone: '689'
}, {
  code: 'PG',
  label: 'Papua New Guinea',
  phone: '675'
}, {
  code: 'PH',
  label: 'Philippines',
  phone: '63'
}, {
  code: 'PK',
  label: 'Pakistan',
  phone: '92'
}, {
  code: 'PL',
  label: 'Poland',
  phone: '48'
}, {
  code: 'PM',
  label: 'Saint Pierre and Miquelon',
  phone: '508'
}, {
  code: 'PN',
  label: 'Pitcairn',
  phone: '870'
}, {
  code: 'PR',
  label: 'Puerto Rico',
  phone: '1'
}, {
  code: 'PS',
  label: 'Palestine, State of',
  phone: '970'
}, {
  code: 'PT',
  label: 'Portugal',
  phone: '351'
}, {
  code: 'PW',
  label: 'Palau',
  phone: '680'
}, {
  code: 'PY',
  label: 'Paraguay',
  phone: '595'
}, {
  code: 'QA',
  label: 'Qatar',
  phone: '974'
}, {
  code: 'RE',
  label: 'Reunion',
  phone: '262'
}, {
  code: 'RO',
  label: 'Romania',
  phone: '40'
}, {
  code: 'RS',
  label: 'Serbia',
  phone: '381'
}, {
  code: 'RU',
  label: 'Russian Federation',
  phone: '7'
}, {
  code: 'RW',
  label: 'Rwanda',
  phone: '250'
}, {
  code: 'SA',
  label: 'Saudi Arabia',
  phone: '966'
}, {
  code: 'SB',
  label: 'Solomon Islands',
  phone: '677'
}, {
  code: 'SC',
  label: 'Seychelles',
  phone: '248'
}, {
  code: 'SD',
  label: 'Sudan',
  phone: '249'
}, {
  code: 'SE',
  label: 'Sweden',
  phone: '46'
}, {
  code: 'SG',
  label: 'Singapore',
  phone: '65'
}, {
  code: 'SH',
  label: 'Saint Helena',
  phone: '290'
}, {
  code: 'SI',
  label: 'Slovenia',
  phone: '386'
}, {
  code: 'SJ',
  label: 'Svalbard and Jan Mayen',
  phone: '47'
}, {
  code: 'SK',
  label: 'Slovakia',
  phone: '421'
}, {
  code: 'SL',
  label: 'Sierra Leone',
  phone: '232'
}, {
  code: 'SM',
  label: 'San Marino',
  phone: '378'
}, {
  code: 'SN',
  label: 'Senegal',
  phone: '221'
}, {
  code: 'SO',
  label: 'Somalia',
  phone: '252'
}, {
  code: 'SR',
  label: 'Suriname',
  phone: '597'
}, {
  code: 'SS',
  label: 'South Sudan',
  phone: '211'
}, {
  code: 'ST',
  label: 'Sao Tome and Principe',
  phone: '239'
}, {
  code: 'SV',
  label: 'El Salvador',
  phone: '503'
}, {
  code: 'SX',
  label: 'Sint Maarten (Dutch part)',
  phone: '1-721'
}, {
  code: 'SY',
  label: 'Syrian Arab Republic',
  phone: '963'
}, {
  code: 'SZ',
  label: 'Swaziland',
  phone: '268'
}, {
  code: 'TC',
  label: 'Turks and Caicos Islands',
  phone: '1-649'
}, {
  code: 'TD',
  label: 'Chad',
  phone: '235'
}, {
  code: 'TF',
  label: 'French Southern Territories',
  phone: '262'
}, {
  code: 'TG',
  label: 'Togo',
  phone: '228'
}, {
  code: 'TH',
  label: 'Thailand',
  phone: '66'
}, {
  code: 'TJ',
  label: 'Tajikistan',
  phone: '992'
}, {
  code: 'TK',
  label: 'Tokelau',
  phone: '690'
}, {
  code: 'TL',
  label: 'Timor-Leste',
  phone: '670'
}, {
  code: 'TM',
  label: 'Turkmenistan',
  phone: '993'
}, {
  code: 'TN',
  label: 'Tunisia',
  phone: '216'
}, {
  code: 'TO',
  label: 'Tonga',
  phone: '676'
}, {
  code: 'TR',
  label: 'Turkey',
  phone: '90'
}, {
  code: 'TT',
  label: 'Trinidad and Tobago',
  phone: '1-868'
}, {
  code: 'TV',
  label: 'Tuvalu',
  phone: '688'
}, {
  code: 'TW',
  label: 'Taiwan, Province of China',
  phone: '886'
}, {
  code: 'TZ',
  label: 'United Republic of Tanzania',
  phone: '255'
}, {
  code: 'UA',
  label: 'Ukraine',
  phone: '380'
}, {
  code: 'UG',
  label: 'Uganda',
  phone: '256'
}, {
  code: 'US',
  label: 'United States',
  phone: '1',
  suggested: true
}, {
  code: 'UY',
  label: 'Uruguay',
  phone: '598'
}, {
  code: 'UZ',
  label: 'Uzbekistan',
  phone: '998'
}, {
  code: 'VA',
  label: 'Holy See (Vatican City State)',
  phone: '379'
}, {
  code: 'VC',
  label: 'Saint Vincent and the Grenadines',
  phone: '1-784'
}, {
  code: 'VE',
  label: 'Venezuela',
  phone: '58'
}, {
  code: 'VG',
  label: 'British Virgin Islands',
  phone: '1-284'
}, {
  code: 'VI',
  label: 'US Virgin Islands',
  phone: '1-340'
}, {
  code: 'VN',
  label: 'Vietnam',
  phone: '84'
}, {
  code: 'VU',
  label: 'Vanuatu',
  phone: '678'
}, {
  code: 'WF',
  label: 'Wallis and Futuna',
  phone: '681'
}, {
  code: 'WS',
  label: 'Samoa',
  phone: '685'
}, {
  code: 'XK',
  label: 'Kosovo',
  phone: '383'
}, {
  code: 'YE',
  label: 'Yemen',
  phone: '967'
}, {
  code: 'YT',
  label: 'Mayotte',
  phone: '262'
}, {
  code: 'ZA',
  label: 'South Africa',
  phone: '27'
}, {
  code: 'ZM',
  label: 'Zambia',
  phone: '260'
}, {
  code: 'ZW',
  label: 'Zimbabwe',
  phone: '263'
}];

/***/ }),

/***/ "./src/countries/index.ts":
/*!********************************!*\
  !*** ./src/countries/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Country": () => /* reexport safe */ _countries__WEBPACK_IMPORTED_MODULE_0__.Country,
/* harmony export */   "countries": () => /* reexport safe */ _countries__WEBPACK_IMPORTED_MODULE_0__.countries,
/* harmony export */   "CallingCode": () => /* reexport safe */ _calling_code__WEBPACK_IMPORTED_MODULE_1__.CallingCode,
/* harmony export */   "callingCodes": () => /* reexport safe */ _calling_code__WEBPACK_IMPORTED_MODULE_1__.callingCodes
/* harmony export */ });
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries */ "./src/countries/countries.ts");
/* harmony import */ var _calling_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calling-code */ "./src/countries/calling-code.ts");




/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timezones": () => /* reexport safe */ _time__WEBPACK_IMPORTED_MODULE_0__.timezones,
/* harmony export */   "Timezone": () => /* reexport safe */ _time__WEBPACK_IMPORTED_MODULE_0__.Timezone,
/* harmony export */   "Locale": () => /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.Locale,
/* harmony export */   "locales": () => /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.locales,
/* harmony export */   "CallingCode": () => /* reexport safe */ _countries__WEBPACK_IMPORTED_MODULE_2__.CallingCode,
/* harmony export */   "callingCodes": () => /* reexport safe */ _countries__WEBPACK_IMPORTED_MODULE_2__.callingCodes,
/* harmony export */   "Country": () => /* reexport safe */ _countries__WEBPACK_IMPORTED_MODULE_2__.Country,
/* harmony export */   "countries": () => /* reexport safe */ _countries__WEBPACK_IMPORTED_MODULE_2__.countries
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./src/time/index.ts");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./src/locales/index.ts");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries */ "./src/countries/index.ts");





/***/ }),

/***/ "./src/locales/data.ts":
/*!*****************************!*\
  !*** ./src/locales/data.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCALES": () => /* binding */ LOCALES
/* harmony export */ });
var LOCALES = [{
  locale: 'af',
  name: 'Afrikaans'
}, {
  locale: 'af_NA',
  name: 'Afrikaans (Namibia)'
}, {
  locale: 'af_ZA',
  name: 'Afrikaans (South Africa)'
}, {
  locale: 'ak',
  name: 'Akan'
}, {
  locale: 'ak_GH',
  name: 'Akan (Ghana)'
}, {
  locale: 'sq',
  name: 'Albanian'
}, {
  locale: 'sq_AL',
  name: 'Albanian (Albania)'
}, {
  locale: 'sq_XK',
  name: 'Albanian (Kosovo)'
}, {
  locale: 'sq_MK',
  name: 'Albanian (Macedonia)'
}, {
  locale: 'am',
  name: 'Amharic'
}, {
  locale: 'am_ET',
  name: 'Amharic (Ethiopia)'
}, {
  locale: 'ar',
  name: 'Arabic'
}, {
  locale: 'ar_DZ',
  name: 'Arabic (Algeria)'
}, {
  locale: 'ar_BH',
  name: 'Arabic (Bahrain)'
}, {
  locale: 'ar_TD',
  name: 'Arabic (Chad)'
}, {
  locale: 'ar_KM',
  name: 'Arabic (Comoros)'
}, {
  locale: 'ar_DJ',
  name: 'Arabic (Djibouti)'
}, {
  locale: 'ar_EG',
  name: 'Arabic (Egypt)'
}, {
  locale: 'ar_ER',
  name: 'Arabic (Eritrea)'
}, {
  locale: 'ar_IQ',
  name: 'Arabic (Iraq)'
}, {
  locale: 'ar_IL',
  name: 'Arabic (Israel)'
}, {
  locale: 'ar_JO',
  name: 'Arabic (Jordan)'
}, {
  locale: 'ar_KW',
  name: 'Arabic (Kuwait)'
}, {
  locale: 'ar_LB',
  name: 'Arabic (Lebanon)'
}, {
  locale: 'ar_LY',
  name: 'Arabic (Libya)'
}, {
  locale: 'ar_MR',
  name: 'Arabic (Mauritania)'
}, {
  locale: 'ar_MA',
  name: 'Arabic (Morocco)'
}, {
  locale: 'ar_OM',
  name: 'Arabic (Oman)'
}, {
  locale: 'ar_PS',
  name: 'Arabic (Palestinian Territories)'
}, {
  locale: 'ar_QA',
  name: 'Arabic (Qatar)'
}, {
  locale: 'ar_SA',
  name: 'Arabic (Saudi Arabia)'
}, {
  locale: 'ar_SO',
  name: 'Arabic (Somalia)'
}, {
  locale: 'ar_SS',
  name: 'Arabic (South Sudan)'
}, {
  locale: 'ar_SD',
  name: 'Arabic (Sudan)'
}, {
  locale: 'ar_SY',
  name: 'Arabic (Syria)'
}, {
  locale: 'ar_TN',
  name: 'Arabic (Tunisia)'
}, {
  locale: 'ar_AE',
  name: 'Arabic (United Arab Emirates)'
}, {
  locale: 'ar_EH',
  name: 'Arabic (Western Sahara)'
}, {
  locale: 'ar_YE',
  name: 'Arabic (Yemen)'
}, {
  locale: 'hy',
  name: 'Armenian'
}, {
  locale: 'hy_AM',
  name: 'Armenian (Armenia)'
}, {
  locale: 'as',
  name: 'Assamese'
}, {
  locale: 'as_IN',
  name: 'Assamese (India)'
}, {
  locale: 'az',
  name: 'Azerbaijani'
}, {
  locale: 'az_AZ',
  name: 'Azerbaijani (Azerbaijan)'
}, {
  locale: 'az_Cyrl_AZ',
  name: 'Azerbaijani (Cyrillic, Azerbaijan)'
}, {
  locale: 'az_Cyrl',
  name: 'Azerbaijani (Cyrillic)'
}, {
  locale: 'az_Latn_AZ',
  name: 'Azerbaijani (Latin, Azerbaijan)'
}, {
  locale: 'az_Latn',
  name: 'Azerbaijani (Latin)'
}, {
  locale: 'bm',
  name: 'Bambara'
}, {
  locale: 'bm_Latn_ML',
  name: 'Bambara (Latin, Mali)'
}, {
  locale: 'bm_Latn',
  name: 'Bambara (Latin)'
}, {
  locale: 'eu',
  name: 'Basque'
}, {
  locale: 'eu_ES',
  name: 'Basque (Spain)'
}, {
  locale: 'be',
  name: 'Belarusian'
}, {
  locale: 'be_BY',
  name: 'Belarusian (Belarus)'
}, {
  locale: 'bn',
  name: 'Bengali'
}, {
  locale: 'bn_BD',
  name: 'Bengali (Bangladesh)'
}, {
  locale: 'bn_IN',
  name: 'Bengali (India)'
}, {
  locale: 'bs',
  name: 'Bosnian'
}, {
  locale: 'bs_BA',
  name: 'Bosnian (Bosnia & Herzegovina)'
}, {
  locale: 'bs_Cyrl_BA',
  name: 'Bosnian (Cyrillic, Bosnia & Herzegovina)'
}, {
  locale: 'bs_Cyrl',
  name: 'Bosnian (Cyrillic)'
}, {
  locale: 'bs_Latn_BA',
  name: 'Bosnian (Latin, Bosnia & Herzegovina)'
}, {
  locale: 'bs_Latn',
  name: 'Bosnian (Latin)'
}, {
  locale: 'br',
  name: 'Breton'
}, {
  locale: 'br_FR',
  name: 'Breton (France)'
}, {
  locale: 'bg',
  name: 'Bulgarian'
}, {
  locale: 'bg_BG',
  name: 'Bulgarian (Bulgaria)'
}, {
  locale: 'my',
  name: 'Burmese'
}, {
  locale: 'my_MM',
  name: 'Burmese (Myanmar (Burma))'
}, {
  locale: 'ca',
  name: 'Catalan'
}, {
  locale: 'ca_AD',
  name: 'Catalan (Andorra)'
}, {
  locale: 'ca_FR',
  name: 'Catalan (France)'
}, {
  locale: 'ca_IT',
  name: 'Catalan (Italy)'
}, {
  locale: 'ca_ES',
  name: 'Catalan (Spain)'
}, {
  locale: 'zh',
  name: 'Chinese'
}, {
  locale: 'zh_CN',
  name: 'Chinese (China)'
}, {
  locale: 'zh_HK',
  name: 'Chinese (Hong Kong SAR China)'
}, {
  locale: 'zh_MO',
  name: 'Chinese (Macau SAR China)'
}, {
  locale: 'zh_Hans_CN',
  name: 'Chinese (Simplified, China)'
}, {
  locale: 'zh_Hans_HK',
  name: 'Chinese (Simplified, Hong Kong SAR China)'
}, {
  locale: 'zh_Hans_MO',
  name: 'Chinese (Simplified, Macau SAR China)'
}, {
  locale: 'zh_Hans_SG',
  name: 'Chinese (Simplified, Singapore)'
}, {
  locale: 'zh_Hans',
  name: 'Chinese (Simplified)'
}, {
  locale: 'zh_SG',
  name: 'Chinese (Singapore)'
}, {
  locale: 'zh_TW',
  name: 'Chinese (Taiwan)'
}, {
  locale: 'zh_Hant_HK',
  name: 'Chinese (Traditional, Hong Kong SAR China)'
}, {
  locale: 'zh_Hant_MO',
  name: 'Chinese (Traditional, Macau SAR China)'
}, {
  locale: 'zh_Hant_TW',
  name: 'Chinese (Traditional, Taiwan)'
}, {
  locale: 'zh_Hant',
  name: 'Chinese (Traditional)'
}, {
  locale: 'kw',
  name: 'Cornish'
}, {
  locale: 'kw_GB',
  name: 'Cornish (United Kingdom)'
}, {
  locale: 'hr',
  name: 'Croatian'
}, {
  locale: 'hr_BA',
  name: 'Croatian (Bosnia & Herzegovina)'
}, {
  locale: 'hr_HR',
  name: 'Croatian (Croatia)'
}, {
  locale: 'cs',
  name: 'Czech'
}, {
  locale: 'cs_CZ',
  name: 'Czech (Czech Republic)'
}, {
  locale: 'da',
  name: 'Danish'
}, {
  locale: 'da_DK',
  name: 'Danish (Denmark)'
}, {
  locale: 'da_GL',
  name: 'Danish (Greenland)'
}, {
  locale: 'nl',
  name: 'Dutch'
}, {
  locale: 'nl_AW',
  name: 'Dutch (Aruba)'
}, {
  locale: 'nl_BE',
  name: 'Dutch (Belgium)'
}, {
  locale: 'nl_BQ',
  name: 'Dutch (Caribbean Netherlands)'
}, {
  locale: 'nl_CW',
  name: "Dutch (Cura\xE7ao)"
}, {
  locale: 'nl_NL',
  name: 'Dutch (Netherlands)'
}, {
  locale: 'nl_SX',
  name: 'Dutch (Sint Maarten)'
}, {
  locale: 'nl_SR',
  name: 'Dutch (Suriname)'
}, {
  locale: 'dz',
  name: 'Dzongkha'
}, {
  locale: 'dz_BT',
  name: 'Dzongkha (Bhutan)'
}, {
  locale: 'en',
  name: 'English'
}, {
  locale: 'en_AS',
  name: 'English (American Samoa)'
}, {
  locale: 'en_AI',
  name: 'English (Anguilla)'
}, {
  locale: 'en_AG',
  name: 'English (Antigua & Barbuda)'
}, {
  locale: 'en_AU',
  name: 'English (Australia)'
}, {
  locale: 'en_BS',
  name: 'English (Bahamas)'
}, {
  locale: 'en_BB',
  name: 'English (Barbados)'
}, {
  locale: 'en_BE',
  name: 'English (Belgium)'
}, {
  locale: 'en_BZ',
  name: 'English (Belize)'
}, {
  locale: 'en_BM',
  name: 'English (Bermuda)'
}, {
  locale: 'en_BW',
  name: 'English (Botswana)'
}, {
  locale: 'en_IO',
  name: 'English (British Indian Ocean Territory)'
}, {
  locale: 'en_VG',
  name: 'English (British Virgin Islands)'
}, {
  locale: 'en_CM',
  name: 'English (Cameroon)'
}, {
  locale: 'en_CA',
  name: 'English (Canada)'
}, {
  locale: 'en_KY',
  name: 'English (Cayman Islands)'
}, {
  locale: 'en_CX',
  name: 'English (Christmas Island)'
}, {
  locale: 'en_CC',
  name: 'English (Cocos (Keeling) Islands)'
}, {
  locale: 'en_CK',
  name: 'English (Cook Islands)'
}, {
  locale: 'en_DG',
  name: 'English (Diego Garcia)'
}, {
  locale: 'en_DM',
  name: 'English (Dominica)'
}, {
  locale: 'en_ER',
  name: 'English (Eritrea)'
}, {
  locale: 'en_FK',
  name: 'English (Falkland Islands)'
}, {
  locale: 'en_FJ',
  name: 'English (Fiji)'
}, {
  locale: 'en_GM',
  name: 'English (Gambia)'
}, {
  locale: 'en_GH',
  name: 'English (Ghana)'
}, {
  locale: 'en_GI',
  name: 'English (Gibraltar)'
}, {
  locale: 'en_GD',
  name: 'English (Grenada)'
}, {
  locale: 'en_GU',
  name: 'English (Guam)'
}, {
  locale: 'en_GG',
  name: 'English (Guernsey)'
}, {
  locale: 'en_GY',
  name: 'English (Guyana)'
}, {
  locale: 'en_HK',
  name: 'English (Hong Kong SAR China)'
}, {
  locale: 'en_IN',
  name: 'English (India)'
}, {
  locale: 'en_IE',
  name: 'English (Ireland)'
}, {
  locale: 'en_IM',
  name: 'English (Isle of Man)'
}, {
  locale: 'en_JM',
  name: 'English (Jamaica)'
}, {
  locale: 'en_JE',
  name: 'English (Jersey)'
}, {
  locale: 'en_KE',
  name: 'English (Kenya)'
}, {
  locale: 'en_KI',
  name: 'English (Kiribati)'
}, {
  locale: 'en_LS',
  name: 'English (Lesotho)'
}, {
  locale: 'en_LR',
  name: 'English (Liberia)'
}, {
  locale: 'en_MO',
  name: 'English (Macau SAR China)'
}, {
  locale: 'en_MG',
  name: 'English (Madagascar)'
}, {
  locale: 'en_MW',
  name: 'English (Malawi)'
}, {
  locale: 'en_MY',
  name: 'English (Malaysia)'
}, {
  locale: 'en_MT',
  name: 'English (Malta)'
}, {
  locale: 'en_MH',
  name: 'English (Marshall Islands)'
}, {
  locale: 'en_MU',
  name: 'English (Mauritius)'
}, {
  locale: 'en_FM',
  name: 'English (Micronesia)'
}, {
  locale: 'en_MS',
  name: 'English (Montserrat)'
}, {
  locale: 'en_NA',
  name: 'English (Namibia)'
}, {
  locale: 'en_NR',
  name: 'English (Nauru)'
}, {
  locale: 'en_NZ',
  name: 'English (New Zealand)'
}, {
  locale: 'en_NG',
  name: 'English (Nigeria)'
}, {
  locale: 'en_NU',
  name: 'English (Niue)'
}, {
  locale: 'en_NF',
  name: 'English (Norfolk Island)'
}, {
  locale: 'en_MP',
  name: 'English (Northern Mariana Islands)'
}, {
  locale: 'en_PK',
  name: 'English (Pakistan)'
}, {
  locale: 'en_PW',
  name: 'English (Palau)'
}, {
  locale: 'en_PG',
  name: 'English (Papua New Guinea)'
}, {
  locale: 'en_PH',
  name: 'English (Philippines)'
}, {
  locale: 'en_PN',
  name: 'English (Pitcairn Islands)'
}, {
  locale: 'en_PR',
  name: 'English (Puerto Rico)'
}, {
  locale: 'en_RW',
  name: 'English (Rwanda)'
}, {
  locale: 'en_WS',
  name: 'English (Samoa)'
}, {
  locale: 'en_SC',
  name: 'English (Seychelles)'
}, {
  locale: 'en_SL',
  name: 'English (Sierra Leone)'
}, {
  locale: 'en_SG',
  name: 'English (Singapore)'
}, {
  locale: 'en_SX',
  name: 'English (Sint Maarten)'
}, {
  locale: 'en_SB',
  name: 'English (Solomon Islands)'
}, {
  locale: 'en_ZA',
  name: 'English (South Africa)'
}, {
  locale: 'en_SS',
  name: 'English (South Sudan)'
}, {
  locale: 'en_SH',
  name: 'English (St. Helena)'
}, {
  locale: 'en_KN',
  name: 'English (St. Kitts & Nevis)'
}, {
  locale: 'en_LC',
  name: 'English (St. Lucia)'
}, {
  locale: 'en_VC',
  name: 'English (St. Vincent & Grenadines)'
}, {
  locale: 'en_SD',
  name: 'English (Sudan)'
}, {
  locale: 'en_SZ',
  name: 'English (Swaziland)'
}, {
  locale: 'en_TZ',
  name: 'English (Tanzania)'
}, {
  locale: 'en_TK',
  name: 'English (Tokelau)'
}, {
  locale: 'en_TO',
  name: 'English (Tonga)'
}, {
  locale: 'en_TT',
  name: 'English (Trinidad & Tobago)'
}, {
  locale: 'en_TC',
  name: 'English (Turks & Caicos Islands)'
}, {
  locale: 'en_TV',
  name: 'English (Tuvalu)'
}, {
  locale: 'en_UM',
  name: 'English (U.S. Outlying Islands)'
}, {
  locale: 'en_VI',
  name: 'English (U.S. Virgin Islands)'
}, {
  locale: 'en_UG',
  name: 'English (Uganda)'
}, {
  locale: 'en_GB',
  name: 'English (United Kingdom)'
}, {
  locale: 'en_US',
  name: 'English (United States)'
}, {
  locale: 'en_VU',
  name: 'English (Vanuatu)'
}, {
  locale: 'en_ZM',
  name: 'English (Zambia)'
}, {
  locale: 'en_ZW',
  name: 'English (Zimbabwe)'
}, {
  locale: 'eo',
  name: 'Esperanto'
}, {
  locale: 'et',
  name: 'Estonian'
}, {
  locale: 'et_EE',
  name: 'Estonian (Estonia)'
}, {
  locale: 'ee',
  name: 'Ewe'
}, {
  locale: 'ee_GH',
  name: 'Ewe (Ghana)'
}, {
  locale: 'ee_TG',
  name: 'Ewe (Togo)'
}, {
  locale: 'fo',
  name: 'Faroese'
}, {
  locale: 'fo_FO',
  name: 'Faroese (Faroe Islands)'
}, {
  locale: 'fi',
  name: 'Finnish'
}, {
  locale: 'fi_FI',
  name: 'Finnish (Finland)'
}, {
  locale: 'fr',
  name: 'French'
}, {
  locale: 'fr_DZ',
  name: 'French (Algeria)'
}, {
  locale: 'fr_BE',
  name: 'French (Belgium)'
}, {
  locale: 'fr_BJ',
  name: 'French (Benin)'
}, {
  locale: 'fr_BF',
  name: 'French (Burkina Faso)'
}, {
  locale: 'fr_BI',
  name: 'French (Burundi)'
}, {
  locale: 'fr_CM',
  name: 'French (Cameroon)'
}, {
  locale: 'fr_CA',
  name: 'French (Canada)'
}, {
  locale: 'fr_CF',
  name: 'French (Central African Republic)'
}, {
  locale: 'fr_TD',
  name: 'French (Chad)'
}, {
  locale: 'fr_KM',
  name: 'French (Comoros)'
}, {
  locale: 'fr_CG',
  name: 'French (Congo - Brazzaville)'
}, {
  locale: 'fr_CD',
  name: 'French (Congo - Kinshasa)'
}, {
  locale: 'fr_CI',
  name: "French (C\xF4te d\u2019Ivoire)"
}, {
  locale: 'fr_DJ',
  name: 'French (Djibouti)'
}, {
  locale: 'fr_GQ',
  name: 'French (Equatorial Guinea)'
}, {
  locale: 'fr_FR',
  name: 'French (France)'
}, {
  locale: 'fr_GF',
  name: 'French (French Guiana)'
}, {
  locale: 'fr_PF',
  name: 'French (French Polynesia)'
}, {
  locale: 'fr_GA',
  name: 'French (Gabon)'
}, {
  locale: 'fr_GP',
  name: 'French (Guadeloupe)'
}, {
  locale: 'fr_GN',
  name: 'French (Guinea)'
}, {
  locale: 'fr_HT',
  name: 'French (Haiti)'
}, {
  locale: 'fr_LU',
  name: 'French (Luxembourg)'
}, {
  locale: 'fr_MG',
  name: 'French (Madagascar)'
}, {
  locale: 'fr_ML',
  name: 'French (Mali)'
}, {
  locale: 'fr_MQ',
  name: 'French (Martinique)'
}, {
  locale: 'fr_MR',
  name: 'French (Mauritania)'
}, {
  locale: 'fr_MU',
  name: 'French (Mauritius)'
}, {
  locale: 'fr_YT',
  name: 'French (Mayotte)'
}, {
  locale: 'fr_MC',
  name: 'French (Monaco)'
}, {
  locale: 'fr_MA',
  name: 'French (Morocco)'
}, {
  locale: 'fr_NC',
  name: 'French (New Caledonia)'
}, {
  locale: 'fr_NE',
  name: 'French (Niger)'
}, {
  locale: 'fr_RE',
  name: "French (R\xE9union)"
}, {
  locale: 'fr_RW',
  name: 'French (Rwanda)'
}, {
  locale: 'fr_SN',
  name: 'French (Senegal)'
}, {
  locale: 'fr_SC',
  name: 'French (Seychelles)'
}, {
  locale: 'fr_BL',
  name: "French (St. Barth\xE9lemy)"
}, {
  locale: 'fr_MF',
  name: 'French (St. Martin)'
}, {
  locale: 'fr_PM',
  name: 'French (St. Pierre & Miquelon)'
}, {
  locale: 'fr_CH',
  name: 'French (Switzerland)'
}, {
  locale: 'fr_SY',
  name: 'French (Syria)'
}, {
  locale: 'fr_TG',
  name: 'French (Togo)'
}, {
  locale: 'fr_TN',
  name: 'French (Tunisia)'
}, {
  locale: 'fr_VU',
  name: 'French (Vanuatu)'
}, {
  locale: 'fr_WF',
  name: 'French (Wallis & Futuna)'
}, {
  locale: 'ff',
  name: 'Fulah'
}, {
  locale: 'ff_CM',
  name: 'Fulah (Cameroon)'
}, {
  locale: 'ff_GN',
  name: 'Fulah (Guinea)'
}, {
  locale: 'ff_MR',
  name: 'Fulah (Mauritania)'
}, {
  locale: 'ff_SN',
  name: 'Fulah (Senegal)'
}, {
  locale: 'gl',
  name: 'Galician'
}, {
  locale: 'gl_ES',
  name: 'Galician (Spain)'
}, {
  locale: 'lg',
  name: 'Ganda'
}, {
  locale: 'lg_UG',
  name: 'Ganda (Uganda)'
}, {
  locale: 'ka',
  name: 'Georgian'
}, {
  locale: 'ka_GE',
  name: 'Georgian (Georgia)'
}, {
  locale: 'de',
  name: 'German'
}, {
  locale: 'de_AT',
  name: 'German (Austria)'
}, {
  locale: 'de_BE',
  name: 'German (Belgium)'
}, {
  locale: 'de_DE',
  name: 'German (Germany)'
}, {
  locale: 'de_LI',
  name: 'German (Liechtenstein)'
}, {
  locale: 'de_LU',
  name: 'German (Luxembourg)'
}, {
  locale: 'de_CH',
  name: 'German (Switzerland)'
}, {
  locale: 'el',
  name: 'Greek'
}, {
  locale: 'el_CY',
  name: 'Greek (Cyprus)'
}, {
  locale: 'el_GR',
  name: 'Greek (Greece)'
}, {
  locale: 'gu',
  name: 'Gujarati'
}, {
  locale: 'gu_IN',
  name: 'Gujarati (India)'
}, {
  locale: 'ha',
  name: 'Hausa'
}, {
  locale: 'ha_GH',
  name: 'Hausa (Ghana)'
}, {
  locale: 'ha_Latn_GH',
  name: 'Hausa (Latin, Ghana)'
}, {
  locale: 'ha_Latn_NE',
  name: 'Hausa (Latin, Niger)'
}, {
  locale: 'ha_Latn_NG',
  name: 'Hausa (Latin, Nigeria)'
}, {
  locale: 'ha_Latn',
  name: 'Hausa (Latin)'
}, {
  locale: 'ha_NE',
  name: 'Hausa (Niger)'
}, {
  locale: 'ha_NG',
  name: 'Hausa (Nigeria)'
}, {
  locale: 'he',
  name: 'Hebrew'
}, {
  locale: 'he_IL',
  name: 'Hebrew (Israel)'
}, {
  locale: 'hi',
  name: 'Hindi'
}, {
  locale: 'hi_IN',
  name: 'Hindi (India)'
}, {
  locale: 'hu',
  name: 'Hungarian'
}, {
  locale: 'hu_HU',
  name: 'Hungarian (Hungary)'
}, {
  locale: 'is',
  name: 'Icelandic'
}, {
  locale: 'is_IS',
  name: 'Icelandic (Iceland)'
}, {
  locale: 'ig',
  name: 'Igbo'
}, {
  locale: 'ig_NG',
  name: 'Igbo (Nigeria)'
}, {
  locale: 'id',
  name: 'Indonesian'
}, {
  locale: 'id_ID',
  name: 'Indonesian (Indonesia)'
}, {
  locale: 'ga',
  name: 'Irish'
}, {
  locale: 'ga_IE',
  name: 'Irish (Ireland)'
}, {
  locale: 'it',
  name: 'Italian'
}, {
  locale: 'it_IT',
  name: 'Italian (Italy)'
}, {
  locale: 'it_SM',
  name: 'Italian (San Marino)'
}, {
  locale: 'it_CH',
  name: 'Italian (Switzerland)'
}, {
  locale: 'ja',
  name: 'Japanese'
}, {
  locale: 'ja_JP',
  name: 'Japanese (Japan)'
}, {
  locale: 'kl',
  name: 'Kalaallisut'
}, {
  locale: 'kl_GL',
  name: 'Kalaallisut (Greenland)'
}, {
  locale: 'kn',
  name: 'Kannada'
}, {
  locale: 'kn_IN',
  name: 'Kannada (India)'
}, {
  locale: 'ks',
  name: 'Kashmiri'
}, {
  locale: 'ks_Arab_IN',
  name: 'Kashmiri (Arabic, India)'
}, {
  locale: 'ks_Arab',
  name: 'Kashmiri (Arabic)'
}, {
  locale: 'ks_IN',
  name: 'Kashmiri (India)'
}, {
  locale: 'kk',
  name: 'Kazakh'
}, {
  locale: 'kk_Cyrl_KZ',
  name: 'Kazakh (Cyrillic, Kazakhstan)'
}, {
  locale: 'kk_Cyrl',
  name: 'Kazakh (Cyrillic)'
}, {
  locale: 'kk_KZ',
  name: 'Kazakh (Kazakhstan)'
}, {
  locale: 'km',
  name: 'Khmer'
}, {
  locale: 'km_KH',
  name: 'Khmer (Cambodia)'
}, {
  locale: 'ki',
  name: 'Kikuyu'
}, {
  locale: 'ki_KE',
  name: 'Kikuyu (Kenya)'
}, {
  locale: 'rw',
  name: 'Kinyarwanda'
}, {
  locale: 'rw_RW',
  name: 'Kinyarwanda (Rwanda)'
}, {
  locale: 'ko',
  name: 'Korean'
}, {
  locale: 'ko_KP',
  name: 'Korean (North Korea)'
}, {
  locale: 'ko_KR',
  name: 'Korean (South Korea)'
}, {
  locale: 'ky',
  name: 'Kyrgyz'
}, {
  locale: 'ky_Cyrl_KG',
  name: 'Kyrgyz (Cyrillic, Kyrgyzstan)'
}, {
  locale: 'ky_Cyrl',
  name: 'Kyrgyz (Cyrillic)'
}, {
  locale: 'ky_KG',
  name: 'Kyrgyz (Kyrgyzstan)'
}, {
  locale: 'lo',
  name: 'Lao'
}, {
  locale: 'lo_LA',
  name: 'Lao (Laos)'
}, {
  locale: 'lv',
  name: 'Latvian'
}, {
  locale: 'lv_LV',
  name: 'Latvian (Latvia)'
}, {
  locale: 'ln',
  name: 'Lingala'
}, {
  locale: 'ln_AO',
  name: 'Lingala (Angola)'
}, {
  locale: 'ln_CF',
  name: 'Lingala (Central African Republic)'
}, {
  locale: 'ln_CG',
  name: 'Lingala (Congo - Brazzaville)'
}, {
  locale: 'ln_CD',
  name: 'Lingala (Congo - Kinshasa)'
}, {
  locale: 'lt',
  name: 'Lithuanian'
}, {
  locale: 'lt_LT',
  name: 'Lithuanian (Lithuania)'
}, {
  locale: 'lu',
  name: 'Luba-Katanga'
}, {
  locale: 'lu_CD',
  name: 'Luba-Katanga (Congo - Kinshasa)'
}, {
  locale: 'lb',
  name: 'Luxembourgish'
}, {
  locale: 'lb_LU',
  name: 'Luxembourgish (Luxembourg)'
}, {
  locale: 'mk',
  name: 'Macedonian'
}, {
  locale: 'mk_MK',
  name: 'Macedonian (Macedonia)'
}, {
  locale: 'mg',
  name: 'Malagasy'
}, {
  locale: 'mg_MG',
  name: 'Malagasy (Madagascar)'
}, {
  locale: 'ms',
  name: 'Malay'
}, {
  locale: 'ms_BN',
  name: 'Malay (Brunei)'
}, {
  locale: 'ms_Latn_BN',
  name: 'Malay (Latin, Brunei)'
}, {
  locale: 'ms_Latn_MY',
  name: 'Malay (Latin, Malaysia)'
}, {
  locale: 'ms_Latn_SG',
  name: 'Malay (Latin, Singapore)'
}, {
  locale: 'ms_Latn',
  name: 'Malay (Latin)'
}, {
  locale: 'ms_MY',
  name: 'Malay (Malaysia)'
}, {
  locale: 'ms_SG',
  name: 'Malay (Singapore)'
}, {
  locale: 'ml',
  name: 'Malayalam'
}, {
  locale: 'ml_IN',
  name: 'Malayalam (India)'
}, {
  locale: 'mt',
  name: 'Maltese'
}, {
  locale: 'mt_MT',
  name: 'Maltese (Malta)'
}, {
  locale: 'gv',
  name: 'Manx'
}, {
  locale: 'gv_IM',
  name: 'Manx (Isle of Man)'
}, {
  locale: 'mr',
  name: 'Marathi'
}, {
  locale: 'mr_IN',
  name: 'Marathi (India)'
}, {
  locale: 'mn',
  name: 'Mongolian'
}, {
  locale: 'mn_Cyrl_MN',
  name: 'Mongolian (Cyrillic, Mongolia)'
}, {
  locale: 'mn_Cyrl',
  name: 'Mongolian (Cyrillic)'
}, {
  locale: 'mn_MN',
  name: 'Mongolian (Mongolia)'
}, {
  locale: 'ne',
  name: 'Nepali'
}, {
  locale: 'ne_IN',
  name: 'Nepali (India)'
}, {
  locale: 'ne_NP',
  name: 'Nepali (Nepal)'
}, {
  locale: 'nd',
  name: 'North Ndebele'
}, {
  locale: 'nd_ZW',
  name: 'North Ndebele (Zimbabwe)'
}, {
  locale: 'se',
  name: 'Northern Sami'
}, {
  locale: 'se_FI',
  name: 'Northern Sami (Finland)'
}, {
  locale: 'se_NO',
  name: 'Northern Sami (Norway)'
}, {
  locale: 'se_SE',
  name: 'Northern Sami (Sweden)'
}, {
  locale: 'no',
  name: 'Norwegian'
}, {
  locale: 'no_NO',
  name: 'Norwegian (Norway)'
}, {
  locale: 'nb',
  name: "Norwegian Bokm\xE5l"
}, {
  locale: 'nb_NO',
  name: "Norwegian Bokm\xE5l (Norway)"
}, {
  locale: 'nb_SJ',
  name: "Norwegian Bokm\xE5l (Svalbard & Jan Mayen)"
}, {
  locale: 'nn',
  name: 'Norwegian Nynorsk'
}, {
  locale: 'nn_NO',
  name: 'Norwegian Nynorsk (Norway)'
}, {
  locale: 'or',
  name: 'Oriya'
}, {
  locale: 'or_IN',
  name: 'Oriya (India)'
}, {
  locale: 'om',
  name: 'Oromo'
}, {
  locale: 'om_ET',
  name: 'Oromo (Ethiopia)'
}, {
  locale: 'om_KE',
  name: 'Oromo (Kenya)'
}, {
  locale: 'os',
  name: 'Ossetic'
}, {
  locale: 'os_GE',
  name: 'Ossetic (Georgia)'
}, {
  locale: 'os_RU',
  name: 'Ossetic (Russia)'
}, {
  locale: 'ps',
  name: 'Pashto'
}, {
  locale: 'ps_AF',
  name: 'Pashto (Afghanistan)'
}, {
  locale: 'fa',
  name: 'Persian'
}, {
  locale: 'fa_AF',
  name: 'Persian (Afghanistan)'
}, {
  locale: 'fa_IR',
  name: 'Persian (Iran)'
}, {
  locale: 'pl',
  name: 'Polish'
}, {
  locale: 'pl_PL',
  name: 'Polish (Poland)'
}, {
  locale: 'pt',
  name: 'Portuguese'
}, {
  locale: 'pt_AO',
  name: 'Portuguese (Angola)'
}, {
  locale: 'pt_BR',
  name: 'Portuguese (Brazil)'
}, {
  locale: 'pt_CV',
  name: 'Portuguese (Cape Verde)'
}, {
  locale: 'pt_GW',
  name: 'Portuguese (Guinea-Bissau)'
}, {
  locale: 'pt_MO',
  name: 'Portuguese (Macau SAR China)'
}, {
  locale: 'pt_MZ',
  name: 'Portuguese (Mozambique)'
}, {
  locale: 'pt_PT',
  name: 'Portuguese (Portugal)'
}, {
  locale: 'pt_ST',
  name: "Portuguese (S\xE3o Tom\xE9 & Pr\xEDncipe)"
}, {
  locale: 'pt_TL',
  name: 'Portuguese (Timor-Leste)'
}, {
  locale: 'pa',
  name: 'Punjabi'
}, {
  locale: 'pa_Arab_PK',
  name: 'Punjabi (Arabic, Pakistan)'
}, {
  locale: 'pa_Arab',
  name: 'Punjabi (Arabic)'
}, {
  locale: 'pa_Guru_IN',
  name: 'Punjabi (Gurmukhi, India)'
}, {
  locale: 'pa_Guru',
  name: 'Punjabi (Gurmukhi)'
}, {
  locale: 'pa_IN',
  name: 'Punjabi (India)'
}, {
  locale: 'pa_PK',
  name: 'Punjabi (Pakistan)'
}, {
  locale: 'qu',
  name: 'Quechua'
}, {
  locale: 'qu_BO',
  name: 'Quechua (Bolivia)'
}, {
  locale: 'qu_EC',
  name: 'Quechua (Ecuador)'
}, {
  locale: 'qu_PE',
  name: 'Quechua (Peru)'
}, {
  locale: 'ro',
  name: 'Romanian'
}, {
  locale: 'ro_MD',
  name: 'Romanian (Moldova)'
}, {
  locale: 'ro_RO',
  name: 'Romanian (Romania)'
}, {
  locale: 'rm',
  name: 'Romansh'
}, {
  locale: 'rm_CH',
  name: 'Romansh (Switzerland)'
}, {
  locale: 'rn',
  name: 'Rundi'
}, {
  locale: 'rn_BI',
  name: 'Rundi (Burundi)'
}, {
  locale: 'ru',
  name: 'Russian'
}, {
  locale: 'ru_BY',
  name: 'Russian (Belarus)'
}, {
  locale: 'ru_KZ',
  name: 'Russian (Kazakhstan)'
}, {
  locale: 'ru_KG',
  name: 'Russian (Kyrgyzstan)'
}, {
  locale: 'ru_MD',
  name: 'Russian (Moldova)'
}, {
  locale: 'ru_RU',
  name: 'Russian (Russia)'
}, {
  locale: 'ru_UA',
  name: 'Russian (Ukraine)'
}, {
  locale: 'sg',
  name: 'Sango'
}, {
  locale: 'sg_CF',
  name: 'Sango (Central African Republic)'
}, {
  locale: 'gd',
  name: 'Scottish Gaelic'
}, {
  locale: 'gd_GB',
  name: 'Scottish Gaelic (United Kingdom)'
}, {
  locale: 'sr',
  name: 'Serbian'
}, {
  locale: 'sr_BA',
  name: 'Serbian (Bosnia & Herzegovina)'
}, {
  locale: 'sr_Cyrl_BA',
  name: 'Serbian (Cyrillic, Bosnia & Herzegovina)'
}, {
  locale: 'sr_Cyrl_XK',
  name: 'Serbian (Cyrillic, Kosovo)'
}, {
  locale: 'sr_Cyrl_ME',
  name: 'Serbian (Cyrillic, Montenegro)'
}, {
  locale: 'sr_Cyrl_RS',
  name: 'Serbian (Cyrillic, Serbia)'
}, {
  locale: 'sr_Cyrl',
  name: 'Serbian (Cyrillic)'
}, {
  locale: 'sr_XK',
  name: 'Serbian (Kosovo)'
}, {
  locale: 'sr_Latn_BA',
  name: 'Serbian (Latin, Bosnia & Herzegovina)'
}, {
  locale: 'sr_Latn_XK',
  name: 'Serbian (Latin, Kosovo)'
}, {
  locale: 'sr_Latn_ME',
  name: 'Serbian (Latin, Montenegro)'
}, {
  locale: 'sr_Latn_RS',
  name: 'Serbian (Latin, Serbia)'
}, {
  locale: 'sr_Latn',
  name: 'Serbian (Latin)'
}, {
  locale: 'sr_ME',
  name: 'Serbian (Montenegro)'
}, {
  locale: 'sr_RS',
  name: 'Serbian (Serbia)'
}, {
  locale: 'sh',
  name: 'Serbo-Croatian'
}, {
  locale: 'sh_BA',
  name: 'Serbo-Croatian (Bosnia & Herzegovina)'
}, {
  locale: 'sn',
  name: 'Shona'
}, {
  locale: 'sn_ZW',
  name: 'Shona (Zimbabwe)'
}, {
  locale: 'ii',
  name: 'Sichuan Yi'
}, {
  locale: 'ii_CN',
  name: 'Sichuan Yi (China)'
}, {
  locale: 'si',
  name: 'Sinhala'
}, {
  locale: 'si_LK',
  name: 'Sinhala (Sri Lanka)'
}, {
  locale: 'sk',
  name: 'Slovak'
}, {
  locale: 'sk_SK',
  name: 'Slovak (Slovakia)'
}, {
  locale: 'sl',
  name: 'Slovenian'
}, {
  locale: 'sl_SI',
  name: 'Slovenian (Slovenia)'
}, {
  locale: 'so',
  name: 'Somali'
}, {
  locale: 'so_DJ',
  name: 'Somali (Djibouti)'
}, {
  locale: 'so_ET',
  name: 'Somali (Ethiopia)'
}, {
  locale: 'so_KE',
  name: 'Somali (Kenya)'
}, {
  locale: 'so_SO',
  name: 'Somali (Somalia)'
}, {
  locale: 'es',
  name: 'Spanish'
}, {
  locale: 'es_AR',
  name: 'Spanish (Argentina)'
}, {
  locale: 'es_BO',
  name: 'Spanish (Bolivia)'
}, {
  locale: 'es_IC',
  name: 'Spanish (Canary Islands)'
}, {
  locale: 'es_EA',
  name: 'Spanish (Ceuta & Melilla)'
}, {
  locale: 'es_CL',
  name: 'Spanish (Chile)'
}, {
  locale: 'es_CO',
  name: 'Spanish (Colombia)'
}, {
  locale: 'es_CR',
  name: 'Spanish (Costa Rica)'
}, {
  locale: 'es_CU',
  name: 'Spanish (Cuba)'
}, {
  locale: 'es_DO',
  name: 'Spanish (Dominican Republic)'
}, {
  locale: 'es_EC',
  name: 'Spanish (Ecuador)'
}, {
  locale: 'es_SV',
  name: 'Spanish (El Salvador)'
}, {
  locale: 'es_GQ',
  name: 'Spanish (Equatorial Guinea)'
}, {
  locale: 'es_GT',
  name: 'Spanish (Guatemala)'
}, {
  locale: 'es_HN',
  name: 'Spanish (Honduras)'
}, {
  locale: 'es_MX',
  name: 'Spanish (Mexico)'
}, {
  locale: 'es_NI',
  name: 'Spanish (Nicaragua)'
}, {
  locale: 'es_PA',
  name: 'Spanish (Panama)'
}, {
  locale: 'es_PY',
  name: 'Spanish (Paraguay)'
}, {
  locale: 'es_PE',
  name: 'Spanish (Peru)'
}, {
  locale: 'es_PH',
  name: 'Spanish (Philippines)'
}, {
  locale: 'es_PR',
  name: 'Spanish (Puerto Rico)'
}, {
  locale: 'es_ES',
  name: 'Spanish (Spain)'
}, {
  locale: 'es_US',
  name: 'Spanish (United States)'
}, {
  locale: 'es_UY',
  name: 'Spanish (Uruguay)'
}, {
  locale: 'es_VE',
  name: 'Spanish (Venezuela)'
}, {
  locale: 'sw',
  name: 'Swahili'
}, {
  locale: 'sw_KE',
  name: 'Swahili (Kenya)'
}, {
  locale: 'sw_TZ',
  name: 'Swahili (Tanzania)'
}, {
  locale: 'sw_UG',
  name: 'Swahili (Uganda)'
}, {
  locale: 'sv',
  name: 'Swedish'
}, {
  locale: 'sv_AX',
  name: "Swedish (\xC5land Islands)"
}, {
  locale: 'sv_FI',
  name: 'Swedish (Finland)'
}, {
  locale: 'sv_SE',
  name: 'Swedish (Sweden)'
}, {
  locale: 'tl',
  name: 'Tagalog'
}, {
  locale: 'tl_PH',
  name: 'Tagalog (Philippines)'
}, {
  locale: 'ta',
  name: 'Tamil'
}, {
  locale: 'ta_IN',
  name: 'Tamil (India)'
}, {
  locale: 'ta_MY',
  name: 'Tamil (Malaysia)'
}, {
  locale: 'ta_SG',
  name: 'Tamil (Singapore)'
}, {
  locale: 'ta_LK',
  name: 'Tamil (Sri Lanka)'
}, {
  locale: 'te',
  name: 'Telugu'
}, {
  locale: 'te_IN',
  name: 'Telugu (India)'
}, {
  locale: 'th',
  name: 'Thai'
}, {
  locale: 'th_TH',
  name: 'Thai (Thailand)'
}, {
  locale: 'bo',
  name: 'Tibetan'
}, {
  locale: 'bo_CN',
  name: 'Tibetan (China)'
}, {
  locale: 'bo_IN',
  name: 'Tibetan (India)'
}, {
  locale: 'ti',
  name: 'Tigrinya'
}, {
  locale: 'ti_ER',
  name: 'Tigrinya (Eritrea)'
}, {
  locale: 'ti_ET',
  name: 'Tigrinya (Ethiopia)'
}, {
  locale: 'to',
  name: 'Tongan'
}, {
  locale: 'to_TO',
  name: 'Tongan (Tonga)'
}, {
  locale: 'tr',
  name: 'Turkish'
}, {
  locale: 'tr_CY',
  name: 'Turkish (Cyprus)'
}, {
  locale: 'tr_TR',
  name: 'Turkish (Turkey)'
}, {
  locale: 'uk',
  name: 'Ukrainian'
}, {
  locale: 'uk_UA',
  name: 'Ukrainian (Ukraine)'
}, {
  locale: 'ur',
  name: 'Urdu'
}, {
  locale: 'ur_IN',
  name: 'Urdu (India)'
}, {
  locale: 'ur_PK',
  name: 'Urdu (Pakistan)'
}, {
  locale: 'ug',
  name: 'Uyghur'
}, {
  locale: 'ug_Arab_CN',
  name: 'Uyghur (Arabic, China)'
}, {
  locale: 'ug_Arab',
  name: 'Uyghur (Arabic)'
}, {
  locale: 'ug_CN',
  name: 'Uyghur (China)'
}, {
  locale: 'uz',
  name: 'Uzbek'
}, {
  locale: 'uz_AF',
  name: 'Uzbek (Afghanistan)'
}, {
  locale: 'uz_Arab_AF',
  name: 'Uzbek (Arabic, Afghanistan)'
}, {
  locale: 'uz_Arab',
  name: 'Uzbek (Arabic)'
}, {
  locale: 'uz_Cyrl_UZ',
  name: 'Uzbek (Cyrillic, Uzbekistan)'
}, {
  locale: 'uz_Cyrl',
  name: 'Uzbek (Cyrillic)'
}, {
  locale: 'uz_Latn_UZ',
  name: 'Uzbek (Latin, Uzbekistan)'
}, {
  locale: 'uz_Latn',
  name: 'Uzbek (Latin)'
}, {
  locale: 'uz_UZ',
  name: 'Uzbek (Uzbekistan)'
}, {
  locale: 'vi',
  name: 'Vietnamese'
}, {
  locale: 'vi_VN',
  name: 'Vietnamese (Vietnam)'
}, {
  locale: 'cy',
  name: 'Welsh'
}, {
  locale: 'cy_GB',
  name: 'Welsh (United Kingdom)'
}, {
  locale: 'fy',
  name: 'Western Frisian'
}, {
  locale: 'fy_NL',
  name: 'Western Frisian (Netherlands)'
}, {
  locale: 'yi',
  name: 'Yiddish'
}, {
  locale: 'yo',
  name: 'Yoruba'
}, {
  locale: 'yo_BJ',
  name: 'Yoruba (Benin)'
}, {
  locale: 'yo_NG',
  name: 'Yoruba (Nigeria)'
}, {
  locale: 'zu',
  name: 'Zulu'
}, {
  locale: 'zu_ZA',
  name: 'Zulu (South Africa)'
}];

/***/ }),

/***/ "./src/locales/index.ts":
/*!******************************!*\
  !*** ./src/locales/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locales": () => /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_0__.locales,
/* harmony export */   "Locale": () => /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_0__.Locale
/* harmony export */ });
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales */ "./src/locales/locales.ts");



/***/ }),

/***/ "./src/locales/locales.ts":
/*!********************************!*\
  !*** ./src/locales/locales.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locales": () => /* binding */ locales
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/locales/data.ts");

var locales = _data__WEBPACK_IMPORTED_MODULE_0__.LOCALES;

/***/ }),

/***/ "./src/time/data.ts":
/*!**************************!*\
  !*** ./src/time/data.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TIMEZONES": () => /* binding */ TIMEZONES
/* harmony export */ });
var TIMEZONES = [{
  value: 'Dateline Standard Time',
  abbr: 'DST',
  offset: -12,
  isdst: false,
  text: '(UTC-12:00) International Date Line West',
  utc: ['Etc/GMT+12']
}, {
  value: 'UTC-11',
  abbr: 'U',
  offset: -11,
  isdst: false,
  text: '(UTC-11:00) Coordinated Universal Time-11',
  utc: ['Etc/GMT+11', 'Pacific/Midway', 'Pacific/Niue', 'Pacific/Pago_Pago']
}, {
  value: 'Hawaiian Standard Time',
  abbr: 'HST',
  offset: -10,
  isdst: false,
  text: '(UTC-10:00) Hawaii',
  utc: ['Etc/GMT+10', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Rarotonga', 'Pacific/Tahiti']
}, {
  value: 'Alaskan Standard Time',
  abbr: 'AKDT',
  offset: -8,
  isdst: true,
  text: '(UTC-09:00) Alaska',
  utc: ['America/Anchorage', 'America/Juneau', 'America/Nome', 'America/Sitka', 'America/Yakutat']
}, {
  value: 'Pacific Standard Time (Mexico)',
  abbr: 'PDT',
  offset: -7,
  isdst: true,
  text: '(UTC-08:00) Baja California',
  utc: ['America/Santa_Isabel']
}, {
  value: 'Pacific Daylight Time',
  abbr: 'PDT',
  offset: -7,
  isdst: true,
  text: '(UTC-07:00) Pacific Time (US & Canada)',
  utc: ['America/Los_Angeles', 'America/Tijuana', 'America/Vancouver']
}, {
  value: 'Pacific Standard Time',
  abbr: 'PST',
  offset: -8,
  isdst: false,
  text: '(UTC-08:00) Pacific Time (US & Canada)',
  utc: ['America/Los_Angeles', 'America/Tijuana', 'America/Vancouver', 'PST8PDT']
}, {
  value: 'US Mountain Standard Time',
  abbr: 'UMST',
  offset: -7,
  isdst: false,
  text: '(UTC-07:00) Arizona',
  utc: ['America/Creston', 'America/Dawson', 'America/Dawson_Creek', 'America/Hermosillo', 'America/Phoenix', 'America/Whitehorse', 'Etc/GMT+7']
}, {
  value: 'Mountain Standard Time (Mexico)',
  abbr: 'MDT',
  offset: -6,
  isdst: true,
  text: '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
  utc: ['America/Chihuahua', 'America/Mazatlan']
}, {
  value: 'Mountain Standard Time',
  abbr: 'MDT',
  offset: -6,
  isdst: true,
  text: '(UTC-07:00) Mountain Time (US & Canada)',
  utc: ['America/Boise', 'America/Cambridge_Bay', 'America/Denver', 'America/Edmonton', 'America/Inuvik', 'America/Ojinaga', 'America/Yellowknife', 'MST7MDT']
}, {
  value: 'Central America Standard Time',
  abbr: 'CAST',
  offset: -6,
  isdst: false,
  text: '(UTC-06:00) Central America',
  utc: ['America/Belize', 'America/Costa_Rica', 'America/El_Salvador', 'America/Guatemala', 'America/Managua', 'America/Tegucigalpa', 'Etc/GMT+6', 'Pacific/Galapagos']
}, {
  value: 'Central Standard Time',
  abbr: 'CDT',
  offset: -5,
  isdst: true,
  text: '(UTC-06:00) Central Time (US & Canada)',
  utc: ['America/Chicago', 'America/Indiana/Knox', 'America/Indiana/Tell_City', 'America/Matamoros', 'America/Menominee', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Resolute', 'America/Winnipeg', 'CST6CDT']
}, {
  value: 'Central Standard Time (Mexico)',
  abbr: 'CDT',
  offset: -5,
  isdst: true,
  text: '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
  utc: ['America/Bahia_Banderas', 'America/Cancun', 'America/Merida', 'America/Mexico_City', 'America/Monterrey']
}, {
  value: 'Canada Central Standard Time',
  abbr: 'CCST',
  offset: -6,
  isdst: false,
  text: '(UTC-06:00) Saskatchewan',
  utc: ['America/Regina', 'America/Swift_Current']
}, {
  value: 'SA Pacific Standard Time',
  abbr: 'SPST',
  offset: -5,
  isdst: false,
  text: '(UTC-05:00) Bogota, Lima, Quito',
  utc: ['America/Bogota', 'America/Cayman', 'America/Coral_Harbour', 'America/Eirunepe', 'America/Guayaquil', 'America/Jamaica', 'America/Lima', 'America/Panama', 'America/Rio_Branco', 'Etc/GMT+5']
}, {
  value: 'Eastern Standard Time',
  abbr: 'EDT',
  offset: -4,
  isdst: true,
  text: '(UTC-05:00) Eastern Time (US & Canada)',
  utc: ['America/Detroit', 'America/Havana', 'America/Indiana/Petersburg', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Iqaluit', 'America/Kentucky/Monticello', 'America/Louisville', 'America/Montreal', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Pangnirtung', 'America/Port-au-Prince', 'America/Thunder_Bay', 'America/Toronto', 'EST5EDT']
}, {
  value: 'US Eastern Standard Time',
  abbr: 'UEDT',
  offset: -4,
  isdst: true,
  text: '(UTC-05:00) Indiana (East)',
  utc: ['America/Indiana/Marengo', 'America/Indiana/Vevay', 'America/Indianapolis']
}, {
  value: 'Venezuela Standard Time',
  abbr: 'VST',
  offset: -4.5,
  isdst: false,
  text: '(UTC-04:30) Caracas',
  utc: ['America/Caracas']
}, {
  value: 'Paraguay Standard Time',
  abbr: 'PYT',
  offset: -4,
  isdst: false,
  text: '(UTC-04:00) Asuncion',
  utc: ['America/Asuncion']
}, {
  value: 'Atlantic Standard Time',
  abbr: 'ADT',
  offset: -3,
  isdst: true,
  text: '(UTC-04:00) Atlantic Time (Canada)',
  utc: ['America/Glace_Bay', 'America/Goose_Bay', 'America/Halifax', 'America/Moncton', 'America/Thule', 'Atlantic/Bermuda']
}, {
  value: 'Central Brazilian Standard Time',
  abbr: 'CBST',
  offset: -4,
  isdst: false,
  text: '(UTC-04:00) Cuiaba',
  utc: ['America/Campo_Grande', 'America/Cuiaba']
}, {
  value: 'SA Western Standard Time',
  abbr: 'SWST',
  offset: -4,
  isdst: false,
  text: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
  utc: ['America/Anguilla', 'America/Antigua', 'America/Aruba', 'America/Barbados', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Curacao', 'America/Dominica', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guyana', 'America/Kralendijk', 'America/La_Paz', 'America/Lower_Princes', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Montserrat', 'America/Port_of_Spain', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Santo_Domingo', 'America/St_Barthelemy', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Tortola', 'Etc/GMT+4']
}, {
  value: 'Pacific SA Standard Time',
  abbr: 'PSST',
  offset: -4,
  isdst: false,
  text: '(UTC-04:00) Santiago',
  utc: ['America/Santiago', 'Antarctica/Palmer']
}, {
  value: 'Newfoundland Standard Time',
  abbr: 'NDT',
  offset: -2.5,
  isdst: true,
  text: '(UTC-03:30) Newfoundland',
  utc: ['America/St_Johns']
}, {
  value: 'E. South America Standard Time',
  abbr: 'ESAST',
  offset: -3,
  isdst: false,
  text: '(UTC-03:00) Brasilia',
  utc: ['America/Sao_Paulo']
}, {
  value: 'Argentina Standard Time',
  abbr: 'AST',
  offset: -3,
  isdst: false,
  text: '(UTC-03:00) Buenos Aires',
  utc: ['America/Argentina/La_Rioja', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Buenos_Aires', 'America/Catamarca', 'America/Cordoba', 'America/Jujuy', 'America/Mendoza']
}, {
  value: 'SA Eastern Standard Time',
  abbr: 'SEST',
  offset: -3,
  isdst: false,
  text: '(UTC-03:00) Cayenne, Fortaleza',
  utc: ['America/Araguaina', 'America/Belem', 'America/Cayenne', 'America/Fortaleza', 'America/Maceio', 'America/Paramaribo', 'America/Recife', 'America/Santarem', 'Antarctica/Rothera', 'Atlantic/Stanley', 'Etc/GMT+3']
}, {
  value: 'Greenland Standard Time',
  abbr: 'GDT',
  offset: -3,
  isdst: true,
  text: '(UTC-03:00) Greenland',
  utc: ['America/Godthab']
}, {
  value: 'Montevideo Standard Time',
  abbr: 'MST',
  offset: -3,
  isdst: false,
  text: '(UTC-03:00) Montevideo',
  utc: ['America/Montevideo']
}, {
  value: 'Bahia Standard Time',
  abbr: 'BST',
  offset: -3,
  isdst: false,
  text: '(UTC-03:00) Salvador',
  utc: ['America/Bahia']
}, {
  value: 'UTC-02',
  abbr: 'U',
  offset: -2,
  isdst: false,
  text: '(UTC-02:00) Coordinated Universal Time-02',
  utc: ['America/Noronha', 'Atlantic/South_Georgia', 'Etc/GMT+2']
}, {
  value: 'Mid-Atlantic Standard Time',
  abbr: 'MDT',
  offset: -1,
  isdst: true,
  text: '(UTC-02:00) Mid-Atlantic - Old',
  utc: []
}, {
  value: 'Azores Standard Time',
  abbr: 'ADT',
  offset: 0,
  isdst: true,
  text: '(UTC-01:00) Azores',
  utc: ['America/Scoresbysund', 'Atlantic/Azores']
}, {
  value: 'Cape Verde Standard Time',
  abbr: 'CVST',
  offset: -1,
  isdst: false,
  text: '(UTC-01:00) Cape Verde Is.',
  utc: ['Atlantic/Cape_Verde', 'Etc/GMT+1']
}, {
  value: 'Morocco Standard Time',
  abbr: 'MDT',
  offset: 1,
  isdst: true,
  text: '(UTC) Casablanca',
  utc: ['Africa/Casablanca', 'Africa/El_Aaiun']
}, {
  value: 'UTC',
  abbr: 'UTC',
  offset: 0,
  isdst: false,
  text: '(UTC) Coordinated Universal Time',
  utc: ['America/Danmarkshavn', 'Etc/GMT']
}, {
  value: 'GMT Standard Time',
  abbr: 'GMT',
  offset: 0,
  isdst: false,
  text: '(UTC) Edinburgh, London',
  utc: ['Europe/Isle_of_Man', 'Europe/Guernsey', 'Europe/Jersey', 'Europe/London']
}, {
  value: 'British Summer Time',
  abbr: 'BST',
  offset: 1,
  isdst: true,
  text: '(UTC+01:00) Edinburgh, London',
  utc: ['Europe/Isle_of_Man', 'Europe/Guernsey', 'Europe/Jersey', 'Europe/London']
}, {
  value: 'GMT Standard Time',
  abbr: 'GDT',
  offset: 1,
  isdst: true,
  text: '(UTC) Dublin, Lisbon',
  utc: ['Atlantic/Canary', 'Atlantic/Faeroe', 'Atlantic/Madeira', 'Europe/Dublin', 'Europe/Lisbon']
}, {
  value: 'Greenwich Standard Time',
  abbr: 'GST',
  offset: 0,
  isdst: false,
  text: '(UTC) Monrovia, Reykjavik',
  utc: ['Africa/Abidjan', 'Africa/Accra', 'Africa/Bamako', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Freetown', 'Africa/Lome', 'Africa/Monrovia', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Sao_Tome', 'Atlantic/Reykjavik', 'Atlantic/St_Helena']
}, {
  value: 'W. Europe Standard Time',
  abbr: 'WEDT',
  offset: 2,
  isdst: true,
  text: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
  utc: ['Arctic/Longyearbyen', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Berlin', 'Europe/Busingen', 'Europe/Gibraltar', 'Europe/Luxembourg', 'Europe/Malta', 'Europe/Monaco', 'Europe/Oslo', 'Europe/Rome', 'Europe/San_Marino', 'Europe/Stockholm', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Zurich']
}, {
  value: 'Central Europe Standard Time',
  abbr: 'CEDT',
  offset: 2,
  isdst: true,
  text: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
  utc: ['Europe/Belgrade', 'Europe/Bratislava', 'Europe/Budapest', 'Europe/Ljubljana', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Tirane']
}, {
  value: 'Romance Standard Time',
  abbr: 'RDT',
  offset: 2,
  isdst: true,
  text: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
  utc: ['Africa/Ceuta', 'Europe/Brussels', 'Europe/Copenhagen', 'Europe/Madrid', 'Europe/Paris']
}, {
  value: 'Central European Standard Time',
  abbr: 'CEDT',
  offset: 2,
  isdst: true,
  text: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
  utc: ['Europe/Sarajevo', 'Europe/Skopje', 'Europe/Warsaw', 'Europe/Zagreb']
}, {
  value: 'W. Central Africa Standard Time',
  abbr: 'WCAST',
  offset: 1,
  isdst: false,
  text: '(UTC+01:00) West Central Africa',
  utc: ['Africa/Algiers', 'Africa/Bangui', 'Africa/Brazzaville', 'Africa/Douala', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Luanda', 'Africa/Malabo', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Porto-Novo', 'Africa/Tunis', 'Etc/GMT-1']
}, {
  value: 'Namibia Standard Time',
  abbr: 'NST',
  offset: 1,
  isdst: false,
  text: '(UTC+01:00) Windhoek',
  utc: ['Africa/Windhoek']
}, {
  value: 'GTB Standard Time',
  abbr: 'GDT',
  offset: 3,
  isdst: true,
  text: '(UTC+02:00) Athens, Bucharest',
  utc: ['Asia/Nicosia', 'Europe/Athens', 'Europe/Bucharest', 'Europe/Chisinau']
}, {
  value: 'Middle East Standard Time',
  abbr: 'MEDT',
  offset: 3,
  isdst: true,
  text: '(UTC+02:00) Beirut',
  utc: ['Asia/Beirut']
}, {
  value: 'Egypt Standard Time',
  abbr: 'EST',
  offset: 2,
  isdst: false,
  text: '(UTC+02:00) Cairo',
  utc: ['Africa/Cairo']
}, {
  value: 'Syria Standard Time',
  abbr: 'SDT',
  offset: 3,
  isdst: true,
  text: '(UTC+02:00) Damascus',
  utc: ['Asia/Damascus']
}, {
  value: 'E. Europe Standard Time',
  abbr: 'EEDT',
  offset: 3,
  isdst: true,
  text: '(UTC+02:00) E. Europe',
  utc: ['Asia/Nicosia', 'Europe/Athens', 'Europe/Bucharest', 'Europe/Chisinau', 'Europe/Helsinki', 'Europe/Kiev', 'Europe/Mariehamn', 'Europe/Nicosia', 'Europe/Riga', 'Europe/Sofia', 'Europe/Tallinn', 'Europe/Uzhgorod', 'Europe/Vilnius', 'Europe/Zaporozhye']
}, {
  value: 'South Africa Standard Time',
  abbr: 'SAST',
  offset: 2,
  isdst: false,
  text: '(UTC+02:00) Harare, Pretoria',
  utc: ['Africa/Blantyre', 'Africa/Bujumbura', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Kigali', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Etc/GMT-2']
}, {
  value: 'FLE Standard Time',
  abbr: 'FDT',
  offset: 3,
  isdst: true,
  text: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
  utc: ['Europe/Helsinki', 'Europe/Kiev', 'Europe/Mariehamn', 'Europe/Riga', 'Europe/Sofia', 'Europe/Tallinn', 'Europe/Uzhgorod', 'Europe/Vilnius', 'Europe/Zaporozhye']
}, {
  value: 'Turkey Standard Time',
  abbr: 'TDT',
  offset: 3,
  isdst: false,
  text: '(UTC+03:00) Istanbul',
  utc: ['Europe/Istanbul']
}, {
  value: 'Israel Standard Time',
  abbr: 'JDT',
  offset: 3,
  isdst: true,
  text: '(UTC+02:00) Jerusalem',
  utc: ['Asia/Jerusalem']
}, {
  value: 'Libya Standard Time',
  abbr: 'LST',
  offset: 2,
  isdst: false,
  text: '(UTC+02:00) Tripoli',
  utc: ['Africa/Tripoli']
}, {
  value: 'Jordan Standard Time',
  abbr: 'JST',
  offset: 3,
  isdst: false,
  text: '(UTC+03:00) Amman',
  utc: ['Asia/Amman']
}, {
  value: 'Arabic Standard Time',
  abbr: 'AST',
  offset: 3,
  isdst: false,
  text: '(UTC+03:00) Baghdad',
  utc: ['Asia/Baghdad']
}, {
  value: 'Kaliningrad Standard Time',
  abbr: 'KST',
  offset: 3,
  isdst: false,
  text: '(UTC+02:00) Kaliningrad',
  utc: ['Europe/Kaliningrad']
}, {
  value: 'Arab Standard Time',
  abbr: 'AST',
  offset: 3,
  isdst: false,
  text: '(UTC+03:00) Kuwait, Riyadh',
  utc: ['Asia/Aden', 'Asia/Bahrain', 'Asia/Kuwait', 'Asia/Qatar', 'Asia/Riyadh']
}, {
  value: 'E. Africa Standard Time',
  abbr: 'EAST',
  offset: 3,
  isdst: false,
  text: '(UTC+03:00) Nairobi',
  utc: ['Africa/Addis_Ababa', 'Africa/Asmera', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Mogadishu', 'Africa/Nairobi', 'Antarctica/Syowa', 'Etc/GMT-3', 'Indian/Antananarivo', 'Indian/Comoro', 'Indian/Mayotte']
}, {
  value: 'Moscow Standard Time',
  abbr: 'MSK',
  offset: 3,
  isdst: false,
  text: '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk',
  utc: ['Europe/Kirov', 'Europe/Moscow', 'Europe/Simferopol', 'Europe/Volgograd', 'Europe/Minsk']
}, {
  value: 'Samara Time',
  abbr: 'SAMT',
  offset: 4,
  isdst: false,
  text: '(UTC+04:00) Samara, Ulyanovsk, Saratov',
  utc: ['Europe/Astrakhan', 'Europe/Samara', 'Europe/Ulyanovsk']
}, {
  value: 'Iran Standard Time',
  abbr: 'IDT',
  offset: 4.5,
  isdst: true,
  text: '(UTC+03:30) Tehran',
  utc: ['Asia/Tehran']
}, {
  value: 'Arabian Standard Time',
  abbr: 'AST',
  offset: 4,
  isdst: false,
  text: '(UTC+04:00) Abu Dhabi, Muscat',
  utc: ['Asia/Dubai', 'Asia/Muscat', 'Etc/GMT-4']
}, {
  value: 'Azerbaijan Standard Time',
  abbr: 'ADT',
  offset: 5,
  isdst: true,
  text: '(UTC+04:00) Baku',
  utc: ['Asia/Baku']
}, {
  value: 'Mauritius Standard Time',
  abbr: 'MST',
  offset: 4,
  isdst: false,
  text: '(UTC+04:00) Port Louis',
  utc: ['Indian/Mahe', 'Indian/Mauritius', 'Indian/Reunion']
}, {
  value: 'Georgian Standard Time',
  abbr: 'GET',
  offset: 4,
  isdst: false,
  text: '(UTC+04:00) Tbilisi',
  utc: ['Asia/Tbilisi']
}, {
  value: 'Caucasus Standard Time',
  abbr: 'CST',
  offset: 4,
  isdst: false,
  text: '(UTC+04:00) Yerevan',
  utc: ['Asia/Yerevan']
}, {
  value: 'Afghanistan Standard Time',
  abbr: 'AST',
  offset: 4.5,
  isdst: false,
  text: '(UTC+04:30) Kabul',
  utc: ['Asia/Kabul']
}, {
  value: 'West Asia Standard Time',
  abbr: 'WAST',
  offset: 5,
  isdst: false,
  text: '(UTC+05:00) Ashgabat, Tashkent',
  utc: ['Antarctica/Mawson', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Dushanbe', 'Asia/Oral', 'Asia/Samarkand', 'Asia/Tashkent', 'Etc/GMT-5', 'Indian/Kerguelen', 'Indian/Maldives']
}, {
  value: 'Yekaterinburg Time',
  abbr: 'YEKT',
  offset: 5,
  isdst: false,
  text: '(UTC+05:00) Yekaterinburg',
  utc: ['Asia/Yekaterinburg']
}, {
  value: 'Pakistan Standard Time',
  abbr: 'PKT',
  offset: 5,
  isdst: false,
  text: '(UTC+05:00) Islamabad, Karachi',
  utc: ['Asia/Karachi']
}, {
  value: 'India Standard Time',
  abbr: 'IST',
  offset: 5.5,
  isdst: false,
  text: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
  utc: ['Asia/Kolkata', 'Asia/Calcutta']
}, {
  value: 'Sri Lanka Standard Time',
  abbr: 'SLST',
  offset: 5.5,
  isdst: false,
  text: '(UTC+05:30) Sri Jayawardenepura',
  utc: ['Asia/Colombo']
}, {
  value: 'Nepal Standard Time',
  abbr: 'NST',
  offset: 5.75,
  isdst: false,
  text: '(UTC+05:45) Kathmandu',
  utc: ['Asia/Kathmandu']
}, {
  value: 'Central Asia Standard Time',
  abbr: 'CAST',
  offset: 6,
  isdst: false,
  text: '(UTC+06:00) Nur-Sultan (Astana)',
  utc: ['Antarctica/Vostok', 'Asia/Almaty', 'Asia/Bishkek', 'Asia/Qyzylorda', 'Asia/Urumqi', 'Etc/GMT-6', 'Indian/Chagos']
}, {
  value: 'Bangladesh Standard Time',
  abbr: 'BST',
  offset: 6,
  isdst: false,
  text: '(UTC+06:00) Dhaka',
  utc: ['Asia/Dhaka', 'Asia/Thimphu']
}, {
  value: 'Myanmar Standard Time',
  abbr: 'MST',
  offset: 6.5,
  isdst: false,
  text: '(UTC+06:30) Yangon (Rangoon)',
  utc: ['Asia/Rangoon', 'Indian/Cocos']
}, {
  value: 'SE Asia Standard Time',
  abbr: 'SAST',
  offset: 7,
  isdst: false,
  text: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
  utc: ['Antarctica/Davis', 'Asia/Bangkok', 'Asia/Hovd', 'Asia/Jakarta', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Saigon', 'Asia/Vientiane', 'Etc/GMT-7', 'Indian/Christmas']
}, {
  value: 'N. Central Asia Standard Time',
  abbr: 'NCAST',
  offset: 7,
  isdst: false,
  text: '(UTC+07:00) Novosibirsk',
  utc: ['Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk']
}, {
  value: 'China Standard Time',
  abbr: 'CST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
  utc: ['Asia/Hong_Kong', 'Asia/Macau', 'Asia/Shanghai']
}, {
  value: 'North Asia Standard Time',
  abbr: 'NAST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Krasnoyarsk',
  utc: ['Asia/Krasnoyarsk']
}, {
  value: 'Singapore Standard Time',
  abbr: 'MPST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Kuala Lumpur, Singapore',
  utc: ['Asia/Brunei', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Makassar', 'Asia/Manila', 'Asia/Singapore', 'Etc/GMT-8']
}, {
  value: 'W. Australia Standard Time',
  abbr: 'WAST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Perth',
  utc: ['Antarctica/Casey', 'Australia/Perth']
}, {
  value: 'Taipei Standard Time',
  abbr: 'TST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Taipei',
  utc: ['Asia/Taipei']
}, {
  value: 'Ulaanbaatar Standard Time',
  abbr: 'UST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Ulaanbaatar',
  utc: ['Asia/Choibalsan', 'Asia/Ulaanbaatar']
}, {
  value: 'North Asia East Standard Time',
  abbr: 'NAEST',
  offset: 8,
  isdst: false,
  text: '(UTC+08:00) Irkutsk',
  utc: ['Asia/Irkutsk']
}, {
  value: 'Japan Standard Time',
  abbr: 'JST',
  offset: 9,
  isdst: false,
  text: '(UTC+09:00) Osaka, Sapporo, Tokyo',
  utc: ['Asia/Dili', 'Asia/Jayapura', 'Asia/Tokyo', 'Etc/GMT-9', 'Pacific/Palau']
}, {
  value: 'Korea Standard Time',
  abbr: 'KST',
  offset: 9,
  isdst: false,
  text: '(UTC+09:00) Seoul',
  utc: ['Asia/Pyongyang', 'Asia/Seoul']
}, {
  value: 'Cen. Australia Standard Time',
  abbr: 'CAST',
  offset: 9.5,
  isdst: false,
  text: '(UTC+09:30) Adelaide',
  utc: ['Australia/Adelaide', 'Australia/Broken_Hill']
}, {
  value: 'AUS Central Standard Time',
  abbr: 'ACST',
  offset: 9.5,
  isdst: false,
  text: '(UTC+09:30) Darwin',
  utc: ['Australia/Darwin']
}, {
  value: 'E. Australia Standard Time',
  abbr: 'EAST',
  offset: 10,
  isdst: false,
  text: '(UTC+10:00) Brisbane',
  utc: ['Australia/Brisbane', 'Australia/Lindeman']
}, {
  value: 'AUS Eastern Standard Time',
  abbr: 'AEST',
  offset: 10,
  isdst: false,
  text: '(UTC+10:00) Canberra, Melbourne, Sydney',
  utc: ['Australia/Melbourne', 'Australia/Sydney']
}, {
  value: 'West Pacific Standard Time',
  abbr: 'WPST',
  offset: 10,
  isdst: false,
  text: '(UTC+10:00) Guam, Port Moresby',
  utc: ['Antarctica/DumontDUrville', 'Etc/GMT-10', 'Pacific/Guam', 'Pacific/Port_Moresby', 'Pacific/Saipan', 'Pacific/Truk']
}, {
  value: 'Tasmania Standard Time',
  abbr: 'TST',
  offset: 10,
  isdst: false,
  text: '(UTC+10:00) Hobart',
  utc: ['Australia/Currie', 'Australia/Hobart']
}, {
  value: 'Yakutsk Standard Time',
  abbr: 'YST',
  offset: 9,
  isdst: false,
  text: '(UTC+09:00) Yakutsk',
  utc: ['Asia/Chita', 'Asia/Khandyga', 'Asia/Yakutsk']
}, {
  value: 'Central Pacific Standard Time',
  abbr: 'CPST',
  offset: 11,
  isdst: false,
  text: '(UTC+11:00) Solomon Is., New Caledonia',
  utc: ['Antarctica/Macquarie', 'Etc/GMT-11', 'Pacific/Efate', 'Pacific/Guadalcanal', 'Pacific/Kosrae', 'Pacific/Noumea', 'Pacific/Ponape']
}, {
  value: 'Vladivostok Standard Time',
  abbr: 'VST',
  offset: 11,
  isdst: false,
  text: '(UTC+11:00) Vladivostok',
  utc: ['Asia/Sakhalin', 'Asia/Ust-Nera', 'Asia/Vladivostok']
}, {
  value: 'New Zealand Standard Time',
  abbr: 'NZST',
  offset: 12,
  isdst: false,
  text: '(UTC+12:00) Auckland, Wellington',
  utc: ['Antarctica/McMurdo', 'Pacific/Auckland']
}, {
  value: 'UTC+12',
  abbr: 'U',
  offset: 12,
  isdst: false,
  text: '(UTC+12:00) Coordinated Universal Time+12',
  utc: ['Etc/GMT-12', 'Pacific/Funafuti', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Nauru', 'Pacific/Tarawa', 'Pacific/Wake', 'Pacific/Wallis']
}, {
  value: 'Fiji Standard Time',
  abbr: 'FST',
  offset: 12,
  isdst: false,
  text: '(UTC+12:00) Fiji',
  utc: ['Pacific/Fiji']
}, {
  value: 'Magadan Standard Time',
  abbr: 'MST',
  offset: 12,
  isdst: false,
  text: '(UTC+12:00) Magadan',
  utc: ['Asia/Anadyr', 'Asia/Kamchatka', 'Asia/Magadan', 'Asia/Srednekolymsk']
}, {
  value: 'Kamchatka Standard Time',
  abbr: 'KDT',
  offset: 13,
  isdst: true,
  text: '(UTC+12:00) Petropavlovsk-Kamchatsky - Old',
  utc: ['Asia/Kamchatka']
}, {
  value: 'Tonga Standard Time',
  abbr: 'TST',
  offset: 13,
  isdst: false,
  text: "(UTC+13:00) Nuku'alofa",
  utc: ['Etc/GMT-13', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Tongatapu']
}, {
  value: 'Samoa Standard Time',
  abbr: 'SST',
  offset: 13,
  isdst: false,
  text: '(UTC+13:00) Samoa',
  utc: ['Pacific/Apia']
}];

/***/ }),

/***/ "./src/time/index.ts":
/*!***************************!*\
  !*** ./src/time/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timezone": () => /* reexport safe */ _timezones__WEBPACK_IMPORTED_MODULE_0__.Timezone,
/* harmony export */   "timezones": () => /* reexport safe */ _timezones__WEBPACK_IMPORTED_MODULE_0__.timezones
/* harmony export */ });
/* harmony import */ var _timezones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timezones */ "./src/time/timezones.ts");



/***/ }),

/***/ "./src/time/timezones.ts":
/*!*******************************!*\
  !*** ./src/time/timezones.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timezones": () => /* binding */ timezones
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/time/data.ts");

var timezones = _data__WEBPACK_IMPORTED_MODULE_0__.TIMEZONES;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=data-box.js.map