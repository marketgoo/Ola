![logo ola](ola.png)

React implementation of **ola** design system created by **marketgoo**.

- [View *ola* specs](https://zeroheight.com/22mjgbuf6)
- [View storybook demos](https://marketgoo.gitlab.io/ola/)

## Install & update (using yarn)

To install, execute the following command: `yarn add https://marketgoo.gitlab.io/ola/nightly.tgz`

To update, copy the following script to your `package.json`:

```json
{
    "scripts": {
        "update-ola": "yarn cache clean @ola/components && cache=$(yarn cache dir) && [ \"$cache\" != \"\" ] && [ -d \"$cache/.tmp\" ] && rm -rf \"$cache/.tmp\" && yarn add https://marketgoo.gitlab.io/ola/nightly.tgz"
    }
}
```

and execute it: `yarn update-ola`

---

Please see [CHANGELOG](CHANGELOG.md) for more information about recent changes.

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
