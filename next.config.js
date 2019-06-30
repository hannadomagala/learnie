module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.jsx?$/,
      use: ['babel-loader', 'stylelint-custom-processor-loader'],
      exclude: /node_modules/
    });

    return config;
  }
};
