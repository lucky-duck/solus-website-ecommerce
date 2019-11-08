module.exports = (config) => {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  config.output.filename = 'static/js/[name].js';
  config.plugins[5].options.moduleFilename = () => 'static/css/main.css';

  // astroturf
  config.module.rules.push({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    use: [
      {
        loader: 'astroturf/loader',
        options: { extension: '.module.scss' },
      },
    ],
  });

  return config;
};
