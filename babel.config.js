/* eslint global-require: off */

const developmentEnvironments = ['development', 'test'];

const developmentPlugins = [require('react-hot-loader/babel')];

const productionPlugins = [];

module.exports = api => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache

  const development = api.env(developmentEnvironments);

  return {
    presets: [
      [require('@babel/preset-env')],
      [require('@babel/preset-react'), { development }],
      require('@babel/preset-typescript'),
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-transform-runtime'),
      ...(development ? developmentPlugins : productionPlugins),
    ],
  };
};
