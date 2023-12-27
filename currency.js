const countries = [
    {
      "name": "Christmas Island",
      "code": "AUD",
      "flag": "🇨🇽"
    },
    {
      "name": "Eritrea",
      "code": "ERN",
      "flag": "🇪🇷"
    },
    {
      "name": "Samoa",
      "code": "WST",
      "flag": "🇼🇸"
    },
    {
      "name": "North Macedonia",
      "code": "MKD",
      "flag": "🇲🇰"
    },
    {
      "name": "Djibouti",
      "code": "DJF",
      "flag": "🇩🇯"
    },
    {
      "name": "Jordan",
      "code": "JOD",
      "flag": "🇯🇴"
    },
    {
      "name": "Pakistan",
      "code": "PKR",
      "flag": "🇵🇰"
    },
    {
      "name": "French Polynesia",
      "code": "XPF",
      "flag": "🇵🇫"
    },
    
    {
      "name": "Mauritania",
      "code": "MRU",
      "flag": "🇲🇷"
    },
    {
      "name": "Denmark",
      "code": "DKK",
      "flag": "🇩🇰"
    },
    {
      "name": "Namibia",
      "code": "NAD",
      "flag": "🇳🇦"
    },
    {
      "name": "Ghana",
      "code": "GHS",
      "flag": "🇬🇭"
    },
    {
      "name": "South Sudan",
      "code": "SSP",
      "flag": "🇸🇸"
    },
    
   
    {
      "name": "Moldova",
      "code": "MDL",
      "flag": "🇲🇩"
    },
    {
      "name": "North Korea",
      "code": "KPW",
      "flag": "🇰🇵"
    },
    {
      "name": "Macau",
      "code": "MOP",
      "flag": "🇲🇴"
    },
    
    {
      "name": "Seychelles",
      "code": "SCR",
      "flag": "🇸🇨"
    },
    {
      "name": "Armenia",
      "code": "AMD",
      "flag": "🇦🇲"
    },
    {
      "name": "Curaçao",
      "code": "ANG",
      "flag": "🇨🇼"
    },
    
   
    {
      "name": "Equatorial Guinea",
      "code": "XAF",
      "flag": "🇬🇶"
    },
    {
      "name": "Syria",
      "code": "SYP",
      "flag": "🇸🇾"
    },
    {
      "name": "Angola",
      "code": "AOA",
      "flag": "🇦🇴"
    },
    {
      "name": "Tajikistan",
      "code": "TJS",
      "flag": "🇹🇯"
    },
    {
      "name": "Venezuela",
      "code": "VES",
      "flag": "🇻🇪"
    },
    
   
    {
      "name": "Poland",
      "code": "PLN",
      "flag": "🇵🇱"
    },
    {
      "name": "Saudi Arabia",
      "code": "SAR",
      "flag": "🇸🇦"
    },
    {
      "name": "Republic of the Congo",
      "code": "XAF",
      "flag": "🇨🇬"
    },
    {
      "name": "Bosnia and Herzegovina",
      "code": "BAM",
      "flag": "🇧🇦"
    },
    
    {
      "name": "New Caledonia",
      "code": "XPF",
      "flag": "🇳🇨"
    },
    
    {
      "name": "Czechia",
      "code": "CZK",
      "flag": "🇨🇿"
    },
    {
      "name": "Guatemala",
      "code": "GTQ",
      "flag": "🇬🇹"
    },
    {
      "name": "South Korea",
      "code": "KRW",
      "flag": "🇰🇷"
    },
   
    {
      "name": "Nepal",
      "code": "NPR",
      "flag": "🇳🇵"
    },
    
    {
      "name": "Botswana",
      "code": "BWP",
      "flag": "🇧🇼"
    },
    {
      "name": "Philippines",
      "code": "PHP",
      "flag": "🇵🇭"
    },
    
    {
      "name": "Iraq",
      "code": "IQD",
      "flag": "🇮🇶"
    },
    {
      "name": "Lebanon",
      "code": "LBP",
      "flag": "🇱🇧"
    },
    {
      "name": "Burundi",
      "code": "BIF",
      "flag": "🇧🇮"
    },
    {
      "name": "Mongolia",
      "code": "MNT",
      "flag": "🇲🇳"
    },
    {
      "name": "Faroe Islands",
      "code": "DKK",
      "flag": "🇫🇴"
    },
    {
      "name": "Paraguay",
      "code": "PYG",
      "flag": "🇵🇾"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "code": "NOK",
      "flag": "🇸🇯"
    },
    {
      "name": "Tokelau",
      "code": "NZD",
      "flag": "🇹🇰"
    },
    {
      "name": "Guernsey",
      "code": "GBP",
      "flag": "🇬🇬"
    },
   
    {
      "name": "Algeria",
      "code": "DZD",
      "flag": "🇩🇿"
    },
    {
      "name": "France",
      "code": "EUR",
      "flag": "🇫🇷"
    },
    
    {
      "name": "Greenland",
      "code": "DKK",
      "flag": "🇬🇱"
    },
    {
      "name": "Sint Maarten",
      "code": "ANG",
      "flag": "🇸🇽"
    },
    {
      "name": "Chad",
      "code": "XAF",
      "flag": "🇹🇩"
    },
    
    {
      "name": "Panama",
      "code": "PAB",
      "flag": "🇵🇦"
    },
    {
      "name": "Palestine",
      "code": "EGP",
      "flag": "🇵🇸"
    },
    {
      "name": "Yemen",
      "code": "YER",
      "flag": "🇾🇪"
    },
    {
      "name": "Brazil",
      "code": "BRL",
      "flag": "🇧🇷"
    },
    {
      "name": "Nigeria",
      "code": "NGN",
      "flag": "🇳🇬"
    },
   
    {
      "name": "Japan",
      "code": "JPY",
      "flag": "🇯🇵"
    },
    {
      "name": "Tanzania",
      "code": "TZS",
      "flag": "🇹🇿"
    },
    {
      "name": "Kazakhstan",
      "code": "KZT",
      "flag": "🇰🇿"
    },
   
    {
      "name": "South Georgia",
      "code": "SHP",
      "flag": "🇬🇸"
    },
    {
      "name": "Sri Lanka",
      "code": "LKR",
      "flag": "🇱🇰"
    },
    
    {
      "name": "Western Sahara",
      "code": "DZD",
      "flag": "🇪🇭"
    },
    {
      "name": "Myanmar",
      "code": "MMK",
      "flag": "🇲🇲"
    },
    {
      "name": "Colombia",
      "code": "COP",
      "flag": "🇨🇴"
    },
    {
      "name": "Peru",
      "code": "PEN",
      "flag": "🇵🇪"
    },
    {
      "name": "Senegal",
      "code": "XOF",
      "flag": "🇸🇳"
    },
    {
      "name": "Kyrgyzstan",
      "code": "KGS",
      "flag": "🇰🇬"
    },
    {
      "name": "China",
      "code": "CNY",
      "flag": "🇨🇳"
    },
    {
      "name": "Afghanistan",
      "code": "AFN",
      "flag": "🇦🇫"
    },
    {
      "name": "Turkey",
      "code": "TRY",
      "flag": "🇹🇷"
    },
    {
      "name": "Liberia",
      "code": "LRD",
      "flag": "🇱🇷"
    },
    {
      "name": "South Africa",
      "code": "ZAR",
      "flag": "🇿🇦"
    },
    {
      "name": "Chile",
      "code": "CLP",
      "flag": "🇨🇱"
    },
    
    {
      "name": "Kiribati",
      "code": "AUD",
      "flag": "🇰🇮"
    },
    {
      "name": "Cape Verde",
      "code": "CVE",
      "flag": "🇨🇻"
    },
    {
      "name": "Jersey",
      "code": "GBP",
      "flag": "🇯🇪"
    },
    {
      "name": "Iceland",
      "code": "ISK",
      "flag": "🇮🇸"
    },
    {
      "name": "Gambia",
      "code": "GMD",
      "flag": "🇬🇲"
    },
    {
      "name": "Vanuatu",
      "code": "VUV",
      "flag": "🇻🇺"
    },
    {
      "name": "Uruguay",
      "code": "UYU",
      "flag": "🇺🇾"
    },
    {
      "name": "Oman",
      "code": "OMR",
      "flag": "🇴🇲"
    },
    {
      "name": "Sudan",
      "code": "SDG",
      "flag": "🇸🇩"
    },
    {
      "name": "India",
      "code": "INR",
      "flag": "🇮🇳"
    },
    {
      "name": "Laos",
      "code": "LAK",
      "flag": "🇱🇦"
    },
    {
      "name": "Aruba",
      "code": "AWG",
      "flag": "🇦🇼"
    },
   
    {
      "name": "Comoros",
      "code": "KMF",
      "flag": "🇰🇲"
    },
    
    {
      "name": "Antigua and Barbuda",
      "code": "XCD",
      "flag": "🇦🇬"
    },
    {
      "name": "Uzbekistan",
      "code": "UZS",
      "flag": "🇺🇿"
    },
    {
      "name": "Maldives",
      "code": "MVR",
      "flag": "🇲🇻"
    },
    {
      "name": "Gibraltar",
      "code": "GIP",
      "flag": "🇬🇮"
    },
    {
      "name": "Indonesia",
      "code": "IDR",
      "flag": "🇮🇩"
    },
    {
      "name": "Pitcairn Islands",
      "code": "NZD",
      "flag": "🇵🇳"
    },
    {
      "name": "Vietnam",
      "code": "VND",
      "flag": "🇻🇳"
    },
    {
      "name": "Malaysia",
      "code": "MYR",
      "flag": "🇲🇾"
    },
    {
      "name": "Cook Islands",
      "code": "CKD",
      "flag": "🇨🇰"
    },
    {
      "name": "Eswatini",
      "code": "SZL",
      "flag": "🇸🇿"
    },
    {
      "name": "Uganda",
      "code": "UGX",
      "flag": "🇺🇬"
    },
    {
      "name": "Madagascar",
      "code": "MGA",
      "flag": "🇲🇬"
    },
    {
      "name": "Fiji",
      "code": "FJD",
      "flag": "🇫🇯"
    },
    {
      "name": "Norway",
      "code": "NOK",
      "flag": "🇳🇴"
    },
    {
      "name": "Antarctica",
      "flag": "🇦🇶"
    },
    {
      "name": "Bouvet Island",
      "flag": "🇧🇻"
    },
    
    {
      "name": "Taiwan",
      "code": "TWD",
      "flag": "🇹🇼"
    },
    {
      "name": "Papua New Guinea",
      "code": "PGK",
      "flag": "🇵🇬"
    },
    {
      "name": "Rwanda",
      "code": "RWF",
      "flag": "🇷🇼"
    },
    {
      "name": "DR Congo",
      "code": "CDF",
      "flag": "🇨🇩"
    },
    {
      "name": "Cameroon",
      "code": "XAF",
      "flag": "🇨🇲"
    },
    {
      "name": "Serbia",
      "code": "RSD",
      "flag": "🇷🇸"
    },
   
   
    {
      "name": "Cambodia",
      "code": "KHR",
      "flag": "🇰🇭"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "code": "GBP",
      "flag": "🇸🇭"
    },
    {
      "name": "United Arab Emirates",
      "code": "AED",
      "flag": "🇦🇪"
    },
    {
      "name": "Bermuda",
      "code": "BMD",
      "flag": "🇧🇲"
    },
   
    {
      "name": "Cuba",
      "code": "CUC",
      "flag": "🇨🇺"
    },
    {
      "name": "Hong Kong",
      "code": "HKD",
      "flag": "🇭🇰"
    },
   
    {
      "name": "Togo",
      "code": "XOF",
      "flag": "🇹🇬"
    },
    
    {
      "name": "Mauritius",
      "code": "MUR",
      "flag": "🇲🇺"
    },
    {
      "name": "Argentina",
      "code": "ARS",
      "flag": "🇦🇷"
    },
    {
      "name": "Grenada",
      "code": "XCD",
      "flag": "🇬🇩"
    },
    {
      "name": "Nicaragua",
      "code": "NIO",
      "flag": "🇳🇮"
    },
    {
      "name": "Niue",
      "code": "NZD",
      "flag": "🇳🇺"
    },
    {
      "name": "Ukraine",
      "code": "UAH",
      "flag": "🇺🇦"
    },
    {
      "name": "Guyana",
      "code": "GYD",
      "flag": "🇬🇾"
    },
    {
      "name": "Niger",
      "code": "XOF",
      "flag": "🇳🇪"
    },
    {
      "name": "Benin",
      "code": "XOF",
      "flag": "🇧🇯"
    },
    {
      "name": "Saint Lucia",
      "code": "XCD",
      "flag": "🇱🇨"
    },
    {
      "name": "Tuvalu",
      "code": "AUD",
      "flag": "🇹🇻"
    },
    {
      "name": "Norfolk Island",
      "code": "AUD",
      "flag": "🇳🇫"
    },
    {
      "name": "Egypt",
      "code": "EGP",
      "flag": "🇪🇬"
    },
    {
      "name": "Saint Kitts and Nevis",
      "code": "XCD",
      "flag": "🇰🇳"
    },
    {
      "name": "Lesotho",
      "code": "LSL",
      "flag": "🇱🇸"
    },
    {
      "name": "Tonga",
      "code": "TOP",
      "flag": "🇹🇴"
    },
    {
      "name": "Georgia",
      "code": "GEL",
      "flag": "🇬🇪"
    },
    {
      "name": "Ethiopia",
      "code": "ETB",
      "flag": "🇪🇹"
    },
    {
      "name": "Dominican Republic",
      "code": "DOP",
      "flag": "🇩🇴"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "code": "XCD",
      "flag": "🇻🇨"
    },
    {
      "name": "Belize",
      "code": "BZD",
      "flag": "🇧🇿"
    },
    {
      "name": "Isle of Man",
      "code": "GBP",
      "flag": "🇮🇲"
    },
    {
      "name": "Morocco",
      "code": "MAD",
      "flag": "🇲🇦"
    },
    {
      "name": "Haiti",
      "code": "HTG",
      "flag": "🇭🇹"
    },
    
    {
      "name": "Burkina Faso",
      "code": "XOF",
      "flag": "🇧🇫"
    },
    {
      "name": "Bangladesh",
      "code": "BDT",
      "flag": "🇧🇩"
    },
    {
      "name": "Kuwait",
      "code": "KWD",
      "flag": "🇰🇼"
    },
  
    {
      "name": "Jamaica",
      "code": "JMD",
      "flag": "🇯🇲"
    },
    {
      "name": "Romania",
      "code": "RON",
      "flag": "🇷🇴"
    },
    {
      "name": "São Tomé and Príncipe",
      "code": "STN",
      "flag": "🇸🇹"
    },
    {
      "name": "Bahamas",
      "code": "BSD",
      "flag": "🇧🇸"
    },
    {
      "name": "Mexico",
      "code": "MXN",
      "flag": "🇲🇽"
    },
   
   
    
    {
      "name": "Turkmenistan",
      "code": "TMT",
      "flag": "🇹🇲"
    },
    {
      "name": "Anguilla",
      "code": "XCD",
      "flag": "🇦🇮"
    },
    {
      "name": "Central African Republic",
      "code": "XAF",
      "flag": "🇨🇫"
    },
    {
      "name": "Suriname",
      "code": "SRD",
      "flag": "🇸🇷"
    },
    
    {
      "name": "Sweden",
      "code": "SEK",
      "flag": "🇸🇪"
    },
    {
      "name": "Bolivia",
      "code": "BOB",
      "flag": "🇧🇴"
    },
    
    {
      "name": "Mozambique",
      "code": "MZN",
      "flag": "🇲🇿"
    },
   
    {
      "name": "Malawi",
      "code": "MWK",
      "flag": "🇲🇼"
    },
    {
      "name": "Mali",
      "code": "XOF",
      "flag": "🇲🇱"
    },
    
    
    {
      "name": "Montserrat",
      "code": "XCD",
      "flag": "🇲🇸"
    },
    
    {
      "name": "Albania",
      "code": "ALL",
      "flag": "🇦🇱"
    },
   
    {
      "name": "Zambia",
      "code": "ZMW",
      "flag": "🇿🇲"
    },
   
    {
      "name": "Liechtenstein",
      "code": "CHF",
      "flag": "🇱🇮"
    },
    {
      "name": "Qatar",
      "code": "QAR",
      "flag": "🇶🇦"
    },
    {
      "name": "Solomon Islands",
      "code": "SBD",
      "flag": "🇸🇧"
    },
    {
      "name": "Nauru",
      "code": "AUD",
      "flag": "🇳🇷"
    },
   
    {
      "name": "Libya",
      "code": "LYD",
      "flag": "🇱🇾"
    },
    {
      "name": "Guinea-Bissau",
      "code": "XOF",
      "flag": "🇬🇼"
    },
    {
      "name": "Barbados",
      "code": "BBD",
      "flag": "🇧🇧"
    },
    {
      "name": "Honduras",
      "code": "HNL",
      "flag": "🇭🇳"
    },
    {
      "name": "Somalia",
      "code": "SOS",
      "flag": "🇸🇴"
    },
    {
      "name": "Cayman Islands",
      "code": "KYD",
      "flag": "🇰🇾"
    },
   
    {
      "name": "Wallis and Futuna",
      "code": "XPF",
      "flag": "🇼🇫"
    },
    
    
    
    {
      "name": "Kenya",
      "code": "KES",
      "flag": "🇰🇪"
    },
    {
      "name": "Bahrain",
      "code": "BHD",
      "flag": "🇧🇭"
    },
    {
      "name": "United Kingdom",
      "code": "GBP",
      "flag": "🇬🇧"
    },
    {
      "name": "Guinea",
      "code": "GNF",
      "flag": "🇬🇳"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "flag": "🇭🇲"
    },
    {
      "name": "Russia",
      "code": "RUB",
      "flag": "🇷🇺"
    },
    {
      "name": "Brunei",
      "code": "BND",
      "flag": "🇧🇳"
    },
    {
      "name": "Zimbabwe",
      "code": "ZWL",
      "flag": "🇿🇼"
    },
   
    {
      "name": "Australia",
      "code": "AUD",
      "flag": "🇦🇺"
    },
    
    {
      "name": "Belarus",
      "code": "BYN",
      "flag": "🇧🇾"
    },
    {
      "name": "Thailand",
      "code": "THB",
      "flag": "🇹🇭"
    },
    {
      "name": "New Zealand",
      "code": "NZD",
      "flag": "🇳🇿"
    },
    {
      "name": "Tunisia",
      "code": "TND",
      "flag": "🇹🇳"
    },
   
    {
      "name": "Sierra Leone",
      "code": "SLL",
      "flag": "🇸🇱"
    },
    {
      "name": "Bhutan",
      "code": "BTN",
      "flag": "🇧🇹"
    },
    {
      "name": "United States",
      "code": "USD",
      "flag": "🇺🇸"
    },
    {
      "name": "Switzerland",
      "code": "CHF",
      "flag": "🇨🇭"
    },
    {
      "name": "Falkland Islands",
      "code": "FKP",
      "flag": "🇫🇰"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "code": "AUD",
      "flag": "🇨🇨"
    },
    {
      "name": "Gabon",
      "code": "XAF",
      "flag": "🇬🇦"
    },
    {
      "name": "Dominica",
      "code": "XCD",
      "flag": "🇩🇲"
    },
    {
      "name": "Canada",
      "code": "CAD",
      "flag": "🇨🇦"
    },
    {
      "name": "Trinidad and Tobago",
      "code": "TTD",
      "flag": "🇹🇹"
    },
   
    {
      "name": "Singapore",
      "code": "SGD",
      "flag": "🇸🇬"
    },
    {
      "name": "Hungary",
      "code": "HUF",
      "flag": "🇭🇺"
    },
    {
      "name": "Costa Rica",
      "code": "CRC",
      "flag": "🇨🇷"
    },
    {
      "name": "Israel",
      "code": "ILS",
      "flag": "🇮🇱"
    },
    {
      "name": "Bulgaria",
      "code": "BGN",
      "flag": "🇧🇬"
    },
    {
      "name": "Azerbaijan",
      "code": "AZN",
      "flag": "🇦🇿"
    },
   
    {
      "name": "Iran",
      "code": "IRR",
      "flag": "🇮🇷"
    },
    
    {
      "name": "Ivory Coast",
      "code": "XOF",
      "flag": "🇨🇮"
    }
  ];
