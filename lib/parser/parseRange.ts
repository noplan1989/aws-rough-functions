import sortBy from 'lodash/sortBy'
import { parsePrices } from './parsePrices'
import { PriceRange, PriceItem } from '../types'

export function parseRange(priceItem: PriceItem): PriceRange[] {
  const prices = parsePrices(priceItem).map(price => ({
    beginRange: parseInt(price.beginRange, 10),
    endRange: price.endRange === 'Inf' ? null : parseInt(price.endRange, 10),
    price: parseFloat(price.pricePerUnit.USD)
  }))

  return sortBy(prices, ['beginRange'])
}
