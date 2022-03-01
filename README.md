# My personal website!

This is my personal website, hosted at [https://michaelzhao.xyz](https://michaelzhao.xyz). I have added a few libraries, namely [jquery](https://jquery.com/) and [mustache](https://mustache.github.io/), the first for easy DOM modification and the second for templating and components.

## Build

There is a Github Action workflow configured to run whenever a push happens to master that will update the `gh-pages` branch with a new static build. To manually build the site, simply run `yarn build`, and it will create a production build in `/docs`.
