# GDS Stylelint Config

⚠ This is a work in progress and not ready to be used in projects ⚠️

This provides a [stylelint](https://stylelint.io/) configuration for linting
SCSS and CSS files as per the conventions of the [Government Digital Service
(GDS)](https://www.gov.uk/government/organisations/government-digital-service).

It builds upon [stylelint-config-standard][] with conventions GDS have adopted
over the years.

[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard

## Usage

These rules are expected to be mostly used for SCSS projects (as these are more
common at GDS) however the CSS rules can be used alone.

To add this to your project, install stylelint and this module:

```bash
npm install --save-dev stylelint
npm install --save-dev git://github.com/alphagov/stylelint-config-gds.git
```

You then need to [configure](https://stylelint.io/user-guide/configure)
stylelint.

To lint SCSS you can add the following property to your package.json:

```
  "stylelint": {
    "extends": "stylelint-config-gds/scss"
  }
```

To lint CSS add the following:

```
  "stylelint": {
    "extends": "stylelint-config-gds/css"
  }
```

You should then be able to run a lint with
`node_modules/.bin/stylelint '**/*.(s)?css'`.

## Development

Make changes to rules that affect both CSS and SCSS in `./css.js`, for rules
that only apply to SCSS add them to `./scss.js`.

You can lint the JS and run tests with `npm test`

## Licence

[MIT License](LICENCE)
