#!/usr/bin/env sh
set -e
DATE=$(date '+%Y-%m-%d %H:%M:%S')

git add -A
git commit -m "new article on $DATE"
git push -f

### this will build the md fiels into html static pages, then publish htmls to gh-pages branch
yarn run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy: github gh-pages $DATE"
git push -f https://github.com/vikbert/zaobao.git master:gh-pages

cd -
git pull
