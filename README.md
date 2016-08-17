<p align="center">
  <br><strong>is-following</strong> could check <br>if a user is following another on GitHub..
</p>

<p align="center">
  <a href="https://npmjs.com/package/is-following"><img src="https://img.shields.io/npm/v/is-following.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/is-following"><img src="https://img.shields.io/npm/dm/is-following.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/egoist/is-following"><img src="https://img.shields.io/circleci/project/egoist/is-following/master.svg?style=flat-square" alt="Build Status"></a>
</p>

![preview](https://ooo.0o0.ooo/2016/08/17/57b477fab6fff.png)

## Install

```bash
$ npm install -g is-following
```

## Usage

```bash
$ is-following tj sindresorhus
# Oops... tj is not following sindresorhus.
```

## API

```bash
$ npm install --save is-following
```

## Usage

```js
const isFollowing = require('is-following')

isFollowing('user', 'targetUser')
  .then(following => {
    console.log(following) // true or false
  })
```

## License

MIT © [EGOIST](https://github.com/egoist)
