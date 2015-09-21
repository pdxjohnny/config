// EnvProxy uses the proxy vaiables passed to it in set and sets the
// process.env uppercase proxy variables to them with the ability
// to restore the original values later
var EnvProxy = function() {
  this.restoreFrom = {};
  return this;
};

EnvProxy.prototype.set = function (config) {
  // Override environment defaults if proxy config options are set
  // This will make requests.js follow the proxies in config
  if (Object.prototype.hasOwnProperty.call(config, 'no_proxy')) {
    this.restoreFrom.NO_PROXY = process.env.NO_PROXY;
    process.env.NO_PROXY = config.noProxy;
    delete process.env.no_proxy; // jshint ignore:line
  }
  if (Object.prototype.hasOwnProperty.call(config, 'proxy')) {
    this.restoreFrom.HTTP_PROXY = process.env.HTTP_PROXY;
    process.env.HTTP_PROXY = config.proxy;
    delete process.env.http_proxy; // jshint ignore:line
  }
  if (Object.prototype.hasOwnProperty.call(config, 'https-proxy')) {
    this.restoreFrom.HTTPS_PROXY = process.env.HTTPS_PROXY;
    process.env.HTTPS_PROXY = config['https-proxy'];
    delete process.env.https_proxy; // jshint ignore:line
  }
};

EnvProxy.prototype.restore = function () {
  // Reset upercase proxy variables
  if (Object.prototype.hasOwnProperty.call(this.restoreFrom, 'NO_PROXY')) {
    process.env.NO_PROXY = this.restoreFrom.NO_PROXY;
  }
  if (Object.prototype.hasOwnProperty.call(this.restoreFrom, 'HTTP_PROXY')) {
    process.env.HTTP_PROXY = this.restoreFrom.HTTP_PROXY;
  }
  if (Object.prototype.hasOwnProperty.call(this.restoreFrom, 'HTTPS_PROXY')) {
    process.env.HTTPS_PROXY = this.restoreFrom.HTTPS_PROXY;
  }
};

module.exports = EnvProxy;
