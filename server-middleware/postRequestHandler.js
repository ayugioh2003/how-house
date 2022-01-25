import querystring from 'querystring'

module.exports = (req, res, next) => {
  let body = ''

  req.on('data', (data) => {
    body += data
  })

  req.on('end', () => {
    req.body = querystring.parse(body) || {}
    next()
  })
}
