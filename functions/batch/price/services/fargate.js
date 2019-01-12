const _ = require('lodash')
const { parseFirstPrice } = require('../parser')

module.exports = {
  cpu: {
    price: {
      params: {
        ServiceCode: 'AmazonECS',
        Filters: {
          location: 'Asia Pacific (Tokyo)',
          usagetype: 'APN1-Fargate-vCPU-Hours:perCPU'
        }
      },
      parse: priceList => parseFirstPrice(priceList[0])
    }
  },
  memory: {
    price: {
      params: {
        ServiceCode: 'AmazonECS',
        Filters: {
          location: 'Asia Pacific (Tokyo)',
          usagetype: 'APN1-Fargate-GB-Hours'
        }
      },
      parse: priceList => parseFirstPrice(priceList[0])
    }
  },
  pair: {
    values: {
      '0.25': [0.5, ..._.range(1, 3)].map(v => v.toString()),
      '0.5': _.range(1, 5).map(v => v.toString()),
      '1': _.range(2, 9).map(v => v.toString()),
      '2': _.range(4, 17).map(v => v.toString()),
      '4': _.range(8, 31).map(v => v.toString())
    }
  }
}
