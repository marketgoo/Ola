![logo ola](ola.png)

*Ola* is the design system created by **marketgoo**. This is an implementation in React.

[View *ola* specs](https://zeroheight.com/22mjgbuf6)

## Install & update (using yarn)

To install, execute the following command: `yarn add https://marketgoo.gitlab.io/app/design-system-ui/nightly.tgz`

To update, copy the following script to your `package.json`:

```json
{
    "scripts": {
        "update-ola": "yarn cache clean @ola/ola && cache=$(yarn cache dir) && [ \"$cache\" != \"\" ] && [ -d \"$cache/.tmp\" ] && rm -rf \"$cache/.tmp\" && yarn add https://marketgoo.gitlab.io/app/design-system-ui/nightly.tgz"
    }
}
```

and execute it: `yarn update-ola`

---

Please see [CHANGELOG](CHANGELOG.md) for more information about recent changes.

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
