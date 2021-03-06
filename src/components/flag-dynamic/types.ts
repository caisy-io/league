// corresponds to the ISO 3166-1-alpha-2 country codes. For Great Britain (GB) we also provide some sub divisions
// Source of codes and country names: https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json

export type ICountryCodeDynamic =
// updated
| "en-GB"
| "en-US"
| "fr-FR"
| "de-DE"
// end updated
// | "af"
// | "ax"
// | "al"
// | "dz"
// | "as"
// | "ad"
// | "ao"
// | "ai"
// | "aq"
// | "ag"
// | "ar"
// | "am"
// | "aw"
// | "au"
// | "at"
// | "az"
// | "bs"
// | "bh"
// | "bd"
// | "bb"
// | "by"
// | "be"
// | "bz"
// | "bj"
// | "bm"
// | "bt"
// | "bo"
// | "bq"
// | "ba"
// | "bw"
// | "bv"
// | "br"
// | "io"
// | "bn"
// | "bg"
// | "bf"
// | "bi"
// | "kh"
// | "cm"
// | "ca"
// | "cv"
// | "ky"
// | "cf"
// | "td"
// | "cl"
// | "cn"
// | "cx"
// | "cc"
// | "co"
// | "km"
// | "cg"
// | "cd"
// | "ck"
// | "cr"
// | "ci"
// | "hr"
// | "cu"
// | "cw"
// | "cy"
// | "cz"
// | "dk"
// | "dj"
// | "dm"
// | "do"
// | "ec"
// | "eg"
// | "sv"
// | "gq"
// | "er"
// | "ee"
// | "et"
// | "fk"
// | "fo"
// | "fj"
// | "fi"
// | "gf"
// | "pf"
// | "tf"
// | "ga"
// | "gm"
// | "ge"
// | "gh"
// | "gi"
// | "gr"
// | "gl"
// | "gd"
// | "gp"
// | "gu"
// | "gt"
// | "gg"
// | "gn"
// | "gw"
// | "gy"
// | "ht"
// | "hm"
// | "va"
// | "hn"
// | "hk"
// | "hu"
// | "is"
// | "in"
// | "id"
// | "ir"
// | "iq"
// | "ie"
// | "im"
// | "il"
// | "it"
// | "jm"
// | "jp"
// | "je"
// | "jo"
// | "kz"
// | "ke"
// | "ki"
// | "kp"
// | "kr"
// | "kw"
// | "kg"
// | "la"
// | "lv"
// | "lb"
// | "ls"
// | "lr"
// | "ly"
// | "li"
// | "lt"
// | "lu"
// | "mo"
// | "mk"
// | "mg"
// | "mw"
// | "my"
// | "mv"
// | "ml"
// | "mt"
// | "mh"
// | "mq"
// | "mr"
// | "mu"
// | "yt"
// | "mx"
// | "fm"
// | "md"
// | "mc"
// | "mn"
// | "me"
// | "ms"
// | "ma"
// | "mz"
// | "mm"
// | "na"
// | "nr"
// | "np"
// | "nl"
// | "nc"
// | "nz"
// | "ni"
// | "ne"
// | "ng"
// | "nu"
// | "nf"
// | "mp"
// | "no"
// | "om"
// | "pk"
// | "pw"
// | "ps"
// | "pa"
// | "pg"
// | "py"
// | "pe"
// | "ph"
// | "pn"
// | "pl"
// | "pt"
// | "pr"
// | "qa"
// | "re"
// | "ro"
// | "ru"
// | "rw"
// | "bl"
// | "sh"
// | "kn"
// | "lc"
// | "mf"
// | "pm"
// | "vc"
// | "ws"
// | "sm"
// | "st"
// | "sa"
// | "sn"
// | "rs"
// | "sc"
// | "sl"
// | "sg"
// | "sx"
// | "sk"
// | "si"
// | "sb"
// | "so"
// | "za"
// | "gs"
// | "ss"
// | "es"
// | "lk"
// | "sd"
// | "sr"
// | "sj"
// | "sz"
// | "se"
// | "ch"
// | "sy"
// | "tw"
// | "tj"
// | "tz"
// | "th"
// | "tl"
// | "tg"
// | "tk"
// | "to"
// | "tt"
// | "tn"
// | "tr"
// | "tm"
// | "tc"
// | "tv"
// | "ug"
// | "ua"
// | "ae"
// | "gb"
// | "us"
// | "um"
// | "uy"
// | "uz"
// | "vu"
// | "ve"
// | "vn"
// | "vg"
// | "vi"
// | "wf"
// | "eh"
// | "ye"
// | "zm"
// | "zw"
// // in addition to the ISO 3166-1-alpha-2 codes
// | "gbeng"
// | "gbnir"
// | "gbsct"
// | "gbwls"
// | "gbzet"
;

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

export interface IFlagDynamic {
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
  children?: any;
}
