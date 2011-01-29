// COPYRIGHT

(function() {
    // node or browser?
    if (typeof(window) === 'undefined') {
        // running in node -- not much to do:
        global.provide = provide_node;
    } else {
        // running in browser -- fake up CommonJS:
        window.global = window;
        window.module = { exports: {} };
        window.exports = module.exports;

        window.provide = provide_browser;
    }

    // implementations of provide() for browser and Node:

    function provide_node(ns) {
        return module.exports;
    };

    function provide_browser(ns) {
        var scope = window;
        var scopes = ns.split('.');
        while (scopes.length) {
            var name = scopes.shift();
            if (! (name in scope)) {
                scope[name] = {};
            }
            scope = scope[name];
        }
        return scope;
    };
})();
