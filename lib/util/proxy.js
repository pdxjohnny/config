module.exports = {
  set: function (config) {
    // Override environment defaults if proxy config options are set
    // This will make requests.js follow the proxies in config
    if (Object.prototype.hasOwnProperty.call(config, 'no_proxy')) {
      process.env.NO_PROXY = config.noProxy;
      delete process.env.no_proxy; // jshint ignore:line
    }
    if (Object.prototype.hasOwnProperty.call(config, 'proxy')) {
      process.env.HTTP_PROXY = config.proxy;
      delete process.env.http_proxy; // jshint ignore:line
    }
    if (Object.prototype.hasOwnProperty.call(config, 'httpsProxy')) {
      process.env.HTTPS_PROXY = config.httpsProxy;
      delete process.env.https_proxy; // jshint ignore:line
    }
  }
};
