#!/usr/bin/env node
'use strict'
const meow = require('meow')
const Ora = require('ora')
const main = require('./')

const spin = new Ora()

const cli = meow(`
  Usage:
    is-following user target_user

  Example:
    is-following tj sindresorhus
`, {
  alias: {
    v: 'version',
    h: 'help'
  }
})

const user = cli.input[0]
const targetUser = cli.input[1]
spin.start()
main(user, targetUser)
  .then(following => {
    spin.stop()
    if (following) {
      console.log(`OMFG! ${user} is following ${targetUser}!`)
    } else {
      console.log(`Oops... ${user} is not following ${targetUser}.`)
    }
  })
  .catch(err => {
    spin.stop()
    console.log(err.stack)
  })
