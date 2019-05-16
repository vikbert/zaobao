#!/usr/bin/env sh
set -e

yarn run docs:build
cd docs/.vuepress/dist

git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"

git push -f https://github.com/vikbert/zaobao.git master:gh-pages

cd -
git pull
