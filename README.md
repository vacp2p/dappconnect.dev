# Description

This repository is the source for https://wakuconnect.dev/.

It is built with [Gulp](https://gulpjs.com/) and styled with [TailWind](https://tailwindcss.com/).

# Development

Install the dependencies:
```sh
yarn install
```
To simply build the project use:
```sh
gulp build
```
For development use:
```sh
gulp devel
```
Now you should be able to see the project running at [localhost:3000](http://localhost:3000).

# Continuous Integration

Two branches are built by [our Jenkins instance](https://ci.status.im/):

* `master` is deployed to https://dappconnect.dev/ by [CI](https://ci.status.im/job/website/job/dappconnect.dev/)
* `develop` is deployed to https://dev.dappconnect.dev/ by [CI](https://ci.status.im/job/website/job/dev.dappconnect.dev/)

PRs should be made for `develop` branch and `master` should be [rebased](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) on `develop` once changes are verified.
