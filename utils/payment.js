const crypto = require('crypto')
const URL = process.env.PAYMENT_URL || 'https://how-house.vercel.app/'
const MerchantID = process.env.MERCHANT_ID
const HashKey = process.env.HASH_KEY
const HashIV = process.env.HASH_IV

const PayGateWay = 'https://ccore.newebpay.com/MPG/mpg_gateway'
const ReturnURL = URL + '/?from=returnURL'
const NotifyURL = URL + '/api/notifyURL'
// const ReturnURL = URL + '/newebpay/callback?from=ReturnURL'
// const ClientBackURL = URL + '/orders'
const ClientBackURL = URL + '/?from=clientBackURL'
let data

function genDataChain(TradeInfo) {
  const results = []
  for (const kv of Object.entries(TradeInfo)) {
    results.push(`${kv[0]}=${kv[1]}`)
  }
  return results.join('&')
}

function encryptTradeInfoAES(TradeInfo) {
  const encrypt = crypto.createCipheriv('aes256', HashKey, HashIV)
  const enc = encrypt.update(genDataChain(TradeInfo), 'utf8', 'hex')
  return enc + encrypt.final('hex')
}

function hashTradeInfoSHA(TradeInfo) {
  const sha = crypto.createHash('sha256')
  const plainText = `HashKey=${HashKey}&${TradeInfo}&HashIV=${HashIV}`

  return sha.update(plainText).digest('hex').toUpperCase()
}

export default {
  getTradeInfo: (Amt, Desc, Email, OrderId = null) => {
    data = {
      MerchantID,
      RespondType: 'JSON',
      Version: 1.5,
      TimeStamp: OrderId || Date.now(),
      MerchantOrderNo: OrderId || Date.now(),
      Amt,
      ItemDesc: Desc,
      Email,
      //
      LoginType: 0,
      ReturnURL,
      NotifyURL,
      ClientBackURL,
      OrderComment: 'OrderComment',
      LangType: 'zh-tw',
    }

    console.log('data', data)

    const mpgAesEncrypt = encryptTradeInfoAES(data)
    const mpgShaEncrypt = hashTradeInfoSHA(mpgAesEncrypt)

    const tradeInfo = {
      MerchantID,
      TradeInfo: mpgAesEncrypt,
      TradeSha: mpgShaEncrypt,
      Version: 1.5,
      PayGateWay,
      MerchantOrderNo: data.MerchantOrderNo,
    }

    return tradeInfo
  },
  decryptTradeInfo: (TradeInfo) => {
    const decrypt = crypto.createDecipheriv('aes256', HashKey, HashIV)
    decrypt.setAutoPadding(false)
    const text = decrypt.update(TradeInfo, 'hex', 'utf8')
    const plainText = text + decrypt.final('utf8')
    // eslint-disable-next-line no-control-regex
    const result = plainText.replace(/[\x00-\x20]+/g, '')
    return result
  },
}

// module.exports = {
//   getTradeInfo: (Amt, Desc, Email) => {
//     data = {
//       MerchantID,
//       RespondType: 'JSON',
//       Version: 1.6,
//       TimeStamp: Date.now(),
//       MerchantOrderNo: Date.now(),
//       Amt,
//       ItemDesc: Desc,
//       Email,
//       LoginType: 0,
//       ReturnURL,
//       NotifyURL,
//       ClientBackURL,
//       OrderComment: 'OrderComment',
//       LangType: 'en',
//     }

//     mpg_aes_encrypt = encryptTradeInfoAES(data)
//     mpg_sha_encrypt = hashTradeInfoSHA(mpg_aes_encrypt)

//     const tradeInfo = {
//       MerchantID,
//       TradeInfo: mpg_aes_encrypt,
//       TradeSha: mpg_sha_encrypt,
//       Version: 1.6,
//       PayGateWay,
//       MerchantOrderNo: data.MerchantOrderNo,
//     }

//     return tradeInfo
//   },
//   decryptTradeInfo: (TradeInfo) => {
//     const decrypt = crypto.createDecipheriv('aes256', HashKey, HashIV)
//     decrypt.setAutoPadding(false)
//     const text = decrypt.update(TradeInfo, 'hex', 'utf8')
//     const plainText = text + decrypt.final('utf8')
//     const result = plainText.replace(/[\x00-\x20]+/g, '')
//     return result
//   },
// }
