
::: tip How to Install and start
use `bash deploy.sh` to deploy and push the code
:::

```bash
# install package.json
$ yarn install

# check markdown files
$ yarn lint:md

# local dev
$ yarn docs:dev 

# build and deploy to github pages
$ bash deploy
# open browser on https://vikbert.github.io/zaobao/
```

::: tip How to update the styles
use `override.styl` and `stlye.styl` to customer the stylesheet
:::

```stylus
// .vuepress/style.styl, will overwrite the default theme
.site-name {
  font-family:   'Major Mono Display', cursive;
  font-weight: 400 !important
  font-size: 2rem !important
}
  
```

```stylus
// .vuepress/override.styl, SHOULD ONLY contain "stylus constants override".
$accentColor = #029ffd
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```

::: tip How to import new fonts
use `head` config to update head
:::

