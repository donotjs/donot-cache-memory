smart-static-mem-cache
======================

[![Build Status](https://travis-ci.org/trenskow/smart-static-mem-cache.svg?branch=master)](https://travis-ci.org/trenskow/smart-static-mem-cache)

Memory cache engine for [smart-static](https://github.com/trenskow/smart-static.js).

----

# Usage

    var smartStatic = require('smart-static');
    var memCache = require('smart-static-mem-cache');

    // app is an http, connect or express app
    app.use(smartStatic(serveDir, {
        cache: memCache()
    ));
