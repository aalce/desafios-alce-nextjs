export interface CountryDetails {
  flags: {
    png: string
  }
  name: {
    common: string
    official: string
  }
  region: string
  population: string
}

export interface CountryI extends CountryDetails {
  flag: string
  cca3: string
  flags: {
    png: string
  }
}

export interface Country {
  country: CountryI
}

export interface Countries {
  countries: Country[]
}
