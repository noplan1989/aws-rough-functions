const fs = require('fs')
const axios = require('axios')
const { uploadJson } = require('../../lib/s3')
const { BUCKET_NAME, LOCAL_FX_PATH, FX_ENDPOINT, IS_LOCAL } = process.env

module.exports = async () => {
  const res = await axios.get(FX_ENDPOINT)
  const usdjpy = res.data.JPY

  // 明らかにおかしい為替じゃないかだけ確認
  if (!usdjpy || usdjpy < 50 || usdjpy > 150) {
    throw new Error(`為替の値がなんだかおかしいです : ${usdjpy}`)
  }

  if (IS_LOCAL) {
    if (LOCAL_FX_PATH) {
      fs.writeFileSync(LOCAL_FX_PATH, JSON.stringify({usdjpy: parseFloat(usdjpy)}))
    }
  } else {
    await uploadJson(BUCKET_NAME, 'json/fx.json', {usdjpy: parseFloat(usdjpy)})
  }
}
