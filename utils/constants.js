import {
  _get_admin_time_zone_localStorage,
  _get_user_from_localStorage,
} from "../DAL/localStorage/localStorage";

export const get_date_with_user_time_zone = (
  date,
  format,
  user_time_zone,
  admin_time_zone
) => {
  if (!date || !format || !user_time_zone) {
    return "-";
  }
  var moment = require("moment-timezone");
  var admin_date_time = moment.tz(date, admin_time_zone);
  var user_date_time = admin_date_time.clone().tz(user_time_zone);
  return user_date_time.format(format);
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertCurrencyToSign = (currency) => {
  if (currency === "gbp" || currency === "GBP") {
    return "£";
  } else if (currency === "eur" || currency === "EUR") {
    return "€";
  } else if (currency === "usd" || currency === "USD") {
    return "$";
  } else {
    return "";
  }
};

export const convertPaymentPeriod = (time_period) => {
  if (time_period === "month") {
    return "Monthly";
  } else if (time_period === "year") {
    return "Yearly";
  } else if (time_period === "week") {
    return "Weekly";
  } else {
    return "";
  }
};

export const numberFormat = (amount) => {
  return amount.toLocaleString();
};

export const loadAnalyticsHeader = (script_code_string) => {
  var scripts = script_code_string.match(/<script.*?<\/script>/g);
  return scripts[0];
  // let temp_div = document.createElement("div");
  // temp_div.innerHTML = script_code_string;
  // return script_code_string.getElementsByTagName("script")[0];
};

export const extractScriptsContent = (scripttext) => {
  var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
  var match;
  var scriptsContent = [];
  for (var i = 0; i < scripttext.length; i++) {
    var match = re.exec(scripttext);
    if (match) {
      scriptsContent.push(match[i]);
    }
  }
  if (scriptsContent.length > 0) {
    var firstScriptContent = scriptsContent[0];
    var link = firstScriptContent.match(/src="(.*?)"/)[1];
    var gtagId = firstScriptContent.match(/id=(.*?)"/)[1];
    var secondScriptContent = scriptsContent[1];
    return {
      link: link,
      gtagId: gtagId,
      firstScriptContent: firstScriptContent,
      secondScriptContent: secondScriptContent,
    };
  } else {
    return { error: "No script tag found" };
  }
};

export const loadAnalyticsBody = (script_code_string) => {
  let temp_div = document.createElement("div");
  temp_div.innerHTML = script_code_string;
  let tags = temp_div.getElementsByTagName("script");
  document.body.append(...tags);
};

export const loadWebsiteJsCode = (script_code_string) => {
  let temp_div = document.createElement("script");
  temp_div.innerHTML = script_code_string;
  document.body.appendChild(temp_div);
};

export const loadWebsiteCssCode = (css_code_string) => {
  let temp_div = document.createElement("style");
  temp_div.innerHTML = css_code_string;
  document.body.appendChild(temp_div);
};

export const TimeZones = [
  "Europe/Andorra",
  "Asia/Dubai",
  "Asia/Kabul",
  "Europe/Tirane",
  "Asia/Yerevan",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  "Antarctica/Mawson",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Cordoba",
  "America/Argentina/Salta",
  "America/Argentina/Jujuy",
  "America/Argentina/Tucuman",
  "America/Argentina/Catamarca",
  "America/Argentina/La_Rioja",
  "America/Argentina/San_Juan",
  "America/Argentina/Mendoza",
  "America/Argentina/San_Luis",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Ushuaia",
  "Pacific/Pago_Pago",
  "Europe/Vienna",
  "Australia/Lord_Howe",
  "Antarctica/Macquarie",
  "Australia/Hobart",
  "Australia/Currie",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Australia/Broken_Hill",
  "Australia/Brisbane",
  "Australia/Lindeman",
  "Australia/Adelaide",
  "Australia/Darwin",
  "Australia/Perth",
  "Australia/Eucla",
  "Asia/Baku",
  "America/Barbados",
  "Asia/Dhaka",
  "Europe/Brussels",
  "Europe/Sofia",
  "Atlantic/Bermuda",
  "Asia/Brunei",
  "America/La_Paz",
  "America/Noronha",
  "America/Belem",
  "America/Fortaleza",
  "America/Recife",
  "America/Araguaina",
  "America/Maceio",
  "America/Bahia",
  "America/Sao_Paulo",
  "America/Campo_Grande",
  "America/Cuiaba",
  "America/Santarem",
  "America/Porto_Velho",
  "America/Boa_Vista",
  "America/Manaus",
  "America/Eirunepe",
  "America/Rio_Branco",
  "America/Nassau",
  "Asia/Thimphu",
  "Europe/Minsk",
  "America/Belize",
  "America/St_Johns",
  "America/Halifax",
  "America/Glace_Bay",
  "America/Moncton",
  "America/Goose_Bay",
  "America/Blanc-Sablon",
  "America/Toronto",
  "America/Nipigon",
  "America/Thunder_Bay",
  "America/Iqaluit",
  "America/Pangnirtung",
  "America/Atikokan",
  "America/Winnipeg",
  "America/Rainy_River",
  "America/Resolute",
  "America/Rankin_Inlet",
  "America/Regina",
  "America/Swift_Current",
  "America/Edmonton",
  "America/Cambridge_Bay",
  "America/Yellowknife",
  "America/Inuvik",
  "America/Creston",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Dawson",
  "Indian/Cocos",
  "Europe/Zurich",
  "Africa/Abidjan",
  "Pacific/Rarotonga",
  "America/Santiago",
  "America/Punta_Arenas",
  "Pacific/Easter",
  "Asia/Shanghai",
  "Asia/Urumqi",
  "America/Bogota",
  "America/Costa_Rica",
  "America/Havana",
  "Atlantic/Cape_Verde",
  "America/Curacao",
  "Indian/Christmas",
  "Asia/Nicosia",
  "Asia/Famagusta",
  "Europe/Prague",
  "Europe/Berlin",
  "Europe/Copenhagen",
  "America/Santo_Domingo",
  "Africa/Algiers",
  "America/Guayaquil",
  "Pacific/Galapagos",
  "Europe/Tallinn",
  "Africa/Cairo",
  "Africa/El_Aaiun",
  "Europe/Madrid",
  "Africa/Ceuta",
  "Atlantic/Canary",
  "Europe/Helsinki",
  "Pacific/Fiji",
  "Atlantic/Stanley",
  "Pacific/Chuuk",
  "Pacific/Pohnpei",
  "Pacific/Kosrae",
  "Atlantic/Faroe",
  "Europe/Paris",
  "Europe/London",
  "Asia/Tbilisi",
  "America/Cayenne",
  "Africa/Accra",
  "Europe/Gibraltar",
  "America/Godthab",
  "America/Danmarkshavn",
  "America/Scoresbysund",
  "America/Thule",
  "Europe/Athens",
  "Atlantic/South_Georgia",
  "America/Guatemala",
  "Pacific/Guam",
  "Africa/Bissau",
  "America/Guyana",
  "Asia/Hong_Kong",
  "America/Tegucigalpa",
  "America/Port-au-Prince",
  "Europe/Budapest",
  "Asia/Jakarta",
  "Asia/Pontianak",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Europe/Dublin",
  "Asia/Jerusalem",
  "Asia/Kolkata",
  "Indian/Chagos",
  "Asia/Baghdad",
  "Asia/Tehran",
  "Atlantic/Reykjavik",
  "Europe/Rome",
  "America/Jamaica",
  "Asia/Amman",
  "Asia/Tokyo",
  "Africa/Nairobi",
  "Asia/Bishkek",
  "Pacific/Tarawa",
  "Pacific/Enderbury",
  "Pacific/Kiritimati",
  "Asia/Pyongyang",
  "Asia/Seoul",
  "Asia/Almaty",
  "Asia/Qyzylorda",
  "Asia/Qostanay", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  "Asia/Aqtobe",
  "Asia/Aqtau",
  "Asia/Atyrau",
  "Asia/Oral",
  "Asia/Beirut",
  "Asia/Colombo",
  "Africa/Monrovia",
  "Europe/Vilnius",
  "Europe/Luxembourg",
  "Europe/Riga",
  "Africa/Tripoli",
  "Africa/Casablanca",
  "Europe/Monaco",
  "Europe/Chisinau",
  "Pacific/Majuro",
  "Pacific/Kwajalein",
  "Asia/Yangon",
  "Asia/Ulaanbaatar",
  "Asia/Hovd",
  "Asia/Choibalsan",
  "Asia/Macau",
  "America/Martinique",
  "Europe/Malta",
  "Indian/Mauritius",
  "Indian/Maldives",
  "America/Mexico_City",
  "America/Cancun",
  "America/Merida",
  "America/Monterrey",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Chihuahua",
  "America/Ojinaga",
  "America/Hermosillo",
  "America/Tijuana",
  "America/Bahia_Banderas",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Africa/Maputo",
  "Africa/Windhoek",
  "Pacific/Noumea",
  "Pacific/Norfolk",
  "Africa/Lagos",
  "America/Managua",
  "Europe/Amsterdam",
  "Europe/Oslo",
  "Asia/Kathmandu",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Auckland",
  "Pacific/Chatham",
  "America/Panama",
  "America/Lima",
  "Pacific/Tahiti",
  "Pacific/Marquesas",
  "Pacific/Gambier",
  "Pacific/Port_Moresby",
  "Pacific/Bougainville",
  "Asia/Manila",
  "Asia/Karachi",
  "Europe/Warsaw",
  "America/Miquelon",
  "Pacific/Pitcairn",
  "America/Puerto_Rico",
  "Asia/Gaza",
  "Asia/Hebron",
  "Europe/Lisbon",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Pacific/Palau",
  "America/Asuncion",
  "Asia/Qatar",
  "Indian/Reunion",
  "Europe/Bucharest",
  "Europe/Belgrade",
  "Europe/Kaliningrad",
  "Europe/Moscow",
  "Europe/Simferopol",
  "Europe/Kirov",
  "Europe/Astrakhan",
  "Europe/Volgograd",
  "Europe/Saratov",
  "Europe/Ulyanovsk",
  "Europe/Samara",
  "Asia/Yekaterinburg",
  "Asia/Omsk",
  "Asia/Novosibirsk",
  "Asia/Barnaul",
  "Asia/Tomsk",
  "Asia/Novokuznetsk",
  "Asia/Krasnoyarsk",
  "Asia/Irkutsk",
  "Asia/Chita",
  "Asia/Yakutsk",
  "Asia/Khandyga",
  "Asia/Vladivostok",
  "Asia/Ust-Nera",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Asia/Kamchatka",
  "Asia/Anadyr",
  "Asia/Riyadh",
  "Pacific/Guadalcanal",
  "Indian/Mahe",
  "Africa/Khartoum",
  "Europe/Stockholm",
  "Asia/Singapore",
  "America/Paramaribo",
  "Africa/Juba",
  "Africa/Sao_Tome",
  "America/El_Salvador",
  "Asia/Damascus",
  "America/Grand_Turk",
  "Africa/Ndjamena",
  "Indian/Kerguelen",
  "Asia/Bangkok",
  "Asia/Dushanbe",
  "Pacific/Fakaofo",
  "Asia/Dili",
  "Asia/Ashgabat",
  "Africa/Tunis",
  "Pacific/Tongatapu",
  "Europe/Istanbul",
  "America/Port_of_Spain",
  "Pacific/Funafuti",
  "Asia/Taipei",
  "Europe/Kiev",
  "Europe/Uzhgorod",
  "Europe/Zaporozhye",
  "Pacific/Wake",
  "America/New_York",
  "America/Detroit",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Indiana/Indianapolis",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Vevay",
  "America/Chicago",
  "America/Indiana/Tell_City",
  "America/Indiana/Knox",
  "America/Menominee",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/North_Dakota/Beulah",
  "America/Denver",
  "America/Boise",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "Pacific/Honolulu",
  "America/Montevideo",
  "Asia/Samarkand",
  "Asia/Tashkent",
  "America/Caracas",
  "Asia/Ho_Chi_Minh",
  "Pacific/Efate",
  "Pacific/Wallis",
  "Pacific/Apia",
  "Africa/Johannesburg",
];

export const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Republic of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];