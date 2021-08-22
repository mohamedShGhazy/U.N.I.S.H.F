export let countryies = () => {
  let country = [
    {
      name: 'Afghanistan',
      key: 'AF',
    },
    {
      name: 'Albania',
      key: 'AL',
    },
    {
      name: 'Algeria',
      key: 'DZ',
    },
    {
      name: 'American Samoa',
      key: 'AS',
    },
    {
      name: 'Angola',
      key: 'AO',
    },
    {
      name: 'Anguilla',
      key: 'AI',
    },
    {
      name: 'Antartica',
      key: 'AQ',
    },
    {
      name: 'Antigua and Barbuda',
      key: 'AG',
    },
    {
      name: 'Argentina',
      key: 'AR',
    },
    {
      name: 'Armenia',
      key: 'AM',
    },
    {
      name: 'Aruba',
      key: 'AW',
    },
    {
      name: 'Ashmore and Cartier Island',
      key: 'Ashmore and Cartier Island',
    },
    {
      name: 'Australia',
      key: 'AU',
    },
    {
      name: 'Austria',
      key: 'AT',
    },
    {
      name: 'Azerbaijan',
      key: 'AZ',
    },
    {
      name: 'Bahamas',
      key: 'BS',
    },
    {
      name: 'Bahrain',
      key: 'BH',
    },
    {
      name: 'Bangladesh',
      key: 'BD',
    },
    {
      name: 'Barbados',
      key: 'BB',
    },
    {
      name: 'Belarus',
      key: 'BY',
    },
    {
      name: 'Belgium',
      key: 'BE',
    },
    {
      name: 'Belize',
      key: 'BZ',
    },
    {
      name: 'Benin',
      key: 'BJ',
    },
    {
      name: 'Bermuda',
      key: 'BM',
    },
    {
      name: 'Bhutan',
      key: 'BT',
    },
    {
      name: 'Bolivia',
      key: 'BO',
    },
    {
      name: 'Bosnia and Herzegovina',
      key: 'BA',
    },
    {
      name: 'Botswana',
      key: 'BW',
    },
    {
      name: 'Brazil',
      key: 'BR',
    },
    {
      name: 'British Virgin Islands',
      key: 'IO',
    },
    {
      name: 'Brunei',
      key: 'BN',
    },
    {
      name: 'Bulgaria',
      key: 'BG',
    },
    {
      name: 'Burkina Faso',
      key: 'BF',
    },
    {
      name: 'Burma',
      key: 'Burma',
    },
    {
      name: 'Burundi',
      key: 'BI',
    },
    {
      name: 'Cambodia',
      key: 'KH',
    },
    {
      name: 'Cameroon',
      key: 'CM',
    },
    {
      name: 'Canada',
      key: 'CA',
    },
    {
      name: 'Cape Verde',
      key: 'CV',
    },
    {
      name: 'Cayman Islands',
      key: 'KY',
    },
    {
      name: 'Central African Republic',
      key: 'CF',
    },
    {
      name: 'Chad',
      key: 'TD',
    },
    {
      name: 'Chile',
      key: 'CL',
    },
    {
      name: 'China',
      key: 'CN',
    },
    {
      name: 'Christmas Island',
      key: 'CX',
    },
    {
      name: 'Clipperton Island',
      key: 'Clipperton Island',
    },
    {
      name: 'Cocos (Keeling) Islands',
      key: 'CC',
    },
    {
      name: 'Colombia',
      key: 'CO',
    },
    {
      name: 'Comoros',
      key: 'KM',
    },
    {
      name: 'Congo, Democratic Republic of the',
      key: 'CD',
    },
    {
      name: 'Congo, Republic of the',
      key: 'CG',
    },
    {
      name: 'Cook Islands',
      key: 'CK',
    },
    {
      name: 'Costa Rica',
      key: 'CR',
    },
    {
      name: "Cote d'Ivoire",
      key: 'CI',
    },
    {
      name: 'Croatia',
      key: 'HR',
    },
    {
      name: 'Cuba',
      key: 'CU',
    },
    {
      name: 'Cyprus',
      key: '',
    },
    {
      name: 'Czeck Republic',
      key: 'CY',
    },
    {
      name: 'Denmark',
      key: 'DK',
    },
    {
      name: 'Djibouti',
      key: 'DJ',
    },
    {
      name: 'Dominica',
      key: 'DM',
    },
    {
      name: 'Dominican Republic',
      key: 'DO',
    },
    {
      name: 'Ecuador',
      key: 'EC',
    },
    {
      name: 'Egypt',
      key: 'EG',
    },
    {
      name: 'El Salvador',
      key: 'SV',
    },
    {
      name: 'Equatorial Guinea',
      key: 'GQ',
    },
    {
      name: 'Eritrea',
      key: 'ER',
    },
    {
      name: 'Estonia',
      key: 'EE',
    },
    {
      name: 'Ethiopia',
      key: 'ET',
    },
    {
      name: 'Europa Island',
      key: 'Europa Island',
    },
    {
      name: 'Falkland Islands (Islas Malvinas)',
      key: 'FK',
    },
    {
      name: 'Faroe Islands',
      key: 'FO',
    },
    {
      name: 'Fiji',
      key: 'FJ',
    },
    {
      name: 'Finland',
      key: 'FI',
    },
    {
      name: 'France',
      key: 'FR',
    },
    {
      name: 'French Guiana',
      key: 'GF',
    },
    {
      name: 'French Polynesia',
      key: 'PF',
    },
    {
      name: 'French Southern and Antarctic Lands',
      key: 'TF',
    },
    {
      name: 'Gabon',
      key: 'GA',
    },
    {
      name: 'Gambia, The',
      key: 'GM',
    },
    {
      name: 'Gaza Strip',
      key: 'PS',
    },
    {
      name: 'Georgia',
      key: 'GE',
    },
    {
      name: 'Germany',
      key: 'DE',
    },
    {
      name: 'Ghana',
      key: 'GH',
    },
    {
      name: 'Gibraltar',
      key: 'GI',
    },
    {
      name: 'Glorioso Islands',
      key: 'Glorioso',
    },
    {
      name: 'Greece',
      key: 'GR',
    },
    {
      name: 'Greenland',
      key: 'GL',
    },
    {
      name: 'Grenada',
      key: 'GD',
    },
    {
      name: 'Guadeloupe',
      key: 'GP',
    },
    {
      name: 'Guam',
      key: 'GU',
    },
    {
      name: 'Guatemala',
      key: 'GT',
    },
    {
      name: 'Guernsey',
      key: 'GG',
    },
    {
      name: 'Guinea',
      key: 'GN',
    },
    {
      name: 'Guinea-Bissau',
      key: 'GW',
    },
    {
      name: 'Guyana',
      key: 'GY',
    },
    {
      name: 'Haiti',
      key: 'HT',
    },
    {
      name: 'Heard Island and McDonald Islands',
      key: 'HM',
    },
    {
      name: 'Holy See (Vatican City)',
      key: 'VA',
    },
    {
      name: 'Honduras',
      key: 'HN',
    },
    {
      name: 'Hong Kong',
      key: 'HK',
    },
    {
      name: 'Howland Island',
      key: 'Howland',
    },
    {
      name: 'Hungary',
      key: 'HU',
    },
    {
      name: 'Iceland',
      key: 'IS',
    },
    {
      name: 'India',
      key: 'IN',
    },
    {
      name: 'Indonesia',
      key: 'ID',
    },
    {
      name: 'Iran',
      key: 'IR',
    },
    {
      name: 'Iraq',
      key: 'IQ',
    },
    {
      name: 'Ireland',
      key: 'IE',
    },
    {
      name: 'Ireland, Northern',
      key: 'IE',
    },
    {
      name: 'Israel',
      key: 'IL',
    },
    {
      name: 'Italy',
      key: 'IT',
    },
    {
      name: 'Jamaica',
      key: 'JM',
    },
    {
      name: 'Jan Mayen',
      key: 'SJ',
    },
    {
      name: 'Japan',
      key: 'JP',
    },
    {
      name: 'Jarvis Island',
      key: 'Jarvis Island',
    },
    {
      name: 'Jersey',
      key: 'JE',
    },
    {
      name: 'Johnston Atoll',
      key: 'Johnston Atoll',
    },
    {
      name: 'Jordan',
      key: 'JO',
    },
    {
      name: 'Juan de Nova Island',
      key: 'Juan de Nova Island',
    },
    {
      name: 'Kazakhstan',
      key: 'KZ',
    },
    {
      name: 'Kenya',
      key: 'KE',
    },
    {
      name: 'Kiribati',
      key: 'KI',
    },
    {
      name: 'Korea, North',
      key: 'KP',
    },
    {
      name: 'Korea, South',
      key: 'KP',
    },
    {
      name: 'Kuwait',
      key: 'KW',
    },
    {
      name: 'Kyrgyzstan',
      key: 'KG',
    },
    {
      name: 'Laos',
      key: 'Laos',
    },
    {
      name: 'Latvia',
      key: 'LV',
    },
    {
      name: 'Lebanon',
      key: 'LB',
    },
    {
      name: 'Lesotho',
      key: 'LS',
    },
    {
      name: 'Liberia',
      key: 'LR',
    },
    {
      name: 'Libya',
      key: 'LY',
    },
    {
      name: 'Liechtenstein',
      key: 'LI',
    },
    {
      name: 'Lithuania',
      key: 'LT',
    },
    {
      name: 'Luxembourg',
      key: 'LU',
    },
    {
      name: 'Macau',
      key: 'Macau',
    },
    {
      name: 'Macedonia, Former Yugoslav Republic of',
      key: 'MK',
    },
    {
      name: 'Madagascar',
      key: 'MG',
    },
    {
      name: 'Malawi',
      key: 'MW',
    },
    {
      name: 'Malaysia',
      key: 'MY',
    },
    {
      name: 'Maldives',
      key: 'MV',
    },
    {
      name: 'Mali',
      key: 'ML',
    },
    {
      name: 'Malta',
      key: 'MT',
    },
    {
      name: 'Man, Isle of',
      key: 'IM',
    },
    {
      name: 'Marshall Islands',
      key: 'MH',
    },
    {
      name: 'Martinique',
      key: 'MQ',
    },
    {
      name: 'Mauritania',
      key: 'MR',
    },
    {
      name: 'Mauritius',
      key: 'MU',
    },
    {
      name: 'Mayotte',
      key: 'YT',
    },
    {
      name: 'Mexico',
      key: 'MX',
    },
    {
      name: 'Micronesia, Federated States of',
      key: 'FM',
    },
    {
      name: 'Midway Islands',
      key: 'Midway',
    },
    {
      name: 'Moldova',
      key: 'MD',
    },
    {
      name: 'Monaco',
      key: 'MC',
    },
    {
      name: 'Mongolia',
      key: 'MN',
    },
    {
      name: 'Montserrat',
      key: 'MS',
    },
    {
      name: 'Morocco',
      key: 'MA',
    },
    {
      name: 'Mozambique',
      key: 'MZ',
    },
    {
      name: 'Namibia',
      key: 'NA',
    },
    {
      name: 'Nauru',
      key: 'NR',
    },
    {
      name: 'Nepal',
      key: 'NP',
    },
    {
      name: 'Netherlands',
      key: 'NL',
    },
    {
      name: 'Netherlands Antilles',
      key: 'NL',
    },
    {
      name: 'New Caledonia',
      key: 'NC',
    },
    {
      name: 'New Zealand',
      key: 'NZ',
    },
    {
      name: 'Nicaragua',
      key: 'NI',
    },
    {
      name: 'Niger',
      key: 'NE',
    },
    {
      name: 'Nigeria',
      key: 'NG',
    },
    {
      name: 'Niue',
      key: 'NU',
    },
    {
      name: 'Norfolk Island',
      key: 'Norfolk',
    },
    {
      name: 'Northern Mariana Islands',
      key: 'MP',
    },
    {
      name: 'Norway',
      key: 'NO',
    },
    {
      name: 'Oman',
      key: 'OM',
    },
    {
      name: 'Pakistan',
      key: 'PK',
    },
    {
      name: 'Palau',
      key: 'PW',
    },
    {
      name: 'Panama',
      key: 'PA',
    },
    {
      name: 'Papua New Guinea',
      key: 'PG',
    },
    {
      name: 'Paraguay',
      key: 'PY',
    },
    {
      name: 'Peru',
      key: 'PE',
    },
    {
      name: 'Philippines',
      key: 'PH',
    },
    {
      name: 'Pitcaim Islands',
      key: 'Pitcaim Islands',
    },
    {
      name: 'Poland',
      key: 'PL',
    },
    {
      name: 'Portugal',
      key: 'PT',
    },
    {
      name: 'Puerto Rico',
      key: 'PR',
    },
    {
      name: 'Qatar',
      key: 'QA',
    },
    {
      name: 'Reunion',
      key: 'RE',
    },
    {
      name: 'Romainia',
      key: 'RO',
    },
    {
      name: 'Russia',
      key: 'RU',
    },
    {
      name: 'Rwanda',
      key: 'RW',
    },
    {
      name: 'Saint Helena',
      key: 'SH',
    },
    {
      name: 'Saint Kitts and Nevis',
      key: 'KN',
    },
    {
      name: 'Saint Lucia',
      key: 'LC',
    },
    {
      name: 'Saint Pierre and Miquelon',
      key: 'PM',
    },
    {
      name: 'Saint Vincent and the Grenadines',
      key: 'VC',
    },
    {
      name: 'Samoa',
      key: 'WS',
    },
    {
      name: 'San Marino',
      key: 'SM',
    },
    {
      name: 'Sao Tome and Principe',
      key: 'ST',
    },
    {
      name: 'Saudi Arabia',
      key: 'SA',
    },
    {
      name: 'Scotland',
      key: 'Scotland',
    },
    {
      name: 'Senegal',
      key: 'SN',
    },
    {
      name: 'Seychelles',
      key: 'SC',
    },
    {
      name: 'Sierra Leone',
      key: 'SL',
    },
    {
      name: 'Singapore',
      key: 'SG',
    },
    {
      name: 'Slovakia',
      key: 'SK',
    },
    {
      name: 'Slovenia',
      key: 'SI',
    },
    {
      name: 'Solomon Islands',
      key: 'SB',
    },
    {
      name: 'Somalia',
      key: 'SO',
    },
    {
      name: 'South Africa',
      key: 'ZA',
    },
    {
      name: 'South Georgia and South Sandwich Islands',
      key: 'GS',
    },
    {
      name: 'Spain',
      key: 'ES',
    },
    {
      name: 'Spratly Islands',
      key: 'Spratly',
    },
    {
      name: 'Sri Lanka',
      key: 'LK',
    },
    {
      name: 'Sudan',
      key: 'SD',
    },
    {
      name: 'Suriname',
      key: 'SR',
    },
    {
      name: 'Svalbard',
      key: 'SJ',
    },
    {
      name: 'Swaziland',
      key: 'SZ',
    },
    {
      name: 'Sweden',
      key: 'SE',
    },
    {
      name: 'Switzerland',
      key: 'CH',
    },
    {
      name: 'Syria',
      key: 'SY',
    },
    {
      name: 'Taiwan',
      key: 'TW',
    },
    {
      name: 'Tajikistan',
      key: 'TJ',
    },
    {
      name: 'Tanzania',
      key: 'TZ',
    },
    {
      name: 'Thailand',
      key: 'TH',
    },
    {
      name: 'Tobago',
      key: 'TT',
    },
    {
      name: 'Toga',
      key: 'TG',
    },
    {
      name: 'Tokelau',
      key: 'TK',
    },
    {
      name: 'Tonga',
      key: 'TO',
    },
    {
      name: 'Trinidad',
      key: 'TT',
    },
    {
      name: 'Tunisia',
      key: 'TN',
    },
    {
      name: 'Turkey',
      key: 'TR',
    },
    {
      name: 'Turkmenistan',
      key: 'TM',
    },
    {
      name: 'Tuvalu',
      key: 'TV',
    },
    {
      name: 'Uganda',
      key: 'UG',
    },
    {
      name: 'Ukraine',
      key: 'UA',
    },
    {
      name: 'United Arab Emirates',
      key: 'AE',
    },
    {
      name: 'United Kingdom',
      key: 'GB',
    },
    {
      name: 'Uruguay',
      key: 'UY',
    },
    {
      name: 'USA',
      key: 'USA',
    },
    {
      name: 'Uzbekistan',
      key: 'UZ',
    },
    {
      name: 'Vanuatu',
      key: 'VU',
    },
    {
      name: 'Venezuela',
      key: 'VE',
    },
    {
      name: 'Vietnam',
      key: 'VN',
    },
    {
      name: 'Virgin Islands',
      key: 'VG',
    },
    {
      name: 'Wales',
      key: 'WF',
    },
    {
      name: 'Wallis and Futuna',
      key: 'WF',
    },
    {
      name: 'West Bank',
      key: 'West Bank',
    },
    {
      name: 'Western Sahara',
      key: 'EH',
    },
    {
      name: 'Yemen',
      key: 'YE',
    },
    {
      name: 'Yugoslavia',
      key: 'Yugoslavia',
    },
    {
      name: 'Zambia',
      key: 'ZM',
    },
    {
      name: 'Zimbabwe',
      key: 'ZW',
    },
  ];
  return country;
};
