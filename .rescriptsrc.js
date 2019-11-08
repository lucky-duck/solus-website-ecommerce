module.exports = (config) => {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  config.output.filename = 'static/js/[name].js';
  config.plugins[5].options.moduleFilename = () => 'static/css/main.css';
  return config;
};
