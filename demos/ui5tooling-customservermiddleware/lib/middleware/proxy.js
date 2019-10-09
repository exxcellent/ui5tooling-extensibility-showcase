module.exports = function({resources, options}) {

    const proxy = require('http-proxy-middleware');

    var configuration = options.configuration;
    var proxies = configuration.proxies;

    var aProxies = [];
    proxies.forEach(function(element){
        var proxyEntryConfig = {
            target: element.target,
            changeOrigin: element.changeOrigin || false,
            pathRewrite: element.pathRewrite
        };
        var proxyEntry = proxy(element.path, proxyEntryConfig);
        aProxies.push(proxyEntry);
    });

    return aProxies;
};
