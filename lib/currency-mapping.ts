export interface CurrencyMapping {
  initialCurrency: string
  fiatName: string
}

export const currencyMappings: Record<string, CurrencyMapping> = {
  US: {
    initialCurrency: 'usd',
    fiatName: 'USD'
  },
  CA: {
    initialCurrency: 'cad',
    fiatName: 'CAD'
  },
  AU: {
    initialCurrency: 'aud',
    fiatName: 'AUD'
  },
  GB: {
    initialCurrency: 'gbp',
    fiatName: 'GBP'
  },
  HK: {
    initialCurrency: 'hkd',
    fiatName: 'HKD'
  },
  SG: {
    initialCurrency: 'sgd',
    fiatName: 'SGD'
  }
}

export function getCurrencyForCountry(countryCode: string): CurrencyMapping {
  return currencyMappings[countryCode] || {
    initialCurrency: 'usd',
    fiatName: 'USD'
  }
}

