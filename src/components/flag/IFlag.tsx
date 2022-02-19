// corresponds to the ISO 3166-1-alpha-2 country codes. For Great Britain (GB) we also provide some sub divisions
// Source of codes and country names: https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json

export type ICountryCode =
| "af"
| "ax"
| "al"
| "dz"
| "as"
| "ad"
| "ao"
| "ai"
| "aq"
| "ag"
| "ar"
| "am"
| "aw"
| "au"
| "at"
| "az"
| "bs"
| "bh"
| "bd"
| "bb"
| "by"
| "be"
| "bz"
| "bj"
| "bm"
| "bt"
| "bo"
| "bq"
| "ba"
| "bw"
| "bv"
| "br"
| "io"
| "bn"
| "bg"
| "bf"
| "bi"
| "kh"
| "cm"
| "ca"
| "cv"
| "ky"
| "cf"
| "td"
| "cl"
| "cn"
| "cx"
| "cc"
| "co"
| "km"
| "cg"
| "cd"
| "ck"
| "cr"
| "ci"
| "hr"
| "cu"
| "cw"
| "cy"
| "cz"
| "dk"
| "dj"
| "dm"
| "do"
| "ec"
| "eg"
| "sv"
| "gq"
| "er"
| "ee"
| "et"
| "fk"
| "fo"
| "fj"
| "fi"
| "fr"
| "gf"
| "pf"
| "tf"
| "ga"
| "gm"
| "ge"
| "de"
| "gh"
| "gi"
| "gr"
| "gl"
| "gd"
| "gp"
| "gu"
| "gt"
| "gg"
| "gn"
| "gw"
| "gy"
| "ht"
| "hm"
| "va"
| "hn"
| "hk"
| "hu"
| "is"
| "in"
| "id"
| "ir"
| "iq"
| "ie"
| "im"
| "il"
| "it"
| "jm"
| "jp"
| "je"
| "jo"
| "kz"
| "ke"
| "ki"
| "kp"
| "kr"
| "kw"
| "kg"
| "la"
| "lv"
| "lb"
| "ls"
| "lr"
| "ly"
| "li"
| "lt"
| "lu"
| "mo"
| "mk"
| "mg"
| "mw"
| "my"
| "mv"
| "ml"
| "mt"
| "mh"
| "mq"
| "mr"
| "mu"
| "yt"
| "mx"
| "fm"
| "md"
| "mc"
| "mn"
| "me"
| "ms"
| "ma"
| "mz"
| "mm"
| "na"
| "nr"
| "np"
| "nl"
| "nc"
| "nz"
| "ni"
| "ne"
| "ng"
| "nu"
| "nf"
| "mp"
| "no"
| "om"
| "pk"
| "pw"
| "ps"
| "pa"
| "pg"
| "py"
| "pe"
| "ph"
| "pn"
| "pl"
| "pt"
| "pr"
| "qa"
| "re"
| "ro"
| "ru"
| "rw"
| "bl"
| "sh"
| "kn"
| "lc"
| "mf"
| "pm"
| "vc"
| "ws"
| "sm"
| "st"
| "sa"
| "sn"
| "rs"
| "sc"
| "sl"
| "sg"
| "sx"
| "sk"
| "si"
| "sb"
| "so"
| "za"
| "gs"
| "ss"
| "es"
| "lk"
| "sd"
| "sr"
| "sj"
| "sz"
| "se"
| "ch"
| "sy"
| "tw"
| "tj"
| "tz"
| "th"
| "tl"
| "tg"
| "tk"
| "to"
| "tt"
| "tn"
| "tr"
| "tm"
| "tc"
| "tv"
| "ug"
| "ua"
| "ae"
| "gb"
| "us"
| "um"
| "uy"
| "uz"
| "vu"
| "ve"
| "vn"
| "vg"
| "vi"
| "wf"
| "eh"
| "ye"
| "zm"
| "zw"
// in addition to the ISO 3166-1-alpha-2 codes
| "gbeng"
| "gbnir"
| "gbsct"
| "gbwls"
| "gbzet";

export type ICountryName = 
  | "Afghanistan"
  | "\u00c5land Islands"
  | "Albania"
  | "Algeria"
  | "American Samoa"
  | "Andorra"
  | "Angola"
  | "Anguilla"
  | "Antarctica"
  | "Antigua and Barbuda"
  | "Argentina"
  | "Armenia"
  | "Aruba"
  | "Australia"
  | "Austria"
  | "Azerbaijan"
  | "Bahamas"
  | "Bahrain"
  | "Bangladesh"
  | "Barbados"
  | "Belarus"
  | "Belgium"
  | "Belize"
  | "Benin"
  | "Bermuda"
  | "Bhutan"
  | "Bolivia, Plurinational State of"
  | "Bonaire, Sint Eustatius and Saba"
  | "Bosnia and Herzegovina"
  | "Botswana"
  | "Bouvet Island"
  | "Brazil"
  | "British Indian Ocean Territory"
  | "Brunei Darussalam"
  | "Bulgaria"
  | "Burkina Faso"
  | "Burundi"
  | "Cambodia"
  | "Cameroon"
  | "Canada"
  | "Cape Verde"
  | "Cayman Islands"
  | "Central African Republic"
  | "Chad"
  | "Chile"
  | "China"
  | "Christmas Island"
  | "Cocos (Keeling) Islands"
  | "Colombia"
  | "Comoros"
  | "Congo"
  | "Congo, the Democratic Republic of the"
  | "Cook Islands"
  | "Costa Rica"
  | "C\u00f4te d'Ivoire"
  | "Croatia"
  | "Cuba"
  | "Cura\u00e7ao"
  | "Cyprus"
  | "Czech Republic"
  | "Denmark"
  | "Djibouti"
  | "Dominica"
  | "Dominican Republic"
  | "Ecuador"
  | "Egypt"
  | "El Salvador"
  | "Equatorial Guinea"
  | "Eritrea"
  | "Estonia"
  | "Ethiopia"
  | "Falkland Islands (Malvinas)"
  | "Faroe Islands"
  | "Fiji"
  | "Finland"
  | "France"
  | "French Guiana"
  | "French Polynesia"
  | "French Southern Territories"
  | "Gabon"
  | "Gambia"
  | "Georgia"
  | "Germany"
  | "Ghana"
  | "Gibraltar"
  | "Greece"
  | "Greenland"
  | "Grenada"
  | "Guadeloupe"
  | "Guam"
  | "Guatemala"
  | "Guernsey"
  | "Guinea"
  | "Guinea-Bissau"
  | "Guyana"
  | "Haiti"
  | "Heard Island and McDonald Islands"
  | "Holy See (Vatican City State)"
  | "Honduras"
  | "Hong Kong"
  | "Hungary"
  | "Iceland"
  | "India"
  | "Indonesia"
  | "Iran, Islamic Republic of"
  | "Iraq"
  | "Ireland"
  | "Isle of Man"
  | "Israel"
  | "Italy"
  | "Jamaica"
  | "Japan"
  | "Jersey"
  | "Jordan"
  | "Kazakhstan"
  | "Kenya"
  | "Kiribati"
  | "Korea, Democratic People's Republic of"
  | "Korea, Republic of"
  | "Kuwait"
  | "Kyrgyzstan"
  | "Lao People's Democratic Republic"
  | "Latvia"
  | "Lebanon"
  | "Lesotho"
  | "Liberia"
  | "Libya"
  | "Liechtenstein"
  | "Lithuania"
  | "Luxembourg"
  | "Macao"
  | "Macedonia, the Former Yugoslav Republic of"
  | "Madagascar"
  | "Malawi"
  | "Malaysia"
  | "Maldives"
  | "Mali"
  | "Malta"
  | "Marshall Islands"
  | "Martinique"
  | "Mauritania"
  | "Mauritius"
  | "Mayotte"
  | "Mexico"
  | "Micronesia, Federated States of"
  | "Moldova, Republic of"
  | "Monaco"
  | "Mongolia"
  | "Montenegro"
  | "Montserrat"
  | "Morocco"
  | "Mozambique"
  | "Myanmar"
  | "Namibia"
  | "Nauru"
  | "Nepal"
  | "Netherlands"
  | "New Caledonia"
  | "New Zealand"
  | "Nicaragua"
  | "Niger"
  | "Nigeria"
  | "Niue"
  | "Norfolk Island"
  | "Northern Mariana Islands"
  | "Norway"
  | "Oman"
  | "Pakistan"
  | "Palau"
  | "Palestine, State of"
  | "Panama"
  | "Papua New Guinea"
  | "Paraguay"
  | "Peru"
  | "Philippines"
  | "Pitcairn"
  | "Poland"
  | "Portugal"
  | "Puerto Rico"
  | "Qatar"
  | "R\u00e9union"
  | "Romania"
  | "Russian Federation"
  | "Rwanda"
  | "Saint Barth\u00e9lemy"
  | "Saint Helena, Ascension and Tristan da Cunha"
  | "Saint Kitts and Nevis"
  | "Saint Lucia"
  | "Saint Martin (French part)"
  | "Saint Pierre and Miquelon"
  | "Saint Vincent and the Grenadines"
  | "Samoa"
  | "San Marino"
  | "Sao Tome and Principe"
  | "Saudi Arabia"
  | "Senegal"
  | "Serbia"
  | "Seychelles"
  | "Sierra Leone"
  | "Singapore"
  | "Sint Maarten (Dutch part)"
  | "Slovakia"
  | "Slovenia"
  | "Solomon Islands"
  | "Somalia"
  | "South Africa"
  | "South Georgia and the South Sandwich Islands"
  | "South Sudan"
  | "Spain"
  | "Sri Lanka"
  | "Sudan"
  | "Suriname"
  | "Svalbard and Jan Mayen"
  | "Swaziland"
  | "Sweden"
  | "Switzerland"
  | "Syrian Arab Republic"
  | "Taiwan, Province of China"
  | "Tajikistan"
  | "Tanzania, United Republic of"
  | "Thailand"
  | "Timor-Leste"
  | "Togo"
  | "Tokelau"
  | "Tonga"
  | "Trinidad and Tobago"
  | "Tunisia"
  | "Turkey"
  | "Turkmenistan"
  | "Turks and Caicos Islands"
  | "Tuvalu"
  | "Uganda"
  | "Ukraine"
  | "United Arab Emirates"
  | "United Kingdom"
  | "United States"
  | "United States Minor Outlying Islands"
  | "Uruguay"
  | "Uzbekistan"
  | "Vanuatu"
  | "Venezuela, Bolivarian Republic of"
  | "Viet Nam"
  | "Virgin Islands, British"
  | "Virgin Islands, U.S."
  | "Wallis and Futuna"
  | "Western Sahara"
  | "Yemen"
  | "Zambia"
  | "Zimbabwe"
  // in addition to the ISO 3166-1-alpha-2 codes
  | "England"
  | "Northern Ireland"
  | "Scotland"
  | "Wales"
  | "Shetland Islands";

export const CountryCodeToCountryNameMapping = new Map<string, string>([
  [
      "af",
      "Afghanistan"
  ],
  [
      "ax",
      "Åland Islands"
  ],
  [
      "al",
      "Albania"
  ],
  [
      "dz",
      "Algeria"
  ],
  [
      "as",
      "American Samoa"
  ],
  [
      "ad",
      "Andorra"
  ],
  [
      "ao",
      "Angola"
  ],
  [
      "ai",
      "Anguilla"
  ],
  [
      "aq",
      "Antarctica"
  ],
  [
      "ag",
      "Antigua and Barbuda"
  ],
  [
      "ar",
      "Argentina"
  ],
  [
      "am",
      "Armenia"
  ],
  [
      "aw",
      "Aruba"
  ],
  [
      "au",
      "Australia"
  ],
  [
      "at",
      "Austria"
  ],
  [
      "az",
      "Azerbaijan"
  ],
  [
      "bs",
      "Bahamas"
  ],
  [
      "bh",
      "Bahrain"
  ],
  [
      "bd",
      "Bangladesh"
  ],
  [
      "bb",
      "Barbados"
  ],
  [
      "by",
      "Belarus"
  ],
  [
      "be",
      "Belgium"
  ],
  [
      "bz",
      "Belize"
  ],
  [
      "bj",
      "Benin"
  ],
  [
      "bm",
      "Bermuda"
  ],
  [
      "bt",
      "Bhutan"
  ],
  [
      "bo",
      "Bolivia, Plurinational State of"
  ],
  [
      "bq",
      "Bonaire, Sint Eustatius and Saba"
  ],
  [
      "ba",
      "Bosnia and Herzegovina"
  ],
  [
      "bw",
      "Botswana"
  ],
  [
      "bv",
      "Bouvet Island"
  ],
  [
      "br",
      "Brazil"
  ],
  [
      "io",
      "British Indian Ocean Territory"
  ],
  [
      "bn",
      "Brunei Darussalam"
  ],
  [
      "bg",
      "Bulgaria"
  ],
  [
      "bf",
      "Burkina Faso"
  ],
  [
      "bi",
      "Burundi"
  ],
  [
      "kh",
      "Cambodia"
  ],
  [
      "cm",
      "Cameroon"
  ],
  [
      "ca",
      "Canada"
  ],
  [
      "cv",
      "Cape Verde"
  ],
  [
      "ky",
      "Cayman Islands"
  ],
  [
      "cf",
      "Central African Republic"
  ],
  [
      "td",
      "Chad"
  ],
  [
      "cl",
      "Chile"
  ],
  [
      "cn",
      "China"
  ],
  [
      "cx",
      "Christmas Island"
  ],
  [
      "cc",
      "Cocos (Keeling) Islands"
  ],
  [
      "co",
      "Colombia"
  ],
  [
      "km",
      "Comoros"
  ],
  [
      "cg",
      "Congo"
  ],
  [
      "cd",
      "Congo, the Democratic Republic of the"
  ],
  [
      "ck",
      "Cook Islands"
  ],
  [
      "cr",
      "Costa Rica"
  ],
  [
      "ci",
      "Côte d'Ivoire"
  ],
  [
      "hr",
      "Croatia"
  ],
  [
      "cu",
      "Cuba"
  ],
  [
      "cw",
      "Curaçao"
  ],
  [
      "cy",
      "Cyprus"
  ],
  [
      "cz",
      "Czech Republic"
  ],
  [
      "dk",
      "Denmark"
  ],
  [
      "dj",
      "Djibouti"
  ],
  [
      "dm",
      "Dominica"
  ],
  [
      "do",
      "Dominican Republic"
  ],
  [
      "ec",
      "Ecuador"
  ],
  [
      "eg",
      "Egypt"
  ],
  [
      "sv",
      "El Salvador"
  ],
  [
      "gq",
      "Equatorial Guinea"
  ],
  [
      "er",
      "Eritrea"
  ],
  [
      "ee",
      "Estonia"
  ],
  [
      "et",
      "Ethiopia"
  ],
  [
      "fk",
      "Falkland Islands (Malvinas)"
  ],
  [
      "fo",
      "Faroe Islands"
  ],
  [
      "fj",
      "Fiji"
  ],
  [
      "fi",
      "Finland"
  ],
  [
      "fr",
      "France"
  ],
  [
      "gf",
      "French Guiana"
  ],
  [
      "pf",
      "French Polynesia"
  ],
  [
      "tf",
      "French Southern Territories"
  ],
  [
      "ga",
      "Gabon"
  ],
  [
      "gm",
      "Gambia"
  ],
  [
      "ge",
      "Georgia"
  ],
  [
      "de",
      "Germany"
  ],
  [
      "gh",
      "Ghana"
  ],
  [
      "gi",
      "Gibraltar"
  ],
  [
      "gr",
      "Greece"
  ],
  [
      "gl",
      "Greenland"
  ],
  [
      "gd",
      "Grenada"
  ],
  [
      "gp",
      "Guadeloupe"
  ],
  [
      "gu",
      "Guam"
  ],
  [
      "gt",
      "Guatemala"
  ],
  [
      "gg",
      "Guernsey"
  ],
  [
      "gn",
      "Guinea"
  ],
  [
      "gw",
      "Guinea-Bissau"
  ],
  [
      "gy",
      "Guyana"
  ],
  [
      "ht",
      "Haiti"
  ],
  [
      "hm",
      "Heard Island and McDonald Islands"
  ],
  [
      "va",
      "Holy See (Vatican City State)"
  ],
  [
      "hn",
      "Honduras"
  ],
  [
      "hk",
      "Hong Kong"
  ],
  [
      "hu",
      "Hungary"
  ],
  [
      "is",
      "Iceland"
  ],
  [
      "in",
      "India"
  ],
  [
      "id",
      "Indonesia"
  ],
  [
      "ir",
      "Iran, Islamic Republic of"
  ],
  [
      "iq",
      "Iraq"
  ],
  [
      "ie",
      "Ireland"
  ],
  [
      "im",
      "Isle of Man"
  ],
  [
      "il",
      "Israel"
  ],
  [
      "it",
      "Italy"
  ],
  [
      "jm",
      "Jamaica"
  ],
  [
      "jp",
      "Japan"
  ],
  [
      "je",
      "Jersey"
  ],
  [
      "jo",
      "Jordan"
  ],
  [
      "kz",
      "Kazakhstan"
  ],
  [
      "ke",
      "Kenya"
  ],
  [
      "ki",
      "Kiribati"
  ],
  [
      "kp",
      "Korea, Democratic People's Republic of"
  ],
  [
      "kr",
      "Korea, Republic of"
  ],
  [
      "kw",
      "Kuwait"
  ],
  [
      "kg",
      "Kyrgyzstan"
  ],
  [
      "la",
      "Lao People's Democratic Republic"
  ],
  [
      "lv",
      "Latvia"
  ],
  [
      "lb",
      "Lebanon"
  ],
  [
      "ls",
      "Lesotho"
  ],
  [
      "lr",
      "Liberia"
  ],
  [
      "ly",
      "Libya"
  ],
  [
      "li",
      "Liechtenstein"
  ],
  [
      "lt",
      "Lithuania"
  ],
  [
      "lu",
      "Luxembourg"
  ],
  [
      "mo",
      "Macao"
  ],
  [
      "mk",
      "Macedonia, the Former Yugoslav Republic of"
  ],
  [
      "mg",
      "Madagascar"
  ],
  [
      "mw",
      "Malawi"
  ],
  [
      "my",
      "Malaysia"
  ],
  [
      "mv",
      "Maldives"
  ],
  [
      "ml",
      "Mali"
  ],
  [
      "mt",
      "Malta"
  ],
  [
      "mh",
      "Marshall Islands"
  ],
  [
      "mq",
      "Martinique"
  ],
  [
      "mr",
      "Mauritania"
  ],
  [
      "mu",
      "Mauritius"
  ],
  [
      "yt",
      "Mayotte"
  ],
  [
      "mx",
      "Mexico"
  ],
  [
      "fm",
      "Micronesia, Federated States of"
  ],
  [
      "md",
      "Moldova, Republic of"
  ],
  [
      "mc",
      "Monaco"
  ],
  [
      "mn",
      "Mongolia"
  ],
  [
      "me",
      "Montenegro"
  ],
  [
      "ms",
      "Montserrat"
  ],
  [
      "ma",
      "Morocco"
  ],
  [
      "mz",
      "Mozambique"
  ],
  [
      "mm",
      "Myanmar"
  ],
  [
      "na",
      "Namibia"
  ],
  [
      "nr",
      "Nauru"
  ],
  [
      "np",
      "Nepal"
  ],
  [
      "nl",
      "Netherlands"
  ],
  [
      "nc",
      "New Caledonia"
  ],
  [
      "nz",
      "New Zealand"
  ],
  [
      "ni",
      "Nicaragua"
  ],
  [
      "ne",
      "Niger"
  ],
  [
      "ng",
      "Nigeria"
  ],
  [
      "nu",
      "Niue"
  ],
  [
      "nf",
      "Norfolk Island"
  ],
  [
      "mp",
      "Northern Mariana Islands"
  ],
  [
      "no",
      "Norway"
  ],
  [
      "om",
      "Oman"
  ],
  [
      "pk",
      "Pakistan"
  ],
  [
      "pw",
      "Palau"
  ],
  [
      "ps",
      "Palestine, State of"
  ],
  [
      "pa",
      "Panama"
  ],
  [
      "pg",
      "Papua New Guinea"
  ],
  [
      "py",
      "Paraguay"
  ],
  [
      "pe",
      "Peru"
  ],
  [
      "ph",
      "Philippines"
  ],
  [
      "pn",
      "Pitcairn"
  ],
  [
      "pl",
      "Poland"
  ],
  [
      "pt",
      "Portugal"
  ],
  [
      "pr",
      "Puerto Rico"
  ],
  [
      "qa",
      "Qatar"
  ],
  [
      "re",
      "Réunion"
  ],
  [
      "ro",
      "Romania"
  ],
  [
      "ru",
      "Russian Federation"
  ],
  [
      "rw",
      "Rwanda"
  ],
  [
      "bl",
      "Saint Barthélemy"
  ],
  [
      "sh",
      "Saint Helena, Ascension and Tristan da Cunha"
  ],
  [
      "kn",
      "Saint Kitts and Nevis"
  ],
  [
      "lc",
      "Saint Lucia"
  ],
  [
      "mf",
      "Saint Martin (French part)"
  ],
  [
      "pm",
      "Saint Pierre and Miquelon"
  ],
  [
      "vc",
      "Saint Vincent and the Grenadines"
  ],
  [
      "ws",
      "Samoa"
  ],
  [
      "sm",
      "San Marino"
  ],
  [
      "st",
      "Sao Tome and Principe"
  ],
  [
      "sa",
      "Saudi Arabia"
  ],
  [
      "sn",
      "Senegal"
  ],
  [
      "rs",
      "Serbia"
  ],
  [
      "sc",
      "Seychelles"
  ],
  [
      "sl",
      "Sierra Leone"
  ],
  [
      "sg",
      "Singapore"
  ],
  [
      "sx",
      "Sint Maarten (Dutch part)"
  ],
  [
      "sk",
      "Slovakia"
  ],
  [
      "si",
      "Slovenia"
  ],
  [
      "sb",
      "Solomon Islands"
  ],
  [
      "so",
      "Somalia"
  ],
  [
      "za",
      "South Africa"
  ],
  [
      "gs",
      "South Georgia and the South Sandwich Islands"
  ],
  [
      "ss",
      "South Sudan"
  ],
  [
      "es",
      "Spain"
  ],
  [
      "lk",
      "Sri Lanka"
  ],
  [
      "sd",
      "Sudan"
  ],
  [
      "sr",
      "Suriname"
  ],
  [
      "sj",
      "Svalbard and Jan Mayen"
  ],
  [
      "sz",
      "Swaziland"
  ],
  [
      "se",
      "Sweden"
  ],
  [
      "ch",
      "Switzerland"
  ],
  [
      "sy",
      "Syrian Arab Republic"
  ],
  [
      "tw",
      "Taiwan, Province of China"
  ],
  [
      "tj",
      "Tajikistan"
  ],
  [
      "tz",
      "Tanzania, United Republic of"
  ],
  [
      "th",
      "Thailand"
  ],
  [
      "tl",
      "Timor-Leste"
  ],
  [
      "tg",
      "Togo"
  ],
  [
      "tk",
      "Tokelau"
  ],
  [
      "to",
      "Tonga"
  ],
  [
      "tt",
      "Trinidad and Tobago"
  ],
  [
      "tn",
      "Tunisia"
  ],
  [
      "tr",
      "Turkey"
  ],
  [
      "tm",
      "Turkmenistan"
  ],
  [
      "tc",
      "Turks and Caicos Islands"
  ],
  [
      "tv",
      "Tuvalu"
  ],
  [
      "ug",
      "Uganda"
  ],
  [
      "ua",
      "Ukraine"
  ],
  [
      "ae",
      "United Arab Emirates"
  ],
  [
      "gb",
      "United Kingdom"
  ],
  [
      "us",
      "United States"
  ],
  [
      "um",
      "United States Minor Outlying Islands"
  ],
  [
      "uy",
      "Uruguay"
  ],
  [
      "uz",
      "Uzbekistan"
  ],
  [
      "vu",
      "Vanuatu"
  ],
  [
      "ve",
      "Venezuela, Bolivarian Republic of"
  ],
  [
      "vn",
      "Viet Nam"
  ],
  [
      "vg",
      "Virgin Islands, British"
  ],
  [
      "vi",
      "Virgin Islands, U.S."
  ],
  [
      "wf",
      "Wallis and Futuna"
  ],
  [
      "eh",
      "Western Sahara"
  ],
  [
      "ye",
      "Yemen"
  ],
  [
      "zm",
      "Zambia"
  ],
  [
      "zw",
      "Zimbabwe"
  ],
  // in addition to the ISO 3166-1-alpha-2 codes
  [
    "gbeng",
    "England"
  ],
  [
    "gbnir",
    "Northern Ireland"
  ],
  [
    "gbsct",
    "Scotland"
  ],
  [
    "gbwls",
    "Wales"
  ],
  [
    "gbzet",
    "Shetland Islands"
  ],
]) as Map<ICountryCode, ICountryName>;

export interface IFlag {
  countryCode: ICountryCode | string;
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
}
