import test from 'ava'
import isFollowing from './'

test('main', async t => {
  t.true(await isFollowing('cee', 'egoist'))
  t.false(await isFollowing('egoist', 'muan'))
})
