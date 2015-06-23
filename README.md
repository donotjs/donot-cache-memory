smart-static-mem-cache
======================

[![Build Status](https://travis-ci.org/trenskow/smart-static-mem-cache.svg?branch=master)](https://travis-ci.org/trenskow/smart-static-mem-cache)

Memory cache engine for [smart-static](https://github.com/trenskow/smart-static).

# How to Use

Usage: `memCache()`

## Example
	
	var http = require('http');
	
    var smartStatic = require('smart-static');
    var memCache = require('smart-static-mem-cache');
	
    var server = http.createServer(smartStatic(serveDir, {
        cache: memCache()
    }));
    
    server.listen(8000);
    
> Remark. It does not make sense to use caching without template engine plug-ins - as only template renderings are cached. See [smart-static](https://github.com/trenskow/smart-static) for available template plug-ins.
    
# Memory Usage

This plug-in keeps all cache in memory and it does not take memory usage into account.

If you need large amounts of caching - e.g. you have many templates - it is recommended to use the [smart-static-fs-cache](https://github.com/trenskow/smart-static-fs-cache) file system cache plug-in.

# License

MIT
