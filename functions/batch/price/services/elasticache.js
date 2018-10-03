const { parseInstances } = require('../parser')

module.exports = {
  instance: {
    params: {
      ServiceCode: 'AmazonElastiCache',
      Filters: {
        location: 'Asia Pacific (Tokyo)',
        currentGeneration: 'Yes',
        cacheEngine: 'Redis'
      }
    },
    parse: priceList => {
      return parseInstances(priceList, { index: 1, order: ['t2', 'm3', 'm4', 'r3', 'r4'] })
    }
  }
}