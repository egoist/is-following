'use strict'
var fetch = require('isomorphic-fetch')

module.exports = function (user, targetUser) {
  return fetch(
    'https://api.github.com/users/' +
    user +
    '/following/' +
    targetUser
  ).then(function (res) {
    return res.status === 204
  })
}
