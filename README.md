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
npm install --save-dev stylelint stylelint-config-gds@0.1.0-pre.3
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

## Releasing

To release a new version of this module you will need credentials to the
[alphagov npm account][] (for GOV.UK developers this can be accessed via
the 2nd line password store [govuk-secrets][]) and you will also need to
have a [GitHub personal access token][github-pat] which has repo access.

Once you have established access to the credentials the next step is to
decide the next [semantic version number](https://semver.org/) and apply this
to [package.json][], [package-lock.json][] and [README.md][]. These changes
should then be raised as a pull request on GitHub.

Once your pull request has been reviewed and merged you can perform the actual
release via your terminal. This is done with by using the [release-it][]
module and this process will create a tag on GitHub, push a release to GitHub
and publish a release to npm.

1. Ensure you're in the working directory of the repo and on the `main` branch
   which is up-to-date with upstream.
1. Run `npm login` and enter your npm credentials to authenticate with npm.
1. Set your GitHub personal access token to a `GITHUB_TOKEN` environment
   variable, for example `export GITHUB_TOKEN=my-token`.
1. Test that the release does what you expect it is going to do by performing
   a dry run of the release with `npm run release-dry-run`.
1. Once you're happy with the dry-run run the release for real by running
   `npm run release`, you should answer yes to every step otherwise it will
   only be a partial release.

[alphagov npm account]: https://www.npmjs.com/~alphagov
[govuk-secrets]: https://github.com/alphagov/govuk-secrets
[github-pat]: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
[package.json]: https://github.com/alphagov/stylelint-config-gds/blob/main/package.json
[package-lock.json]: https://github.com/alphagov/stylelint-config-gds/blob/main/package-lock.json
[README.md]: https://github.com/alphagov/stylelint-config-gds/blob/main/README.md
[release-it]: https://github.com/release-it/release-it

## Licence

[MIT License](LICENCE)
