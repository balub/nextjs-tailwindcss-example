const countries = [
  {
    name: "Kuwait",
    capital: ["Kuwait City"],
    borders: ["IRQ", "SAU"],
    population: 4270563,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/kw.svg",
    currencies: {
      KWD: {
        name: "Kuwaiti dinar",
        symbol: "د.ك",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Palau",
    capital: ["Ngerulmud"],
    population: 18092,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/pw.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      pau: "Palauan",
    },
  },
  {
    name: "Liechtenstein",
    capital: ["Vaduz"],
    borders: ["AUT", "CHE"],
    population: 38137,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/li.svg",
    currencies: {
      CHF: {
        name: "Swiss franc",
        symbol: "Fr",
      },
    },
    languages: {
      deu: "German",
    },
  },
  {
    name: "Moldova",
    capital: ["Chișinău"],
    borders: ["ROU", "UKR"],
    population: 2617820,
    region: "Europe",
    subregion: "Eastern Europe",
    flags: "https://flagcdn.com/md.svg",
    currencies: {
      MDL: {
        name: "Moldovan leu",
        symbol: "L",
      },
    },
    languages: {
      ron: "Moldavian",
    },
  },
  {
    name: "Angola",
    capital: ["Luanda"],
    borders: ["COG", "COD", "ZMB", "NAM"],
    population: 32866268,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/ao.svg",
    currencies: {
      AOA: {
        name: "Angolan kwanza",
        symbol: "Kz",
      },
    },
    languages: {
      por: "Portuguese",
    },
  },
  {
    name: "Bolivia",
    capital: ["Sucre"],
    borders: ["ARG", "BRA", "CHL", "PRY", "PER"],
    population: 11673029,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/bo.svg",
    currencies: {
      BOB: {
        name: "Bolivian boliviano",
        symbol: "Bs.",
      },
    },
    languages: {
      aym: "Aymara",
      grn: "Guaraní",
      que: "Quechua",
      spa: "Spanish",
    },
  },
  {
    name: "Tuvalu",
    capital: ["Funafuti"],
    population: 11792,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/tv.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
      TVD: {
        name: "Tuvaluan dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      tvl: "Tuvaluan",
    },
  },
  {
    name: "Peru",
    capital: ["Lima"],
    borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
    population: 32971846,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/pe.svg",
    currencies: {
      PEN: {
        name: "Peruvian sol",
        symbol: "S/ ",
      },
    },
    languages: {
      aym: "Aymara",
      que: "Quechua",
      spa: "Spanish",
    },
  },
  {
    name: "New Caledonia",
    capital: ["Nouméa"],
    population: 271960,
    region: "Oceania",
    subregion: "Melanesia",
    flags: "https://flagcdn.com/nc.svg",
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Germany",
    capital: ["Berlin"],
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
    population: 83240525,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/de.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      deu: "German",
    },
  },
  {
    name: "Botswana",
    capital: ["Gaborone"],
    borders: ["NAM", "ZAF", "ZMB", "ZWE"],
    population: 2351625,
    region: "Africa",
    subregion: "Southern Africa",
    flags: "https://flagcdn.com/bw.svg",
    currencies: {
      BWP: {
        name: "Botswana pula",
        symbol: "P",
      },
    },
    languages: {
      eng: "English",
      tsn: "Tswana",
    },
  },
  {
    name: "Afghanistan",
    capital: ["Kabul"],
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    population: 40218234,
    region: "Asia",
    subregion: "Southern Asia",
    flags:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    currencies: {
      AFN: {
        name: "Afghan afghani",
        symbol: "؋",
      },
    },
    languages: {
      prs: "Dari",
      pus: "Pashto",
      tuk: "Turkmen",
    },
  },
  {
    name: "Hungary",
    capital: ["Budapest"],
    borders: ["AUT", "HRV", "ROU", "SRB", "SVK", "SVN", "UKR"],
    population: 9749763,
    region: "Europe",
    subregion: "Central Europe",
    flags: "https://flagcdn.com/hu.svg",
    currencies: {
      HUF: {
        name: "Hungarian forint",
        symbol: "Ft",
      },
    },
    languages: {
      hun: "Hungarian",
    },
  },
  {
    name: "Burkina Faso",
    capital: ["Ouagadougou"],
    borders: ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"],
    population: 20903278,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/bf.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Canada",
    capital: ["Ottawa"],
    borders: ["USA"],
    population: 38005238,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/ca.svg",
    currencies: {
      CAD: {
        name: "Canadian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
    },
  },
  {
    name: "Saint Barthélemy",
    capital: ["Gustavia"],
    population: 4255,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/bl.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Indonesia",
    capital: ["Jakarta"],
    borders: ["TLS", "MYS", "PNG"],
    population: 273523621,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/id.svg",
    currencies: {
      IDR: {
        name: "Indonesian rupiah",
        symbol: "Rp",
      },
    },
    languages: {
      ind: "Indonesian",
    },
  },
  {
    name: "Taiwan",
    capital: ["Taipei"],
    population: 23503349,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/tw.svg",
    currencies: {
      TWD: {
        name: "New Taiwan dollar",
        symbol: "$",
      },
    },
    languages: {
      zho: "Chinese",
    },
  },
  {
    name: "Saint Lucia",
    capital: ["Castries"],
    population: 183629,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/lc.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Aruba",
    capital: ["Oranjestad"],
    population: 106766,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/aw.svg",
    currencies: {
      AWG: {
        name: "Aruban florin",
        symbol: "ƒ",
      },
    },
    languages: {
      nld: "Dutch",
      pap: "Papiamento",
    },
  },
  {
    name: "Gabon",
    capital: ["Libreville"],
    borders: ["CMR", "COG", "GNQ"],
    population: 2225728,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/ga.svg",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "South Georgia",
    capital: ["King Edward Point"],
    population: 30,
    region: "Antarctic",
    flags: "https://flagcdn.com/gs.svg",
    currencies: {
      SHP: {
        name: "Saint Helena pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Liberia",
    capital: ["Monrovia"],
    borders: ["GIN", "CIV", "SLE"],
    population: 5057677,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/lr.svg",
    currencies: {
      LRD: {
        name: "Liberian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Turks and Caicos Islands",
    capital: ["Cockburn Town"],
    population: 38718,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/tc.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Western Sahara",
    capital: ["El Aaiún"],
    borders: ["DZA", "MRT", "MAR"],
    population: 510713,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/eh.svg",
    currencies: {
      DZD: {
        name: "Algerian dinar",
        symbol: "دج",
      },
      MAD: {
        name: "Moroccan dirham",
        symbol: "DH",
      },
      MRU: {
        name: "Mauritanian ouguiya",
        symbol: "UM",
      },
    },
    languages: {
      ber: "Berber",
      mey: "Hassaniya",
      spa: "Spanish",
    },
  },
  {
    name: "Turkey",
    capital: ["Ankara"],
    borders: ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
    population: 84339067,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/tr.svg",
    currencies: {
      TRY: {
        name: "Turkish lira",
        symbol: "₺",
      },
    },
    languages: {
      tur: "Turkish",
    },
  },
  {
    name: "Mali",
    capital: ["Bamako"],
    borders: ["DZA", "BFA", "GIN", "CIV", "MRT", "NER", "SEN"],
    population: 20250834,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/ml.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Benin",
    capital: ["Porto-Novo"],
    borders: ["BFA", "NER", "NGA", "TGO"],
    population: 12123198,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/bj.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Cyprus",
    capital: ["Nicosia"],
    population: 1207361,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/cy.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ell: "Greek",
      tur: "Turkish",
    },
  },
  {
    name: "Somalia",
    capital: ["Mogadishu"],
    borders: ["DJI", "ETH", "KEN"],
    population: 15893219,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/so.svg",
    currencies: {
      SOS: {
        name: "Somali shilling",
        symbol: "Sh",
      },
    },
    languages: {
      ara: "Arabic",
      som: "Somali",
    },
  },
  {
    name: "Niger",
    capital: ["Niamey"],
    borders: ["DZA", "BEN", "BFA", "TCD", "LBY", "MLI", "NGA"],
    population: 24206636,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/ne.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Faroe Islands",
    capital: ["Tórshavn"],
    population: 48865,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/fo.svg",
    currencies: {
      DKK: {
        name: "Danish krone",
        symbol: "kr",
      },
      FOK: {
        name: "Faroese króna",
        symbol: "kr",
      },
    },
    languages: {
      dan: "Danish",
      fao: "Faroese",
    },
  },
  {
    name: "Portugal",
    capital: ["Lisbon"],
    borders: ["ESP"],
    population: 10305564,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/pt.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      por: "Portuguese",
    },
  },
  {
    name: "Senegal",
    capital: ["Dakar"],
    borders: ["GMB", "GIN", "GNB", "MLI", "MRT"],
    population: 16743930,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/sn.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Cuba",
    capital: ["Havana"],
    population: 11326616,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/cu.svg",
    currencies: {
      CUC: {
        name: "Cuban convertible peso",
        symbol: "$",
      },
      CUP: {
        name: "Cuban peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Belarus",
    capital: ["Minsk"],
    borders: ["LVA", "LTU", "POL", "RUS", "UKR"],
    population: 9398861,
    region: "Europe",
    subregion: "Eastern Europe",
    flags: "https://flagcdn.com/by.svg",
    currencies: {
      BYN: {
        name: "Belarusian ruble",
        symbol: "Br",
      },
    },
    languages: {
      bel: "Belarusian",
      rus: "Russian",
    },
  },
  {
    name: "Barbados",
    capital: ["Bridgetown"],
    population: 287371,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/bb.svg",
    currencies: {
      BBD: {
        name: "Barbadian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Tunisia",
    capital: ["Tunis"],
    borders: ["DZA", "LBY"],
    population: 11818618,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/tn.svg",
    currencies: {
      TND: {
        name: "Tunisian dinar",
        symbol: "د.ت",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Israel",
    capital: ["Jerusalem"],
    borders: ["EGY", "JOR", "LBN", "PSE", "SYR"],
    population: 9216900,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/il.svg",
    currencies: {
      ILS: {
        name: "Israeli new shekel",
        symbol: "₪",
      },
    },
    languages: {
      ara: "Arabic",
      heb: "Hebrew",
    },
  },
  {
    name: "Italy",
    capital: ["Rome"],
    borders: ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
    population: 59554023,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/it.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ita: "Italian",
    },
  },
  {
    name: "Myanmar",
    capital: ["Naypyidaw"],
    borders: ["BGD", "CHN", "IND", "LAO", "THA"],
    population: 54409794,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/mm.svg",
    currencies: {
      MMK: {
        name: "Burmese kyat",
        symbol: "Ks",
      },
    },
    languages: {
      mya: "Burmese",
    },
  },
  {
    name: "Antarctica",
    population: 1000,
    region: "Antarctic",
    flags: "https://flagcdn.com/aq.svg",
  },
  {
    name: "Micronesia",
    capital: ["Palikir"],
    population: 115021,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/fm.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Wallis and Futuna",
    capital: ["Mata-Utu"],
    population: 11750,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/wf.svg",
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Djibouti",
    capital: ["Djibouti"],
    borders: ["ERI", "ETH", "SOM"],
    population: 988002,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/dj.svg",
    currencies: {
      DJF: {
        name: "Djiboutian franc",
        symbol: "Fr",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
    },
  },
  {
    name: "Republic of the Congo",
    capital: ["Brazzaville"],
    borders: ["AGO", "CMR", "CAF", "COD", "GAB"],
    population: 5657000,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/cg.svg",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      kon: "Kikongo",
      lin: "Lingala",
    },
  },
  {
    name: "Gibraltar",
    capital: ["Gibraltar"],
    borders: ["ESP"],
    population: 33691,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/gi.svg",
    currencies: {
      GIP: {
        name: "Gibraltar pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "DR Congo",
    capital: ["Kinshasa"],
    borders: ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
    population: 108407721,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/cd.svg",
    currencies: {
      CDF: {
        name: "Congolese franc",
        symbol: "FC",
      },
    },
    languages: {
      fra: "French",
      kon: "Kikongo",
      lin: "Lingala",
      lua: "Tshiluba",
      swa: "Swahili",
    },
  },
  {
    name: "Belize",
    capital: ["Belmopan"],
    borders: ["GTM", "MEX"],
    population: 397621,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/bz.svg",
    currencies: {
      BZD: {
        name: "Belize dollar",
        symbol: "$",
      },
    },
    languages: {
      bjz: "Belizean Creole",
      eng: "English",
      spa: "Spanish",
    },
  },
  {
    name: "Bermuda",
    capital: ["Hamilton"],
    population: 63903,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/bm.svg",
    currencies: {
      BMD: {
        name: "Bermudian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Australia",
    capital: ["Canberra"],
    population: 25687041,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    flags: "https://flagcdn.com/au.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    capital: ["Jamestown"],
    population: 53192,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/sh.svg",
    currencies: {
      GBP: {
        name: "Pound sterling",
        symbol: "£",
      },
      SHP: {
        name: "Saint Helena pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Cameroon",
    capital: ["Yaoundé"],
    borders: ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"],
    population: 26545864,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/cm.svg",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
    },
  },
  {
    name: "Russia",
    capital: ["Moscow"],
    borders: [
      "AZE",
      "BLR",
      "CHN",
      "EST",
      "FIN",
      "GEO",
      "KAZ",
      "PRK",
      "LVA",
      "LTU",
      "MNG",
      "NOR",
      "POL",
      "UKR",
    ],
    population: 144104080,
    region: "Europe",
    subregion: "Eastern Europe",
    flags: "https://flagcdn.com/ru.svg",
    currencies: {
      RUB: {
        name: "Russian ruble",
        symbol: "₽",
      },
    },
    languages: {
      rus: "Russian",
    },
  },
  {
    name: "Antigua and Barbuda",
    capital: ["Saint John's"],
    population: 97928,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/ag.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Japan",
    capital: ["Tokyo"],
    population: 125836021,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/jp.svg",
    currencies: {
      JPY: {
        name: "Japanese yen",
        symbol: "¥",
      },
    },
    languages: {
      jpn: "Japanese",
    },
  },
  {
    name: "Cayman Islands",
    capital: ["George Town"],
    population: 65720,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/ky.svg",
    currencies: {
      KYD: {
        name: "Cayman Islands dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Caribbean Netherlands",
    capital: ["Kralendijk"],
    population: 25987,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/bq.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      nld: "Dutch",
      pap: "Papiamento",
    },
  },
  {
    name: "Honduras",
    capital: ["Tegucigalpa"],
    borders: ["GTM", "SLV", "NIC"],
    population: 9904608,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/hn.svg",
    currencies: {
      HNL: {
        name: "Honduran lempira",
        symbol: "L",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Heard Island and McDonald Islands",
    population: 0,
    region: "Antarctic",
    flags: "https://flagcdn.com/hm.svg",
    languages: {
      eng: "English",
    },
  },
  {
    name: "Burundi",
    capital: ["Gitega"],
    borders: ["COD", "RWA", "TZA"],
    population: 11890781,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/bi.svg",
    currencies: {
      BIF: {
        name: "Burundian franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      run: "Kirundi",
    },
  },
  {
    name: "Paraguay",
    capital: ["Asunción"],
    borders: ["ARG", "BOL", "BRA"],
    population: 7132530,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/py.svg",
    currencies: {
      PYG: {
        name: "Paraguayan guaraní",
        symbol: "₲",
      },
    },
    languages: {
      grn: "Guaraní",
      spa: "Spanish",
    },
  },
  {
    name: "Argentina",
    capital: ["Buenos Aires"],
    borders: ["BOL", "BRA", "CHL", "PRY", "URY"],
    population: 45376763,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/ar.svg",
    currencies: {
      ARS: {
        name: "Argentine peso",
        symbol: "$",
      },
    },
    languages: {
      grn: "Guaraní",
      spa: "Spanish",
    },
  },
  {
    name: "French Polynesia",
    capital: ["Papeetē"],
    population: 280904,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/pf.svg",
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "São Tomé and Príncipe",
    capital: ["São Tomé"],
    population: 219161,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/st.svg",
    currencies: {
      STN: {
        name: "São Tomé and Príncipe dobra",
        symbol: "Db",
      },
    },
    languages: {
      por: "Portuguese",
    },
  },
  {
    name: "Lesotho",
    capital: ["Maseru"],
    borders: ["ZAF"],
    population: 2142252,
    region: "Africa",
    subregion: "Southern Africa",
    flags: "https://flagcdn.com/ls.svg",
    currencies: {
      LSL: {
        name: "Lesotho loti",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      eng: "English",
      sot: "Sotho",
    },
  },
  {
    name: "Sudan",
    capital: ["Khartoum"],
    borders: ["CAF", "TCD", "EGY", "ERI", "ETH", "LBY", "SSD"],
    population: 43849269,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/sd.svg",
    currencies: {
      SDG: {
        name: "Sudanese pound",
      },
    },
    languages: {
      ara: "Arabic",
      eng: "English",
    },
  },
  {
    name: "El Salvador",
    capital: ["San Salvador"],
    borders: ["GTM", "HND"],
    population: 6486201,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/sv.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Christmas Island",
    capital: ["Flying Fish Cove"],
    population: 2072,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    flags: "https://flagcdn.com/cx.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Kyrgyzstan",
    capital: ["Bishkek"],
    borders: ["CHN", "KAZ", "TJK", "UZB"],
    population: 6591600,
    region: "Asia",
    subregion: "Central Asia",
    flags: "https://flagcdn.com/kg.svg",
    currencies: {
      KGS: {
        name: "Kyrgyzstani som",
        symbol: "с",
      },
    },
    languages: {
      kir: "Kyrgyz",
      rus: "Russian",
    },
  },
  {
    name: "Brazil",
    capital: ["Brasília"],
    borders: [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN",
    ],
    population: 212559409,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/br.svg",
    currencies: {
      BRL: {
        name: "Brazilian real",
        symbol: "R$",
      },
    },
    languages: {
      por: "Portuguese",
    },
  },
  {
    name: "Cambodia",
    capital: ["Phnom Penh"],
    borders: ["LAO", "THA", "VNM"],
    population: 16718971,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/kh.svg",
    currencies: {
      KHR: {
        name: "Cambodian riel",
        symbol: "៛",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      khm: "Khmer",
    },
  },
  {
    name: "Montserrat",
    capital: ["Plymouth"],
    population: 4922,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/ms.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "South Africa",
    capital: ["Pretoria", "Bloemfontein", "Cape Town"],
    borders: ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
    population: 59308690,
    region: "Africa",
    subregion: "Southern Africa",
    flags: "https://flagcdn.com/za.svg",
    currencies: {
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      afr: "Afrikaans",
      eng: "English",
      nbl: "Southern Ndebele",
      nso: "Northern Sotho",
      sot: "Southern Sotho",
      ssw: "Swazi",
      tsn: "Tswana",
      tso: "Tsonga",
      ven: "Venda",
      xho: "Xhosa",
      zul: "Zulu",
    },
  },
  {
    name: "Guatemala",
    capital: ["Guatemala City"],
    borders: ["BLZ", "SLV", "HND", "MEX"],
    population: 16858333,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/gt.svg",
    currencies: {
      GTQ: {
        name: "Guatemalan quetzal",
        symbol: "Q",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "United States",
    capital: ["Washington, D.C."],
    borders: ["CAN", "MEX"],
    population: 329484123,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/us.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Azerbaijan",
    capital: ["Baku"],
    borders: ["ARM", "GEO", "IRN", "RUS", "TUR"],
    population: 10110116,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/az.svg",
    currencies: {
      AZN: {
        name: "Azerbaijani manat",
        symbol: "₼",
      },
    },
    languages: {
      aze: "Azerbaijani",
      rus: "Russian",
    },
  },
  {
    name: "Malaysia",
    capital: ["Kuala Lumpur"],
    borders: ["BRN", "IDN", "THA"],
    population: 32365998,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/my.svg",
    currencies: {
      MYR: {
        name: "Malaysian ringgit",
        symbol: "RM",
      },
    },
    languages: {
      eng: "English",
      msa: "Malay",
    },
  },
  {
    name: "Colombia",
    capital: ["Bogotá"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    population: 50882884,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/co.svg",
    currencies: {
      COP: {
        name: "Colombian peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Mauritania",
    capital: ["Nouakchott"],
    borders: ["DZA", "MLI", "SEN", "ESH"],
    population: 4649660,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/mr.svg",
    currencies: {
      MRU: {
        name: "Mauritanian ouguiya",
        symbol: "UM",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Bahrain",
    capital: ["Manama"],
    population: 1701583,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/bh.svg",
    currencies: {
      BHD: {
        name: "Bahraini dinar",
        symbol: ".د.ب",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Belgium",
    capital: ["Brussels"],
    borders: ["FRA", "DEU", "LUX", "NLD"],
    population: 11555997,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/be.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      deu: "German",
      fra: "French",
      nld: "Dutch",
    },
  },
  {
    name: "Chile",
    capital: ["Santiago"],
    borders: ["ARG", "BOL", "PER"],
    population: 19116209,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/cl.svg",
    currencies: {
      CLP: {
        name: "Chilean peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "North Macedonia",
    capital: ["Skopje"],
    borders: ["ALB", "BGR", "GRC", "UNK", "SRB"],
    population: 2077132,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/mk.svg",
    currencies: {
      MKD: {
        name: "denar",
        symbol: "den",
      },
    },
    languages: {
      mkd: "Macedonian",
    },
  },
  {
    name: "Mozambique",
    capital: ["Maputo"],
    borders: ["MWI", "ZAF", "SWZ", "TZA", "ZMB", "ZWE"],
    population: 31255435,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/mz.svg",
    currencies: {
      MZN: {
        name: "Mozambican metical",
        symbol: "MT",
      },
    },
    languages: {
      por: "Portuguese",
    },
  },
  {
    name: "Norfolk Island",
    capital: ["Kingston"],
    population: 2302,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    flags: "https://flagcdn.com/nf.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      pih: "Norfuk",
    },
  },
  {
    name: "American Samoa",
    capital: ["Pago Pago"],
    population: 55197,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/as.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      smo: "Samoan",
    },
  },
  {
    name: "Ethiopia",
    capital: ["Addis Ababa"],
    borders: ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
    population: 114963583,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/et.svg",
    currencies: {
      ETB: {
        name: "Ethiopian birr",
        symbol: "Br",
      },
    },
    languages: {
      amh: "Amharic",
    },
  },
  {
    name: "Guadeloupe",
    capital: ["Basse-Terre"],
    population: 400132,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/gp.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Guam",
    capital: ["Hagåtña"],
    population: 168783,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/gu.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      cha: "Chamorro",
      eng: "English",
      spa: "Spanish",
    },
  },
  {
    name: "India",
    capital: ["New Delhi"],
    borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
    population: 1380004385,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/in.svg",
    currencies: {
      INR: {
        name: "Indian rupee",
        symbol: "₹",
      },
    },
    languages: {
      eng: "English",
      hin: "Hindi",
      tam: "Tamil",
    },
  },
  {
    name: "Puerto Rico",
    capital: ["San Juan"],
    population: 3194034,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/pr.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      spa: "Spanish",
    },
  },
  {
    name: "Spain",
    capital: ["Madrid"],
    borders: ["AND", "FRA", "GIB", "PRT", "MAR"],
    population: 47351567,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/es.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Kazakhstan",
    capital: ["Nur-Sultan"],
    borders: ["CHN", "KGZ", "RUS", "TKM", "UZB"],
    population: 18754440,
    region: "Asia",
    subregion: "Central Asia",
    flags: "https://flagcdn.com/kz.svg",
    currencies: {
      KZT: {
        name: "Kazakhstani tenge",
        symbol: "₸",
      },
    },
    languages: {
      kaz: "Kazakh",
      rus: "Russian",
    },
  },
  {
    name: "Oman",
    capital: ["Muscat"],
    borders: ["SAU", "ARE", "YEM"],
    population: 5106622,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/om.svg",
    currencies: {
      OMR: {
        name: "Omani rial",
        symbol: "ر.ع.",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "United Arab Emirates",
    capital: ["Abu Dhabi"],
    borders: ["OMN", "SAU"],
    population: 9890400,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/ae.svg",
    currencies: {
      AED: {
        name: "United Arab Emirates dirham",
        symbol: "د.إ",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Poland",
    capital: ["Warsaw"],
    borders: ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
    population: 37950802,
    region: "Europe",
    subregion: "Central Europe",
    flags: "https://flagcdn.com/pl.svg",
    currencies: {
      PLN: {
        name: "Polish złoty",
        symbol: "zł",
      },
    },
    languages: {
      pol: "Polish",
    },
  },
  {
    name: "French Guiana",
    capital: ["Cayenne"],
    borders: ["BRA", "SUR"],
    population: 254541,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/gf.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Grenada",
    capital: ["St. George's"],
    population: 112519,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/gd.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Sri Lanka",
    capital: ["Sri Jayawardenepura Kotte"],
    borders: ["IND"],
    population: 21919000,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/lk.svg",
    currencies: {
      LKR: {
        name: "Sri Lankan rupee",
        symbol: "Rs  රු",
      },
    },
    languages: {
      sin: "Sinhala",
      tam: "Tamil",
    },
  },
  {
    name: "Tajikistan",
    capital: ["Dushanbe"],
    borders: ["AFG", "CHN", "KGZ", "UZB"],
    population: 9537642,
    region: "Asia",
    subregion: "Central Asia",
    flags: "https://flagcdn.com/tj.svg",
    currencies: {
      TJS: {
        name: "Tajikistani somoni",
        symbol: "ЅМ",
      },
    },
    languages: {
      rus: "Russian",
      tgk: "Tajik",
    },
  },
  {
    name: "Syria",
    capital: ["Damascus"],
    borders: ["IRQ", "ISR", "JOR", "LBN", "TUR"],
    population: 17500657,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/sy.svg",
    currencies: {
      SYP: {
        name: "Syrian pound",
        symbol: "£",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Libya",
    capital: ["Tripoli"],
    borders: ["DZA", "TCD", "EGY", "NER", "SDN", "TUN"],
    population: 6871287,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/ly.svg",
    currencies: {
      LYD: {
        name: "Libyan dinar",
        symbol: "ل.د",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Haiti",
    capital: ["Port-au-Prince"],
    borders: ["DOM"],
    population: 11402533,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/ht.svg",
    currencies: {
      HTG: {
        name: "Haitian gourde",
        symbol: "G",
      },
    },
    languages: {
      fra: "French",
      hat: "Haitian Creole",
    },
  },
  {
    name: "San Marino",
    capital: ["City of San Marino"],
    borders: ["ITA"],
    population: 33938,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/sm.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ita: "Italian",
    },
  },
  {
    name: "Tonga",
    capital: ["Nuku'alofa"],
    population: 105697,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/to.svg",
    currencies: {
      TOP: {
        name: "Tongan paʻanga",
        symbol: "T$",
      },
    },
    languages: {
      eng: "English",
      ton: "Tongan",
    },
  },
  {
    name: "British Virgin Islands",
    capital: ["Road Town"],
    population: 30237,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/vg.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Georgia",
    capital: ["Tbilisi"],
    borders: ["ARM", "AZE", "RUS", "TUR"],
    population: 3714000,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/ge.svg",
    currencies: {
      GEL: {
        name: "lari",
        symbol: "₾",
      },
    },
    languages: {
      kat: "Georgian",
    },
  },
  {
    name: "Eritrea",
    capital: ["Asmara"],
    borders: ["DJI", "ETH", "SDN"],
    population: 5352000,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/er.svg",
    currencies: {
      ERN: {
        name: "Eritrean nakfa",
        symbol: "Nfk",
      },
    },
    languages: {
      ara: "Arabic",
      eng: "English",
      tir: "Tigrinya",
    },
  },
  {
    name: "Tanzania",
    capital: ["Dodoma"],
    borders: ["BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB"],
    population: 59734213,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/tz.svg",
    currencies: {
      TZS: {
        name: "Tanzanian shilling",
        symbol: "Sh",
      },
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
  },
  {
    name: "Czechia",
    capital: ["Prague"],
    borders: ["AUT", "DEU", "POL", "SVK"],
    population: 10698896,
    region: "Europe",
    subregion: "Central Europe",
    flags: "https://flagcdn.com/cz.svg",
    currencies: {
      CZK: {
        name: "Czech koruna",
        symbol: "Kč",
      },
    },
    languages: {
      ces: "Czech",
      slk: "Slovak",
    },
  },
  {
    name: "Kosovo",
    capital: ["Pristina"],
    borders: ["ALB", "MKD", "MNE", "SRB"],
    population: 1775378,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/xk.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      sqi: "Albanian",
      srp: "Serbian",
    },
  },
  {
    name: "Bhutan",
    capital: ["Thimphu"],
    borders: ["CHN", "IND"],
    population: 771612,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/bt.svg",
    currencies: {
      BTN: {
        name: "Bhutanese ngultrum",
        symbol: "Nu.",
      },
      INR: {
        name: "Indian rupee",
        symbol: "₹",
      },
    },
    languages: {
      dzo: "Dzongkha",
    },
  },
  {
    name: "Egypt",
    capital: ["Cairo"],
    borders: ["ISR", "LBY", "PSE", "SDN"],
    population: 102334403,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/eg.svg",
    currencies: {
      EGP: {
        name: "Egyptian pound",
        symbol: "£",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Saint Kitts and Nevis",
    capital: ["Basseterre"],
    population: 53192,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/kn.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Vietnam",
    capital: ["Hanoi"],
    borders: ["KHM", "CHN", "LAO"],
    population: 97338583,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/vn.svg",
    currencies: {
      VND: {
        name: "Vietnamese đồng",
        symbol: "₫",
      },
    },
    languages: {
      vie: "Vietnamese",
    },
  },
  {
    name: "Marshall Islands",
    capital: ["Majuro"],
    population: 59194,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/mh.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      mah: "Marshallese",
    },
  },
  {
    name: "Austria",
    capital: ["Vienna"],
    borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
    population: 8917205,
    region: "Europe",
    subregion: "Central Europe",
    flags: "https://flagcdn.com/at.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      bar: "Austro-Bavarian German",
    },
  },
  {
    name: "Papua New Guinea",
    capital: ["Port Moresby"],
    borders: ["IDN"],
    population: 8947027,
    region: "Oceania",
    subregion: "Melanesia",
    flags: "https://flagcdn.com/pg.svg",
    currencies: {
      PGK: {
        name: "Papua New Guinean kina",
        symbol: "K",
      },
    },
    languages: {
      eng: "English",
      hmo: "Hiri Motu",
      tpi: "Tok Pisin",
    },
  },
  {
    name: "Bahamas",
    capital: ["Nassau"],
    population: 393248,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/bs.svg",
    currencies: {
      BSD: {
        name: "Bahamian dollar",
        symbol: "$",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Croatia",
    capital: ["Zagreb"],
    borders: ["BIH", "HUN", "MNE", "SRB", "SVN"],
    population: 4047200,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/hr.svg",
    currencies: {
      HRK: {
        name: "Croatian kuna",
        symbol: "kn",
      },
    },
    languages: {
      hrv: "Croatian",
    },
  },
  {
    name: "Slovenia",
    capital: ["Ljubljana"],
    borders: ["AUT", "HRV", "ITA", "HUN"],
    population: 2100126,
    region: "Europe",
    subregion: "Central Europe",
    flags: "https://flagcdn.com/si.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      slv: "Slovene",
    },
  },
  {
    name: "Uzbekistan",
    capital: ["Tashkent"],
    borders: ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
    population: 34232050,
    region: "Asia",
    subregion: "Central Asia",
    flags: "https://flagcdn.com/uz.svg",
    currencies: {
      UZS: {
        name: "Uzbekistani soʻm",
        symbol: "so'm",
      },
    },
    languages: {
      rus: "Russian",
      uzb: "Uzbek",
    },
  },
  {
    name: "Finland",
    capital: ["Helsinki"],
    borders: ["NOR", "SWE", "RUS"],
    population: 5530719,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/fi.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fin: "Finnish",
      swe: "Swedish",
    },
  },
  {
    name: "Guyana",
    capital: ["Georgetown"],
    borders: ["BRA", "SUR", "VEN"],
    population: 786559,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/gy.svg",
    currencies: {
      GYD: {
        name: "Guyanese dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Åland Islands",
    capital: ["Mariehamn"],
    population: 29458,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/ax.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      swe: "Swedish",
    },
  },
  {
    name: "Monaco",
    capital: ["Monaco"],
    borders: ["FRA"],
    population: 39244,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/mc.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Slovakia",
    capital: ["Bratislava"],
    borders: ["AUT", "CZE", "HUN", "POL", "UKR"],
    population: 5458827,
    region: "Europe",
    subregion: "Central Europe",
    flags: "https://flagcdn.com/sk.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      slk: "Slovak",
    },
  },
  {
    name: "Yemen",
    capital: ["Sana'a"],
    borders: ["OMN", "SAU"],
    population: 29825968,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/ye.svg",
    currencies: {
      YER: {
        name: "Yemeni rial",
        symbol: "﷼",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Malawi",
    capital: ["Lilongwe"],
    borders: ["MOZ", "TZA", "ZMB"],
    population: 19129955,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/mw.svg",
    currencies: {
      MWK: {
        name: "Malawian kwacha",
        symbol: "MK",
      },
    },
    languages: {
      eng: "English",
      nya: "Chewa",
    },
  },
  {
    name: "Gambia",
    capital: ["Banjul"],
    borders: ["SEN"],
    population: 2416664,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/gm.svg",
    currencies: {
      GMD: {
        name: "dalasi",
        symbol: "D",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Panama",
    capital: ["Panama City"],
    borders: ["COL", "CRI"],
    population: 4314768,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/pa.svg",
    currencies: {
      PAB: {
        name: "Panamanian balboa",
        symbol: "B/.",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Isle of Man",
    capital: ["Douglas"],
    population: 85032,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/im.svg",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      IMP: {
        name: "Manx pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
      glv: "Manx",
    },
  },
  {
    name: "Ireland",
    capital: ["Dublin"],
    borders: ["GBR"],
    population: 4994724,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/ie.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      eng: "English",
      gle: "Irish",
    },
  },
  {
    name: "South Korea",
    capital: ["Seoul"],
    borders: ["PRK"],
    population: 51780579,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/kr.svg",
    currencies: {
      KRW: {
        name: "South Korean won",
        symbol: "₩",
      },
    },
    languages: {
      kor: "Korean",
    },
  },
  {
    name: "Greece",
    capital: ["Athens"],
    borders: ["ALB", "BGR", "TUR", "MKD"],
    population: 10715549,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/gr.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ell: "Greek",
    },
  },
  {
    name: "Guernsey",
    capital: ["St. Peter Port"],
    population: 62999,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/gg.svg",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      GGP: {
        name: "Guernsey pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      nfr: "Guernésiais",
    },
  },
  {
    name: "Pakistan",
    capital: ["Islamabad"],
    borders: ["AFG", "CHN", "IND", "IRN"],
    population: 220892331,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/pk.svg",
    currencies: {
      PKR: {
        name: "Pakistani rupee",
        symbol: "₨",
      },
    },
    languages: {
      eng: "English",
      urd: "Urdu",
    },
  },
  {
    name: "Pitcairn Islands",
    capital: ["Adamstown"],
    population: 56,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/pn.svg",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Armenia",
    capital: ["Yerevan"],
    borders: ["AZE", "GEO", "IRN", "TUR"],
    population: 2963234,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/am.svg",
    currencies: {
      AMD: {
        name: "Armenian dram",
        symbol: "֏",
      },
    },
    languages: {
      hye: "Armenian",
    },
  },
  {
    name: "Malta",
    capital: ["Valletta"],
    population: 525285,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/mt.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      eng: "English",
      mlt: "Maltese",
    },
  },
  {
    name: "Turkmenistan",
    capital: ["Ashgabat"],
    borders: ["AFG", "IRN", "KAZ", "UZB"],
    population: 6031187,
    region: "Asia",
    subregion: "Central Asia",
    flags: "https://flagcdn.com/tm.svg",
    currencies: {
      TMT: {
        name: "Turkmenistan manat",
        symbol: "m",
      },
    },
    languages: {
      rus: "Russian",
      tuk: "Turkmen",
    },
  },
  {
    name: "Dominican Republic",
    capital: ["Santo Domingo"],
    borders: ["HTI"],
    population: 10847904,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/do.svg",
    currencies: {
      DOP: {
        name: "Dominican peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Solomon Islands",
    capital: ["Honiara"],
    population: 686878,
    region: "Oceania",
    subregion: "Melanesia",
    flags: "https://flagcdn.com/sb.svg",
    currencies: {
      SBD: {
        name: "Solomon Islands dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Vanuatu",
    capital: ["Port Vila"],
    population: 307150,
    region: "Oceania",
    subregion: "Melanesia",
    flags: "https://flagcdn.com/vu.svg",
    currencies: {
      VUV: {
        name: "Vanuatu vatu",
        symbol: "Vt",
      },
    },
    languages: {
      bis: "Bislama",
      eng: "English",
      fra: "French",
    },
  },
  {
    name: "Madagascar",
    capital: ["Antananarivo"],
    population: 27691019,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/mg.svg",
    currencies: {
      MGA: {
        name: "Malagasy ariary",
        symbol: "Ar",
      },
    },
    languages: {
      fra: "French",
      mlg: "Malagasy",
    },
  },
  {
    name: "Laos",
    capital: ["Vientiane"],
    borders: ["MMR", "KHM", "CHN", "THA", "VNM"],
    population: 7275556,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/la.svg",
    currencies: {
      LAK: {
        name: "Lao kip",
        symbol: "₭",
      },
    },
    languages: {
      lao: "Lao",
    },
  },
  {
    name: "Cook Islands",
    capital: ["Avarua"],
    population: 18100,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/ck.svg",
    currencies: {
      CKD: {
        name: "Cook Islands dollar",
        symbol: "$",
      },
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      rar: "Cook Islands Māori",
    },
  },
  {
    name: "Saint Martin",
    capital: ["Marigot"],
    borders: ["SXM"],
    population: 38659,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/mf.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Mongolia",
    capital: ["Ulan Bator"],
    borders: ["CHN", "RUS"],
    population: 3278292,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/mn.svg",
    currencies: {
      MNT: {
        name: "Mongolian tögrög",
        symbol: "₮",
      },
    },
    languages: {
      mon: "Mongolian",
    },
  },
  {
    name: "Martinique",
    capital: ["Fort-de-France"],
    population: 378243,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/mq.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "France",
    capital: ["Paris"],
    borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
    population: 67391582,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/fr.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Central African Republic",
    capital: ["Bangui"],
    borders: ["CMR", "TCD", "COD", "COG", "SSD", "SDN"],
    population: 4829764,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/cf.svg",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      sag: "Sango",
    },
  },
  {
    name: "Anguilla",
    capital: ["The Valley"],
    population: 13452,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/ai.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Eswatini",
    capital: ["Mbabane"],
    borders: ["MOZ", "ZAF"],
    population: 1160164,
    region: "Africa",
    subregion: "Southern Africa",
    flags: "https://flagcdn.com/sz.svg",
    currencies: {
      SZL: {
        name: "Swazi lilangeni",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      eng: "English",
      ssw: "Swazi",
    },
  },
  {
    name: "United Kingdom",
    capital: ["London"],
    borders: ["IRL"],
    population: 67215293,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/gb.svg",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Iceland",
    capital: ["Reykjavik"],
    population: 366425,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/is.svg",
    currencies: {
      ISK: {
        name: "Icelandic króna",
        symbol: "kr",
      },
    },
    languages: {
      isl: "Icelandic",
    },
  },
  {
    name: "Nepal",
    capital: ["Kathmandu"],
    borders: ["CHN", "IND"],
    population: 29136808,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/np.svg",
    currencies: {
      NPR: {
        name: "Nepalese rupee",
        symbol: "₨",
      },
    },
    languages: {
      nep: "Nepali",
    },
  },
  {
    name: "Ghana",
    capital: ["Accra"],
    borders: ["BFA", "CIV", "TGO"],
    population: 31072945,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/gh.svg",
    currencies: {
      GHS: {
        name: "Ghanaian cedi",
        symbol: "₵",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Iraq",
    capital: ["Baghdad"],
    borders: ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
    population: 40222503,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/iq.svg",
    currencies: {
      IQD: {
        name: "Iraqi dinar",
        symbol: "ع.د",
      },
    },
    languages: {
      ara: "Arabic",
      arc: "Aramaic",
      ckb: "Sorani",
    },
  },
  {
    name: "Thailand",
    capital: ["Bangkok"],
    borders: ["MMR", "KHM", "LAO", "MYS"],
    population: 69799978,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/th.svg",
    currencies: {
      THB: {
        name: "Thai baht",
        symbol: "฿",
      },
    },
    languages: {
      tha: "Thai",
    },
  },
  {
    name: "Denmark",
    capital: ["Copenhagen"],
    borders: ["DEU"],
    population: 5831404,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/dk.svg",
    currencies: {
      DKK: {
        name: "Danish krone",
        symbol: "kr",
      },
    },
    languages: {
      dan: "Danish",
    },
  },
  {
    name: "Serbia",
    capital: ["Belgrade"],
    borders: ["BIH", "BGR", "HRV", "HUN", "UNK", "MKD", "MNE", "ROU"],
    population: 6908224,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/rs.svg",
    currencies: {
      RSD: {
        name: "Serbian dinar",
        symbol: "дин.",
      },
    },
    languages: {
      srp: "Serbian",
    },
  },
  {
    name: "Uganda",
    capital: ["Kampala"],
    borders: ["COD", "KEN", "RWA", "SSD", "TZA"],
    population: 45741000,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/ug.svg",
    currencies: {
      UGX: {
        name: "Ugandan shilling",
        symbol: "Sh",
      },
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
  },
  {
    name: "Cocos (Keeling) Islands",
    capital: ["West Island"],
    population: 544,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    flags: "https://flagcdn.com/cc.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Montenegro",
    capital: ["Podgorica"],
    borders: ["ALB", "BIH", "HRV", "UNK", "SRB"],
    population: 621718,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/me.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      cnr: "Montenegrin",
    },
  },
  {
    name: "Saudi Arabia",
    capital: ["Riyadh"],
    borders: ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
    population: 34813867,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/sa.svg",
    currencies: {
      SAR: {
        name: "Saudi riyal",
        symbol: "ر.س",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Jordan",
    capital: ["Amman"],
    borders: ["IRQ", "ISR", "PSE", "SAU", "SYR"],
    population: 10203140,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/jo.svg",
    currencies: {
      JOD: {
        name: "Jordanian dinar",
        symbol: "د.ا",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Suriname",
    capital: ["Paramaribo"],
    borders: ["BRA", "GUF", "GUY"],
    population: 586634,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/sr.svg",
    currencies: {
      SRD: {
        name: "Surinamese dollar",
        symbol: "$",
      },
    },
    languages: {
      nld: "Dutch",
    },
  },
  {
    name: "New Zealand",
    capital: ["Wellington"],
    population: 5084300,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    flags: "https://flagcdn.com/nz.svg",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      mri: "Māori",
      nzs: "New Zealand Sign Language",
    },
  },
  {
    name: "Kenya",
    capital: ["Nairobi"],
    borders: ["ETH", "SOM", "SSD", "TZA", "UGA"],
    population: 53771300,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/ke.svg",
    currencies: {
      KES: {
        name: "Kenyan shilling",
        symbol: "Sh",
      },
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
  },
  {
    name: "Mexico",
    capital: ["Mexico City"],
    borders: ["BLZ", "GTM", "USA"],
    population: 128932753,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/mx.svg",
    currencies: {
      MXN: {
        name: "Mexican peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Bosnia and Herzegovina",
    capital: ["Sarajevo"],
    borders: ["HRV", "MNE", "SRB"],
    population: 3280815,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/ba.svg",
    currencies: {
      BAM: {
        name: "Bosnia and Herzegovina convertible mark",
      },
    },
    languages: {
      bos: "Bosnian",
      hrv: "Croatian",
      srp: "Serbian",
    },
  },
  {
    name: "Saint Vincent and the Grenadines",
    capital: ["Kingstown"],
    population: 110947,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/vc.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Seychelles",
    capital: ["Victoria"],
    population: 98462,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/sc.svg",
    currencies: {
      SCR: {
        name: "Seychellois rupee",
        symbol: "₨",
      },
    },
    languages: {
      crs: "Seychellois Creole",
      eng: "English",
      fra: "French",
    },
  },
  {
    name: "Saint Pierre and Miquelon",
    capital: ["Saint-Pierre"],
    population: 6069,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/pm.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Tokelau",
    capital: ["Fakaofo"],
    population: 1411,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/tk.svg",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      smo: "Samoan",
      tkl: "Tokelauan",
    },
  },
  {
    name: "Bulgaria",
    capital: ["Sofia"],
    borders: ["GRC", "MKD", "ROU", "SRB", "TUR"],
    population: 6927288,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/bg.svg",
    currencies: {
      BGN: {
        name: "Bulgarian lev",
        symbol: "лв",
      },
    },
    languages: {
      bul: "Bulgarian",
    },
  },
  {
    name: "Falkland Islands",
    capital: ["Stanley"],
    population: 2563,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/fk.svg",
    currencies: {
      FKP: {
        name: "Falkland Islands pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Latvia",
    capital: ["Riga"],
    borders: ["BLR", "EST", "LTU", "RUS"],
    population: 1901548,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/lv.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      lav: "Latvian",
    },
  },
  {
    name: "Réunion",
    capital: ["Saint-Denis"],
    population: 840974,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/re.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Guinea",
    capital: ["Conakry"],
    borders: ["CIV", "GNB", "LBR", "MLI", "SEN", "SLE"],
    population: 13132792,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/gn.svg",
    currencies: {
      GNF: {
        name: "Guinean franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Lebanon",
    capital: ["Beirut"],
    borders: ["ISR", "SYR"],
    population: 6825442,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/lb.svg",
    currencies: {
      LBP: {
        name: "Lebanese pound",
        symbol: "ل.ل",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
    },
  },
  {
    name: "Luxembourg",
    capital: ["Luxembourg"],
    borders: ["BEL", "FRA", "DEU"],
    population: 632275,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/lu.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      deu: "German",
      fra: "French",
      ltz: "Luxembourgish",
    },
  },
  {
    name: "Mauritius",
    capital: ["Port Louis"],
    population: 1265740,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/mu.svg",
    currencies: {
      MUR: {
        name: "Mauritian rupee",
        symbol: "₨",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      mfe: "Mauritian Creole",
    },
  },
  {
    name: "Estonia",
    capital: ["Tallinn"],
    borders: ["LVA", "RUS"],
    population: 1331057,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/ee.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      est: "Estonian",
    },
  },
  {
    name: "Norway",
    capital: ["Oslo"],
    borders: ["FIN", "SWE", "RUS"],
    population: 5379475,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/no.svg",
    currencies: {
      NOK: {
        name: "Norwegian krone",
        symbol: "kr",
      },
    },
    languages: {
      nno: "Norwegian Nynorsk",
      nob: "Norwegian Bokmål",
      smi: "Sami",
    },
  },
  {
    name: "Comoros",
    capital: ["Moroni"],
    population: 869595,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/km.svg",
    currencies: {
      KMF: {
        name: "Comorian franc",
        symbol: "Fr",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
      zdj: "Comorian",
    },
  },
  {
    name: "Venezuela",
    capital: ["Caracas"],
    borders: ["BRA", "COL", "GUY"],
    population: 28435943,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/ve.svg",
    currencies: {
      VES: {
        name: "Venezuelan bolívar soberano",
        symbol: "Bs.S.",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Iran",
    capital: ["Tehran"],
    borders: ["AFG", "ARM", "AZE", "IRQ", "PAK", "TUR", "TKM"],
    population: 83992953,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/ir.svg",
    currencies: {
      IRR: {
        name: "Iranian rial",
        symbol: "﷼",
      },
    },
    languages: {
      fas: "Persian (Farsi)",
    },
  },
  {
    name: "Sweden",
    capital: ["Stockholm"],
    borders: ["FIN", "NOR"],
    population: 10353442,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/se.svg",
    currencies: {
      SEK: {
        name: "Swedish krona",
        symbol: "kr",
      },
    },
    languages: {
      swe: "Swedish",
    },
  },
  {
    name: "Fiji",
    capital: ["Suva"],
    population: 896444,
    region: "Oceania",
    subregion: "Melanesia",
    flags: "https://flagcdn.com/fj.svg",
    currencies: {
      FJD: {
        name: "Fijian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      fij: "Fijian",
      hif: "Fiji Hindi",
    },
  },
  {
    name: "Philippines",
    capital: ["Manila"],
    population: 109581085,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/ph.svg",
    currencies: {
      PHP: {
        name: "Philippine peso",
        symbol: "₱",
      },
    },
    languages: {
      eng: "English",
      fil: "Filipino",
    },
  },
  {
    name: "Hong Kong",
    capital: ["City of Victoria"],
    borders: ["CHN"],
    population: 7500700,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/hk.svg",
    currencies: {
      HKD: {
        name: "Hong Kong dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      zho: "Chinese",
    },
  },
  {
    name: "Uruguay",
    capital: ["Montevideo"],
    borders: ["ARG", "BRA"],
    population: 3473727,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/uy.svg",
    currencies: {
      UYU: {
        name: "Uruguayan peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Macau",
    borders: ["CHN"],
    population: 649342,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/mo.svg",
    currencies: {
      MOP: {
        name: "Macanese pataca",
        symbol: "P",
      },
    },
    languages: {
      por: "Portuguese",
      zho: "Chinese",
    },
  },
  {
    name: "Switzerland",
    capital: ["Bern"],
    borders: ["AUT", "FRA", "ITA", "LIE", "DEU"],
    population: 8654622,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/ch.svg",
    currencies: {
      CHF: {
        name: "Swiss franc",
        symbol: "Fr.",
      },
    },
    languages: {
      fra: "French",
      gsw: "Swiss German",
      ita: "Italian",
      roh: "Romansh",
    },
  },
  {
    name: "Trinidad and Tobago",
    capital: ["Port of Spain"],
    population: 1399491,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/tt.svg",
    currencies: {
      TTD: {
        name: "Trinidad and Tobago dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Rwanda",
    capital: ["Kigali"],
    borders: ["BDI", "COD", "TZA", "UGA"],
    population: 12952209,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/rw.svg",
    currencies: {
      RWF: {
        name: "Rwandan franc",
        symbol: "Fr",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      kin: "Kinyarwanda",
    },
  },
  {
    name: "Albania",
    capital: ["Tirana"],
    borders: ["MNE", "GRC", "MKD", "UNK"],
    population: 2837743,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/al.svg",
    currencies: {
      ALL: {
        name: "Albanian lek",
        symbol: "L",
      },
    },
    languages: {
      sqi: "Albanian",
    },
  },
  {
    name: "Guinea-Bissau",
    capital: ["Bissau"],
    borders: ["GIN", "SEN"],
    population: 1967998,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/gw.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      por: "Portuguese",
      pov: "Upper Guinea Creole",
    },
  },
  {
    name: "Ivory Coast",
    capital: ["Yamoussoukro"],
    borders: ["BFA", "GHA", "GIN", "LBR", "MLI"],
    population: 26378275,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/ci.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "North Korea",
    capital: ["Pyongyang"],
    borders: ["CHN", "KOR", "RUS"],
    population: 25778815,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/kp.svg",
    currencies: {
      KPW: {
        name: "North Korean won",
        symbol: "₩",
      },
    },
    languages: {
      kor: "Korean",
    },
  },
  {
    name: "Bouvet Island",
    population: 0,
    region: "Antarctic",
    flags: "https://flagcdn.com/bv.svg",
    languages: {
      nor: "Norwegian",
    },
  },
  {
    name: "Andorra",
    capital: ["Andorra la Vella"],
    borders: ["FRA", "ESP"],
    population: 77265,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/ad.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      cat: "Catalan",
    },
  },
  {
    name: "Maldives",
    capital: ["Malé"],
    population: 540542,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/mv.svg",
    currencies: {
      MVR: {
        name: "Maldivian rufiyaa",
        symbol: ".ރ",
      },
    },
    languages: {
      div: "Maldivian",
    },
  },
  {
    name: "Nauru",
    capital: ["Yaren"],
    population: 10834,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/nr.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      nau: "Nauru",
    },
  },
  {
    name: "Singapore",
    capital: ["Singapore"],
    population: 5685807,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/sg.svg",
    currencies: {
      SGD: {
        name: "Singapore dollar",
        symbol: "$",
      },
    },
    languages: {
      zho: "Chinese",
      eng: "English",
      msa: "Malay",
      tam: "Tamil",
    },
  },
  {
    name: "Zimbabwe",
    capital: ["Harare"],
    borders: ["BWA", "MOZ", "ZAF", "ZMB"],
    population: 14862927,
    region: "Africa",
    subregion: "Southern Africa",
    flags: "https://flagcdn.com/zw.svg",
    currencies: {
      ZWL: {
        name: "Zimbabwean dollar",
        symbol: "$",
      },
    },
    languages: {
      bwg: "Chibarwe",
      eng: "English",
      kck: "Kalanga",
      khi: "Khoisan",
      ndc: "Ndau",
      nde: "Northern Ndebele",
      nya: "Chewa",
      sna: "Shona",
      sot: "Sotho",
      toi: "Tonga",
      tsn: "Tswana",
      tso: "Tsonga",
      ven: "Venda",
      xho: "Xhosa",
      zib: "Zimbabwean Sign Language",
    },
  },
  {
    name: "United States Virgin Islands",
    capital: ["Charlotte Amalie"],
    population: 106290,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/vi.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Dominica",
    capital: ["Roseau"],
    population: 71991,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/dm.svg",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Morocco",
    capital: ["Rabat"],
    borders: ["DZA", "ESH", "ESP"],
    population: 36910558,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/ma.svg",
    currencies: {
      MAD: {
        name: "Moroccan dirham",
        symbol: "د.م.",
      },
    },
    languages: {
      ara: "Arabic",
      ber: "Berber",
    },
  },
  {
    name: "Mayotte",
    capital: ["Mamoudzou"],
    population: 226915,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/yt.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Qatar",
    capital: ["Doha"],
    borders: ["SAU"],
    population: 2881060,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/qa.svg",
    currencies: {
      QAR: {
        name: "Qatari riyal",
        symbol: "ر.ق",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Sint Maarten",
    capital: ["Philipsburg"],
    borders: ["MAF"],
    population: 40812,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/sx.svg",
    currencies: {
      ANG: {
        name: "Netherlands Antillean guilder",
        symbol: "ƒ",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      nld: "Dutch",
    },
  },
  {
    name: "Costa Rica",
    capital: ["San José"],
    borders: ["NIC", "PAN"],
    population: 5094114,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/cr.svg",
    currencies: {
      CRC: {
        name: "Costa Rican colón",
        symbol: "₡",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Niue",
    capital: ["Alofi"],
    population: 1470,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/nu.svg",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      niu: "Niuean",
    },
  },
  {
    name: "Curaçao",
    capital: ["Willemstad"],
    population: 155014,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/cw.svg",
    currencies: {
      ANG: {
        name: "Netherlands Antillean guilder",
        symbol: "ƒ",
      },
    },
    languages: {
      eng: "English",
      nld: "Dutch",
      pap: "Papiamento",
    },
  },
  {
    name: "Cape Verde",
    capital: ["Praia"],
    population: 555988,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/cv.svg",
    currencies: {
      CVE: {
        name: "Cape Verdean escudo",
        symbol: "Esc",
      },
    },
    languages: {
      por: "Portuguese",
    },
  },
  {
    name: "Netherlands",
    capital: ["Amsterdam"],
    borders: ["BEL", "DEU"],
    population: 16655799,
    region: "Europe",
    subregion: "Western Europe",
    flags: "https://flagcdn.com/nl.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      nld: "Dutch",
    },
  },
  {
    name: "Romania",
    capital: ["Bucharest"],
    borders: ["BGR", "HUN", "MDA", "SRB", "UKR"],
    population: 19286123,
    region: "Europe",
    subregion: "Southeast Europe",
    flags: "https://flagcdn.com/ro.svg",
    currencies: {
      RON: {
        name: "Romanian leu",
        symbol: "lei",
      },
    },
    languages: {
      ron: "Romanian",
    },
  },
  {
    name: "Sierra Leone",
    capital: ["Freetown"],
    borders: ["GIN", "LBR"],
    population: 7976985,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/sl.svg",
    currencies: {
      SLL: {
        name: "Sierra Leonean leone",
        symbol: "Le",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Nicaragua",
    capital: ["Managua"],
    borders: ["CRI", "HND"],
    population: 6624554,
    region: "Americas",
    subregion: "Central America",
    flags: "https://flagcdn.com/ni.svg",
    currencies: {
      NIO: {
        name: "Nicaraguan córdoba",
        symbol: "C$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Algeria",
    capital: ["Algiers"],
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    population: 44700000,
    region: "Africa",
    subregion: "Northern Africa",
    flags: "https://flagcdn.com/dz.svg",
    currencies: {
      DZD: {
        name: "Algerian dinar",
        symbol: "د.ج",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Jamaica",
    capital: ["Kingston"],
    population: 2961161,
    region: "Americas",
    subregion: "Caribbean",
    flags: "https://flagcdn.com/jm.svg",
    currencies: {
      JMD: {
        name: "Jamaican dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      jam: "Jamaican Patois",
    },
  },
  {
    name: "Togo",
    capital: ["Lomé"],
    borders: ["BEN", "BFA", "GHA"],
    population: 8278737,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/tg.svg",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Vatican City",
    capital: ["Vatican City"],
    borders: ["ITA"],
    population: 451,
    region: "Europe",
    subregion: "Southern Europe",
    flags: "https://flagcdn.com/va.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ita: "Italian",
      lat: "Latin",
    },
  },
  {
    name: "Jersey",
    capital: ["Saint Helier"],
    population: 100800,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/je.svg",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      JEP: {
        name: "Jersey pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      nrf: "Jèrriais",
    },
  },
  {
    name: "Ecuador",
    capital: ["Quito"],
    borders: ["COL", "PER"],
    population: 17643060,
    region: "Americas",
    subregion: "South America",
    flags: "https://flagcdn.com/ec.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
  },
  {
    name: "Samoa",
    capital: ["Apia"],
    population: 198410,
    region: "Oceania",
    subregion: "Polynesia",
    flags: "https://flagcdn.com/ws.svg",
    currencies: {
      WST: {
        name: "Samoan tālā",
        symbol: "T",
      },
    },
    languages: {
      eng: "English",
      smo: "Samoan",
    },
  },
  {
    name: "British Indian Ocean Territory",
    capital: ["Diego Garcia"],
    population: 3000,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/io.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Nigeria",
    capital: ["Abuja"],
    borders: ["BEN", "CMR", "TCD", "NER"],
    population: 206139587,
    region: "Africa",
    subregion: "Western Africa",
    flags: "https://flagcdn.com/ng.svg",
    currencies: {
      NGN: {
        name: "Nigerian naira",
        symbol: "₦",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Zambia",
    capital: ["Lusaka"],
    borders: ["AGO", "BWA", "COD", "MWI", "MOZ", "NAM", "TZA", "ZWE"],
    population: 18383956,
    region: "Africa",
    subregion: "Eastern Africa",
    flags: "https://flagcdn.com/zm.svg",
    currencies: {
      ZMW: {
        name: "Zambian kwacha",
        symbol: "ZK",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "French Southern and Antarctic Lands",
    capital: ["Port-aux-Français"],
    population: 400,
    region: "Antarctic",
    flags: "https://flagcdn.com/tf.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
  },
  {
    name: "Chad",
    capital: ["N'Djamena"],
    borders: ["CMR", "CAF", "LBY", "NER", "NGA", "SDN"],
    population: 16425859,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/td.svg",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
    },
  },
  {
    name: "Svalbard and Jan Mayen",
    capital: ["Longyearbyen"],
    population: 2562,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/sj.svg",
    currencies: {
      NOK: {
        name: "krone",
        symbol: "kr",
      },
    },
    languages: {
      nor: "Norwegian",
    },
  },
  {
    name: "Lithuania",
    capital: ["Vilnius"],
    borders: ["BLR", "LVA", "POL", "RUS"],
    population: 2794700,
    region: "Europe",
    subregion: "Northern Europe",
    flags: "https://flagcdn.com/lt.svg",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      lit: "Lithuanian",
    },
  },
  {
    name: "Ukraine",
    capital: ["Kyiv"],
    borders: ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"],
    population: 44134693,
    region: "Europe",
    subregion: "Eastern Europe",
    flags: "https://flagcdn.com/ua.svg",
    currencies: {
      UAH: {
        name: "Ukrainian hryvnia",
        symbol: "₴",
      },
    },
    languages: {
      ukr: "Ukrainian",
    },
  },
  {
    name: "China",
    capital: ["Beijing"],
    borders: [
      "AFG",
      "BTN",
      "MMR",
      "HKG",
      "IND",
      "KAZ",
      "NPL",
      "PRK",
      "KGZ",
      "LAO",
      "MAC",
      "MNG",
      "PAK",
      "RUS",
      "TJK",
      "VNM",
    ],
    population: 1402112000,
    region: "Asia",
    subregion: "Eastern Asia",
    flags: "https://flagcdn.com/cn.svg",
    currencies: {
      CNY: {
        name: "Chinese yuan",
        symbol: "¥",
      },
    },
    languages: {
      zho: "Chinese",
    },
  },
  {
    name: "United States Minor Outlying Islands",
    capital: ["Washington DC"],
    population: 300,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/um.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Northern Mariana Islands",
    capital: ["Saipan"],
    population: 57557,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/mp.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      cal: "Carolinian",
      cha: "Chamorro",
      eng: "English",
    },
  },
  {
    name: "Palestine",
    capital: ["Ramallah"],
    borders: ["ISR", "EGY", "JOR"],
    population: 4803269,
    region: "Asia",
    subregion: "Western Asia",
    flags: "https://flagcdn.com/ps.svg",
    currencies: {
      EGP: {
        name: "Egyptian pound",
        symbol: "E£",
      },
      ILS: {
        name: "Israeli new shekel",
        symbol: "₪",
      },
      JOD: {
        name: "Jordanian dinar",
        symbol: "JD",
      },
    },
    languages: {
      ara: "Arabic",
    },
  },
  {
    name: "Greenland",
    capital: ["Nuuk"],
    population: 56367,
    region: "Americas",
    subregion: "North America",
    flags: "https://flagcdn.com/gl.svg",
    currencies: {
      DKK: {
        name: "krone",
        symbol: "kr.",
      },
    },
    languages: {
      kal: "Greenlandic",
    },
  },
  {
    name: "South Sudan",
    capital: ["Juba"],
    borders: ["CAF", "COD", "ETH", "KEN", "SDN", "UGA"],
    population: 11193729,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/ss.svg",
    currencies: {
      SSP: {
        name: "South Sudanese pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
  },
  {
    name: "Bangladesh",
    capital: ["Dhaka"],
    borders: ["MMR", "IND"],
    population: 164689383,
    region: "Asia",
    subregion: "Southern Asia",
    flags: "https://flagcdn.com/bd.svg",
    currencies: {
      BDT: {
        name: "Bangladeshi taka",
        symbol: "৳",
      },
    },
    languages: {
      ben: "Bengali",
    },
  },
  {
    name: "Equatorial Guinea",
    capital: ["Malabo"],
    borders: ["CMR", "GAB"],
    population: 1402985,
    region: "Africa",
    subregion: "Middle Africa",
    flags: "https://flagcdn.com/gq.svg",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      por: "Portuguese",
      spa: "Spanish",
    },
  },
  {
    name: "Namibia",
    capital: ["Windhoek"],
    borders: ["AGO", "BWA", "ZAF", "ZMB"],
    population: 2540916,
    region: "Africa",
    subregion: "Southern Africa",
    flags: "https://flagcdn.com/na.svg",
    currencies: {
      NAD: {
        name: "Namibian dollar",
        symbol: "$",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      afr: "Afrikaans",
      deu: "German",
      eng: "English",
      her: "Herero",
      hgm: "Khoekhoe",
      kwn: "Kwangali",
      loz: "Lozi",
      ndo: "Ndonga",
      tsn: "Tswana",
    },
  },
  {
    name: "Timor-Leste",
    capital: ["Dili"],
    borders: ["IDN"],
    population: 1318442,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/tl.svg",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      por: "Portuguese",
      tet: "Tetum",
    },
  },
  {
    name: "Brunei",
    capital: ["Bandar Seri Begawan"],
    borders: ["MYS"],
    population: 437483,
    region: "Asia",
    subregion: "South-Eastern Asia",
    flags: "https://flagcdn.com/bn.svg",
    currencies: {
      BND: {
        name: "Brunei dollar",
        symbol: "$",
      },
      SGD: {
        name: "Singapore dollar",
        symbol: "$",
      },
    },
    languages: {
      msa: "Malay",
    },
  },
  {
    name: "Kiribati",
    capital: ["South Tarawa"],
    population: 119446,
    region: "Oceania",
    subregion: "Micronesia",
    flags: "https://flagcdn.com/ki.svg",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
      KID: {
        name: "Kiribati dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      gil: "Gilbertese",
    },
  },
];

export { countries };
