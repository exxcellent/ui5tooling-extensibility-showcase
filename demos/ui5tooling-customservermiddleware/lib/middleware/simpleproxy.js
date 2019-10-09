module.exports = function({resources, options}) {

    // Require library http-proxy-middleware.
    const proxy = require('http-proxy-middleware');

    // Read configuration object from ui5.yaml.
    var configuration = options.configuration;

    // Create configuration for proxy.
    var proxyConfig = {
        target: configuration.target,
        changeOrigin: configuration.changeOrigin || true,
        pathRewrite: configuration.pathRewrite
    };

    // Return middleware function
    return proxy(configuration.path, proxyConfig);
};
