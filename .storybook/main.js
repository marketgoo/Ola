module.exports = {
  stories: [
    '../src/*/stories.js',
    '../src/stories.js',
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register'
  ]
}