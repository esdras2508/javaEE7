// A shared ISO countries

angular.module('isoCountries', [])
    .factory( 'isoCountries', function ($rootScope) {
        var isoCountries = { };

        isoCountries.countryToCodeArrayMap = [
            { "country": "United Kingdom - Citizen", "code":  "GBR" },
            { "country": "United Kingdom - Dependent territories citizen", "code":  "GBD" },
            { "country": "United Kingdom - National (overseas)", "code":  "GBN" },
            { "country": "United Kingdom - Overseas citizen", "code":  "GBO" },
            { "country": "United Kingdom - Protected Person", "code":  "GBP" },
            { "country": "United Kingdom - Subject", "code":  "GBS" },
            { "country": "Afghanistan", "code":  "AFG" },
            { "country": "Albania", "code":  "ALB" },
            { "country": "Algeria", "code":  "DZA" },
            { "country": "American Samoa", "code":  "ASM" },
            { "country": "Andorra", "code":  "AND" },
            { "country": "Angola", "code":  "AGO" },
            { "country": "Anguilla", "code":  "AIA" },
            { "country": "Antarctica", "code":  "ATA" },
            { "country": "Antigua and Barbuda", "code":  "ATG" },
            { "country": "Argentina", "code":  "ARG" },
            { "country": "Armenia", "code":  "ARM" },
            { "country": "Aruba", "code":  "ABW" },
            { "country": "Australia", "code":  "AUS" },
            { "country": "Austria", "code":  "AUT" },
            { "country": "Azerbaijan", "code":  "AZE" },
            { "country": "Bahamas", "code":  "BHS" },
            { "country": "Bahrain", "code":  "BHR" },
            { "country": "Bangladesh", "code":  "BGD" },
            { "country": "Barbados", "code":  "BRB" },
            { "country": "Belarus", "code":  "BLR" },
            { "country": "Belgium", "code":  "BEL" },
            { "country": "Belize", "code":  "BLZ" },
            { "country": "Benin", "code":  "BEN" },
            { "country": "Bermuda", "code":  "BMU" },
            { "country": "Bhutan", "code":  "BTN" },
            { "country": "Bolivia", "code":  "BOL" },
            { "country": "Bosnia and Herzegovina", "code":  "BIH" },
            { "country": "Botswana", "code":  "BWA" },
            { "country": "Bouvet Island", "code":  "BVT" },
            { "country": "Brazil", "code":  "BRA" },
            { "country": "British Indian Ocean Territory", "code":  "IOT" },
            { "country": "Brunei Darussalam", "code":  "BRN" },
            { "country": "Bulgaria", "code":  "BGR" },
            { "country": "Burkina Faso", "code":  "BFA" },
            { "country": "Burundi", "code":  "BDI" },
            { "country": "Cambodia", "code":  "KHM" },
            { "country": "Cameroon", "code":  "CMR" },
            { "country": "Canada", "code":  "CAN" },
            { "country": "Cape Verde", "code":  "CPV" },
            { "country": "Cayman Islands", "code":  "CYM" },
            { "country": "Central African Republic", "code":  "CAF" },
            { "country": "Chad", "code":  "TCD" },
            { "country": "Chile", "code":  "CHL" },
            { "country": "China", "code":  "CHN" },
            { "country": "Christmas Island", "code":  "CXR" },
            { "country": "Cocos (Keeling) Islands", "code":  "CCK" },
            { "country": "Colombia", "code":  "COL" },
            { "country": "Comoros", "code":  "COM" },
            { "country": "Congo", "code":  "COG" },
            { "country": "Cook Islands", "code":  "COK" },
            { "country": "Costa Rica", "code":  "CRI" },
            { "country": "Croatia", "code":  "HRV" },
            { "country": "Cuba", "code":  "CUB" },
            { "country": "Cyprus", "code":  "CYP" },
            { "country": "Czech Republic", "code":  "CZE" },
            { "country": "Côte d'Ivoire", "code":  "CIV" },
            { "country": "Democratic People's Republic of Korea", "code":  "PRK" },
            { "country": "Democratic Republic of the Congo", "code":  "COD" },
            { "country": "Denmark", "code":  "DNK" },
            { "country": "Djibouti", "code":  "DJI" },
            { "country": "Dominica", "code":  "DMA" },
            { "country": "Dominican Republic", "code":  "DOM" },
            { "country": "East Timor", "code":  "TMP" },
            { "country": "Ecuador", "code":  "ECU" },
            { "country": "Egypt", "code":  "EGY" },
            { "country": "El Salvador", "code":  "SLV" },
            { "country": "Equatorial Guinea", "code":  "GNQ" },
            { "country": "Eritrea", "code":  "ERI" },
            { "country": "Estonia", "code":  "EST" },
            { "country": "Ethiopia", "code":  "ETH" },
            { "country": "Faeroe Islands", "code":  "FRO" },
            { "country": "Falkland Islands (Malvinas)", "code":  "FLK" },
            { "country": "Fiji", "code":  "FJI" },
            { "country": "Finland", "code":  "FIN" },
            { "country": "France", "code":  "FRA" },
            { "country": "France, Metropolitan", "code":  "FXX" },
            { "country": "French Guiana", "code":  "GUF" },
            { "country": "French Polynesia", "code":  "PYF" },
            { "country": "Gabon", "code":  "GAB" },
            { "country": "Gambia", "code":  "GMB" },
            { "country": "Georgia", "code":  "GEO" },
            { "country": "Germany", "code":  "D" },
            { "country": "Ghana", "code":  "GHA" },
            { "country": "Gibraltar", "code":  "GIB" },
            { "country": "Greece", "code":  "GRC" },
            { "country": "Greenland", "code":  "GRL" },
            { "country": "Grenada", "code":  "GRD" },
            { "country": "Guadeloupe", "code":  "GLP" },
            { "country": "Guam", "code":  "GUM" },
            { "country": "Guatemala", "code":  "GTM" },
            { "country": "Guinea", "code":  "GIN" },
            { "country": "Guinea-Bissau", "code":  "GNB" },
            { "country": "Guyana", "code":  "GUY" },
            { "country": "Haiti", "code":  "HTI" },
            { "country": "Heard and McDonald Islands", "code":  "HMD" },
            { "country": "Holy See (Vatican City State)", "code":  "VAT" },
            { "country": "Honduras", "code":  "HND" },
            { "country": "Hong Kong", "code":  "HKG" },
            { "country": "Hungary", "code":  "HUN" },
            { "country": "Iceland", "code":  "ISL" },
            { "country": "India", "code":  "IND" },
            { "country": "Indonesia", "code":  "IDN" },
            { "country": "Iran, Islamic Republic of", "code":  "IRN" },
            { "country": "Iraq", "code":  "IRQ" },
            { "country": "Ireland", "code":  "IRL" },
            { "country": "Israel", "code":  "ISR" },
            { "country": "Italy", "code":  "ITA" },
            { "country": "Jamaica", "code":  "JAM" },
            { "country": "Japan", "code":  "JPN" },
            { "country": "Jordan", "code":  "JOR" },
            { "country": "Kazakhstan", "code":  "KAZ" },
            { "country": "Kenya", "code":  "KEN" },
            { "country": "Kiribati", "code":  "KIR" },
            { "country": "Kuwait", "code":  "KWT" },
            { "country": "Kyrgyzstan", "code":  "KGZ" },
            { "country": "Lao People's Democratic Republic", "code":  "LAO" },
            { "country": "Latvia", "code":  "LVA" },
            { "country": "Lebanon", "code":  "LBN" },
            { "country": "Lesotho", "code":  "LSO" },
            { "country": "Liberia", "code":  "LBR" },
            { "country": "Libyan Arab Jamahiriya", "code":  "LBY" },
            { "country": "Liechtenstein", "code":  "LIE" },
            { "country": "Lithuania", "code":  "LTU" },
            { "country": "Luxembourg", "code":  "LUX" },
            { "country": "Madagascar", "code":  "MDG" },
            { "country": "Malawi", "code":  "MWI" },
            { "country": "Malaysia", "code":  "MYS" },
            { "country": "Maldives", "code":  "MDV" },
            { "country": "Mali", "code":  "MLI" },
            { "country": "Malta", "code":  "MLT" },
            { "country": "Marshall Islands", "code":  "MHL" },
            { "country": "Martinique", "code":  "MTQ" },
            { "country": "Mauritania", "code":  "MRT" },
            { "country": "Mauritius", "code":  "MUS" },
            { "country": "Mayotte", "code":  "MYT" },
            { "country": "Mexico", "code":  "MEX" },
            { "country": "Micronesia, Federated States of", "code":  "FSM" },
            { "country": "Monaco", "code":  "MCO" },
            { "country": "Mongolia", "code":  "MNG" },
            { "country": "Montserrat", "code":  "MSR" },
            { "country": "Morocco", "code":  "MAR" },
            { "country": "Mozambique", "code":  "MOZ" },
            { "country": "Myanmar", "code":  "MMR" },
            { "country": "Namibia", "code":  "NAM" },
            { "country": "Nauru", "code":  "NRU" },
            { "country": "Nepal", "code":  "NPL" },
            { "country": "Netherlands Antilles", "code":  "ANT" },
            { "country": "Netherlands, Kingdom of the", "code":  "NLD" },
            { "country": "Neutral Zone", "code":  "NTZ" },
            { "country": "New Caledonia", "code":  "NCL" },
            { "country": "New Zealand", "code":  "NZL" },
            { "country": "Nicaragua", "code":  "NIC" },
            { "country": "Niger", "code":  "NER" },
            { "country": "Nigeria", "code":  "NGA" },
            { "country": "Niue", "code":  "NIU" },
            { "country": "Norfolk Island", "code":  "NFK" },
            { "country": "Northern Mariana Islands", "code":  "MNP" },
            { "country": "Norway", "code":  "NOR" },
            { "country": "Oman", "code":  "OMN" },
            { "country": "Pakistan", "code":  "PAK" },
            { "country": "Palau", "code":  "PLW" },
            { "country": "Panama", "code":  "PAN" },
            { "country": "Papua New Guinea", "code":  "PNG" },
            { "country": "Paraguay", "code":  "PRY" },
            { "country": "Peru", "code":  "PER" },
            { "country": "Philippines", "code":  "PHL" },
            { "country": "Pitcairn", "code":  "PCN" },
            { "country": "Poland", "code":  "POL" },
            { "country": "Portugal", "code":  "PRT" },
            { "country": "Puerto Rico", "code":  "PRI" },
            { "country": "Qatar", "code":  "QAT" },
            { "country": "Refugee (non-convention)", "code":  "XXC" },
            { "country": "Republic of Korea", "code":  "KOR" },
            { "country": "Republic of Moldova", "code":  "MDA" },
            { "country": "Romania", "code":  "ROM" },
            { "country": "Russian Federation", "code":  "RUS" },
            { "country": "Rwanda", "code":  "RWA" },
            { "country": "Réunion", "code":  "REU" },
            { "country": "Saint Helena", "code":  "SHN" },
            { "country": "Saint Kitts and Nevis", "code":  "KNA" },
            { "country": "Saint Lucia", "code":  "LCA" },
            { "country": "Saint Pierre and Miquelon", "code":  "SPM" },
            { "country": "Saint Vincent and the Grenadines", "code":  "VCT" },
            { "country": "Samoa", "code":  "WSM" },
            { "country": "San Marino", "code":  "SMR" },
            { "country": "Sao Tome and Principe", "code":  "STP" },
            { "country": "Saudi Arabia", "code":  "SAU" },
            { "country": "Senegal", "code":  "SEN" },
            { "country": "Seychelles", "code":  "SYC" },
            { "country": "Sierra Leone", "code":  "SLE" },
            { "country": "Singapore", "code":  "SGP" },
            { "country": "Slovakia", "code":  "SVK" },
            { "country": "Slovenia", "code":  "SVN" },
            { "country": "Solomon Islands", "code":  "SLB" },
            { "country": "Somalia", "code":  "SOM" },
            { "country": "South Africa", "code":  "ZAF" },
            { "country": "South Georgia and the South Sandwich Island", "code":  "SGS" },
            { "country": "Spain", "code":  "ESP" },
            { "country": "Sri Lanka", "code":  "LKA" },
            { "country": "Stateless (per Article 1 of 1954 convention)", "code":  "XXA" },
            { "country": "Sudan", "code":  "SDN" },
            { "country": "Suriname", "code":  "SUR" },
            { "country": "Svalbard and Jan Mayen Islands", "code":  "SJM" },
            { "country": "Swaziland", "code":  "SWZ" },
            { "country": "Sweden", "code":  "SWE" },
            { "country": "Switzerland", "code":  "CHE" },
            { "country": "Syrian Arab Republic", "code":  "SYR" },
            { "country": "Taiwan Province of China", "code":  "TWN" },
            { "country": "Tajikistan", "code":  "TJK" },
            { "country": "Thailand", "code":  "THA" },
            { "country": "The former Yugoslav Republic of Macedonia", "code":  "MKD" },
            { "country": "Togo", "code":  "TGO" },
            { "country": "Tokelau", "code":  "TKL" },
            { "country": "Tonga", "code":  "TON" },
            { "country": "Trinidad and Tobago", "code":  "TTO" },
            { "country": "Tunisia", "code":  "TUN" },
            { "country": "Turkey", "code":  "TUR" },
            { "country": "Turkmenistan", "code":  "TKM" },
            { "country": "Turks and Caicos Islands", "code":  "TCA" },
            { "country": "Tuvalu", "code":  "TUV" },
            { "country": "Uganda", "code":  "UGA" },
            { "country": "Ukraine", "code":  "UKR" },
            { "country": "United Arab Emirates", "code":  "ARE" },
            { "country": "United Republic of Tanzania", "code":  "TZA" },
            { "country": "United States of America", "code":  "USA" },
            { "country": "United States of America Minor Outlying Islands", "code":  "UMI" },
            { "country": "Unspecified / Unknown", "code":  "XXX" },
            { "country": "Uruguay", "code":  "URY" },
            { "country": "Uzbekistan", "code":  "UZB" },
            { "country": "Vanuatu", "code":  "VUT" },
            { "country": "Venezuela", "code":  "VEN" },
            { "country": "Viet Nam", "code":  "VNM" },
            { "country": "Virgin Islands (Great Britian)", "code":  "VGB" },
            { "country": "Virgin Islands (United States)", "code":  "VIR" },
            { "country": "Wallis and Futuna Islands", "code":  "WLF" },
            { "country": "Western Sahara", "code":  "ESH" },
            { "country": "Yemen", "code":  "YEM" },
            { "country": "Zaire", "code":  "ZAR" },
            { "country": "Zambia", "code":  "ZMB" },
            { "country": "Zimbabwe", "code":  "ZWE" },
            { "country": "amended by 1967 protocol)", "code":  "XXB" },
            { "country": "indicates an UN offical)", "code":  "UNO" },
            { "country": "specialized agency official", "code":  "UNA" },
        ];



        isoCountries.codeToCountryArrayMap = [
            { "code": "ABW", "country":  "Aruba" },
            { "code": "AFG", "country":  "Afghanistan" },
            { "code": "AGO", "country":  "Angola" },
            { "code": "AIA", "country":  "Anguilla" },
            { "code": "ALB", "country":  "Albania" },
            { "code": "AND", "country":  "Andorra" },
            { "code": "ANT", "country":  "Netherlands Antilles" },
            { "code": "ARE", "country":  "United Arab Emirates" },
            { "code": "ARG", "country":  "Argentina" },
            { "code": "ARM", "country":  "Armenia" },
            { "code": "ASM", "country":  "American Samoa" },
            { "code": "ATA", "country":  "Antarctica" },
            { "code": "ATG", "country":  "Antigua and Barbuda" },
            { "code": "AUS", "country":  "Australia" },
            { "code": "AUT", "country":  "Austria" },
            { "code": "AZE", "country":  "Azerbaijan" },
            { "code": "BDI", "country":  "Burundi" },
            { "code": "BEL", "country":  "Belgium" },
            { "code": "BEN", "country":  "Benin" },
            { "code": "BFA", "country":  "Burkina Faso" },
            { "code": "BGD", "country":  "Bangladesh" },
            { "code": "BGR", "country":  "Bulgaria" },
            { "code": "BHR", "country":  "Bahrain" },
            { "code": "BHS", "country":  "Bahamas" },
            { "code": "BIH", "country":  "Bosnia and Herzegovina" },
            { "code": "BLR", "country":  "Belarus" },
            { "code": "BLZ", "country":  "Belize" },
            { "code": "BMU", "country":  "Bermuda" },
            { "code": "BOL", "country":  "Bolivia" },
            { "code": "BRA", "country":  "Brazil" },
            { "code": "BRB", "country":  "Barbados" },
            { "code": "BRN", "country":  "Brunei Darussalam" },
            { "code": "BTN", "country":  "Bhutan" },
            { "code": "BVT", "country":  "Bouvet Island" },
            { "code": "BWA", "country":  "Botswana" },
            { "code": "CAF", "country":  "Central African Republic" },
            { "code": "CAN", "country":  "Canada" },
            { "code": "CCK", "country":  "Cocos (Keeling) Islands" },
            { "code": "CHE", "country":  "Switzerland" },
            { "code": "CHL", "country":  "Chile" },
            { "code": "CHN", "country":  "China" },
            { "code": "CIV", "country":  "Côte d'Ivoire" },
            { "code": "CMR", "country":  "Cameroon" },
            { "code": "COD", "country":  "Democratic Republic of the Congo" },
            { "code": "COG", "country":  "Congo" },
            { "code": "COK", "country":  "Cook Islands" },
            { "code": "COL", "country":  "Colombia" },
            { "code": "COM", "country":  "Comoros" },
            { "code": "CPV", "country":  "Cape Verde" },
            { "code": "CRI", "country":  "Costa Rica" },
            { "code": "CUB", "country":  "Cuba" },
            { "code": "CXR", "country":  "Christmas Island" },
            { "code": "CYM", "country":  "Cayman Islands" },
            { "code": "CYP", "country":  "Cyprus" },
            { "code": "CZE", "country":  "Czech Republic" },
            { "code": "D", "country":  "Germany" },
            { "code": "DJI", "country":  "Djibouti" },
            { "code": "DMA", "country":  "Dominica" },
            { "code": "DNK", "country":  "Denmark" },
            { "code": "DOM", "country":  "Dominican Republic" },
            { "code": "DZA", "country":  "Algeria" },
            { "code": "ECU", "country":  "Ecuador" },
            { "code": "EGY", "country":  "Egypt" },
            { "code": "ERI", "country":  "Eritrea" },
            { "code": "ESH", "country":  "Western Sahara" },
            { "code": "ESP", "country":  "Spain" },
            { "code": "EST", "country":  "Estonia" },
            { "code": "ETH", "country":  "Ethiopia" },
            { "code": "FIN", "country":  "Finland" },
            { "code": "FJI", "country":  "Fiji" },
            { "code": "FLK", "country":  "Falkland Islands (Malvinas)" },
            { "code": "FRA", "country":  "France" },
            { "code": "FRO", "country":  "Faeroe Islands" },
            { "code": "FSM", "country":  "Micronesia, Federated States of" },
            { "code": "FXX", "country":  "France, Metropolitan" },
            { "code": "GAB", "country":  "Gabon" },
            { "code": "GBD", "country":  "United Kingdom - Dependent territories citizen" },
            { "code": "GBN", "country":  "United Kingdom - National (overseas)" },
            { "code": "GBO", "country":  "United Kingdom - Overseas citizen" },
            { "code": "GBP", "country":  "United Kingdom - Protected Person" },
            { "code": "GBR", "country":  "United Kingdom - Citizen" },
            { "code": "GBS", "country":  "United Kingdom - Subject" },
            { "code": "GEO", "country":  "Georgia" },
            { "code": "GHA", "country":  "Ghana" },
            { "code": "GIB", "country":  "Gibraltar" },
            { "code": "GIN", "country":  "Guinea" },
            { "code": "GLP", "country":  "Guadeloupe" },
            { "code": "GMB", "country":  "Gambia" },
            { "code": "GNB", "country":  "Guinea-Bissau" },
            { "code": "GNQ", "country":  "Equatorial Guinea" },
            { "code": "GRC", "country":  "Greece" },
            { "code": "GRD", "country":  "Grenada" },
            { "code": "GRL", "country":  "Greenland" },
            { "code": "GTM", "country":  "Guatemala" },
            { "code": "GUF", "country":  "French Guiana" },
            { "code": "GUM", "country":  "Guam" },
            { "code": "GUY", "country":  "Guyana" },
            { "code": "HKG", "country":  "Hong Kong" },
            { "code": "HMD", "country":  "Heard and McDonald Islands" },
            { "code": "HND", "country":  "Honduras" },
            { "code": "HRV", "country":  "Croatia" },
            { "code": "HTI", "country":  "Haiti" },
            { "code": "HUN", "country":  "Hungary" },
            { "code": "IDN", "country":  "Indonesia" },
            { "code": "IND", "country":  "India" },
            { "code": "IOT", "country":  "British Indian Ocean Territory" },
            { "code": "IRL", "country":  "Ireland" },
            { "code": "IRN", "country":  "Iran, Islamic Republic of" },
            { "code": "IRQ", "country":  "Iraq" },
            { "code": "ISL", "country":  "Iceland" },
            { "code": "ISR", "country":  "Israel" },
            { "code": "ITA", "country":  "Italy" },
            { "code": "JAM", "country":  "Jamaica" },
            { "code": "JOR", "country":  "Jordan" },
            { "code": "JPN", "country":  "Japan" },
            { "code": "KAZ", "country":  "Kazakhstan" },
            { "code": "KEN", "country":  "Kenya" },
            { "code": "KGZ", "country":  "Kyrgyzstan" },
            { "code": "KHM", "country":  "Cambodia" },
            { "code": "KIR", "country":  "Kiribati" },
            { "code": "KNA", "country":  "Saint Kitts and Nevis" },
            { "code": "KOR", "country":  "Republic of Korea" },
            { "code": "KWT", "country":  "Kuwait" },
            { "code": "LAO", "country":  "Lao People's Democratic Republic" },
            { "code": "LBN", "country":  "Lebanon" },
            { "code": "LBR", "country":  "Liberia" },
            { "code": "LBY", "country":  "Libyan Arab Jamahiriya" },
            { "code": "LCA", "country":  "Saint Lucia" },
            { "code": "LIE", "country":  "Liechtenstein" },
            { "code": "LKA", "country":  "Sri Lanka" },
            { "code": "LSO", "country":  "Lesotho" },
            { "code": "LTU", "country":  "Lithuania" },
            { "code": "LUX", "country":  "Luxembourg" },
            { "code": "LVA", "country":  "Latvia" },
            { "code": "MAR", "country":  "Morocco" },
            { "code": "MCO", "country":  "Monaco" },
            { "code": "MDA", "country":  "Republic of Moldova" },
            { "code": "MDG", "country":  "Madagascar" },
            { "code": "MDV", "country":  "Maldives" },
            { "code": "MEX", "country":  "Mexico" },
            { "code": "MHL", "country":  "Marshall Islands" },
            { "code": "MKD", "country":  "The former Yugoslav Republic of Macedonia" },
            { "code": "MLI", "country":  "Mali" },
            { "code": "MLT", "country":  "Malta" },
            { "code": "MMR", "country":  "Myanmar" },
            { "code": "MNG", "country":  "Mongolia" },
            { "code": "MNP", "country":  "Northern Mariana Islands" },
            { "code": "MOZ", "country":  "Mozambique" },
            { "code": "MRT", "country":  "Mauritania" },
            { "code": "MSR", "country":  "Montserrat" },
            { "code": "MTQ", "country":  "Martinique" },
            { "code": "MUS", "country":  "Mauritius" },
            { "code": "MWI", "country":  "Malawi" },
            { "code": "MYS", "country":  "Malaysia" },
            { "code": "MYT", "country":  "Mayotte" },
            { "code": "NAM", "country":  "Namibia" },
            { "code": "NCL", "country":  "New Caledonia" },
            { "code": "NER", "country":  "Niger" },
            { "code": "NFK", "country":  "Norfolk Island" },
            { "code": "NGA", "country":  "Nigeria" },
            { "code": "NIC", "country":  "Nicaragua" },
            { "code": "NIU", "country":  "Niue" },
            { "code": "NLD", "country":  "Netherlands, Kingdom of the" },
            { "code": "NOR", "country":  "Norway" },
            { "code": "NPL", "country":  "Nepal" },
            { "code": "NRU", "country":  "Nauru" },
            { "code": "NTZ", "country":  "Neutral Zone" },
            { "code": "NZL", "country":  "New Zealand" },
            { "code": "OMN", "country":  "Oman" },
            { "code": "PAK", "country":  "Pakistan" },
            { "code": "PAN", "country":  "Panama" },
            { "code": "PCN", "country":  "Pitcairn" },
            { "code": "PER", "country":  "Peru" },
            { "code": "PHL", "country":  "Philippines" },
            { "code": "PLW", "country":  "Palau" },
            { "code": "PNG", "country":  "Papua New Guinea" },
            { "code": "POL", "country":  "Poland" },
            { "code": "PRI", "country":  "Puerto Rico" },
            { "code": "PRK", "country":  "Democratic People's Republic of Korea" },
            { "code": "PRT", "country":  "Portugal" },
            { "code": "PRY", "country":  "Paraguay" },
            { "code": "PYF", "country":  "French Polynesia" },
            { "code": "QAT", "country":  "Qatar" },
            { "code": "REU", "country":  "Réunion" },
            { "code": "ROM", "country":  "Romania" },
            { "code": "RUS", "country":  "Russian Federation" },
            { "code": "RWA", "country":  "Rwanda" },
            { "code": "SAU", "country":  "Saudi Arabia" },
            { "code": "SDN", "country":  "Sudan" },
            { "code": "SEN", "country":  "Senegal" },
            { "code": "SGP", "country":  "Singapore" },
            { "code": "SGS", "country":  "South Georgia and the South Sandwich Island" },
            { "code": "SHN", "country":  "Saint Helena" },
            { "code": "SJM", "country":  "Svalbard and Jan Mayen Islands" },
            { "code": "SLB", "country":  "Solomon Islands" },
            { "code": "SLE", "country":  "Sierra Leone" },
            { "code": "SLV", "country":  "El Salvador" },
            { "code": "SMR", "country":  "San Marino" },
            { "code": "SOM", "country":  "Somalia" },
            { "code": "SPM", "country":  "Saint Pierre and Miquelon" },
            { "code": "STP", "country":  "Sao Tome and Principe" },
            { "code": "SUR", "country":  "Suriname" },
            { "code": "SVK", "country":  "Slovakia" },
            { "code": "SVN", "country":  "Slovenia" },
            { "code": "SWE", "country":  "Sweden" },
            { "code": "SWZ", "country":  "Swaziland" },
            { "code": "SYC", "country":  "Seychelles" },
            { "code": "SYR", "country":  "Syrian Arab Republic" },
            { "code": "TCA", "country":  "Turks and Caicos Islands" },
            { "code": "TCD", "country":  "Chad" },
            { "code": "TGO", "country":  "Togo" },
            { "code": "THA", "country":  "Thailand" },
            { "code": "TJK", "country":  "Tajikistan" },
            { "code": "TKL", "country":  "Tokelau" },
            { "code": "TKM", "country":  "Turkmenistan" },
            { "code": "TMP", "country":  "East Timor" },
            { "code": "TON", "country":  "Tonga" },
            { "code": "TTO", "country":  "Trinidad and Tobago" },
            { "code": "TUN", "country":  "Tunisia" },
            { "code": "TUR", "country":  "Turkey" },
            { "code": "TUV", "country":  "Tuvalu" },
            { "code": "TWN", "country":  "Taiwan Province of China" },
            { "code": "TZA", "country":  "United Republic of Tanzania" },
            { "code": "UGA", "country":  "Uganda" },
            { "code": "UKR", "country":  "Ukraine" },
            { "code": "UMI", "country":  "United States of America Minor Outlying Islands" },
            { "code": "UNA", "country":  "specialized agency official" },
            { "code": "UNO", "country":  "indicates an UN offical)" },
            { "code": "URY", "country":  "Uruguay" },
            { "code": "USA", "country":  "United States of America" },
            { "code": "UZB", "country":  "Uzbekistan" },
            { "code": "VAT", "country":  "Holy See (Vatican City State)" },
            { "code": "VCT", "country":  "Saint Vincent and the Grenadines" },
            { "code": "VEN", "country":  "Venezuela" },
            { "code": "VGB", "country":  "Virgin Islands (Great Britian)" },
            { "code": "VIR", "country":  "Virgin Islands (United States)" },
            { "code": "VNM", "country":  "Viet Nam" },
            { "code": "VUT", "country":  "Vanuatu" },
            { "code": "WLF", "country":  "Wallis and Futuna Islands" },
            { "code": "WSM", "country":  "Samoa" },
            { "code": "XXA", "country":  "Stateless (per Article 1 of 1954 convention)" },
            { "code": "XXB", "country":  "amended by 1967 protocol)" },
            { "code": "XXC", "country":  "Refugee (non-convention)" },
            { "code": "XXX", "country":  "Unspecified / Unknown" },
            { "code": "YEM", "country":  "Yemen" },
            { "code": "ZAF", "country":  "South Africa" },
            { "code": "ZAR", "country":  "Zaire" },
            { "code": "ZMB", "country":  "Zambia" },
            { "code": "ZWE", "country":  "Zimbabwe" },
        ];

        return isoCountries;
    });