donot-cache-memory
======================

[![Build Status](https://travis-ci.org/donotjs/donot-cache-memory.svg?branch=master)](https://travis-ci.org/donotjs/donot-cache-memory)

Memory cache engine for [donot](https://github.com/donotjs/donot).

# How to Use

Usage: `new MemoryCache()`

## Example

	var http = require('http'),
	    donot = require('donot'),
	    MemoryCache = require('donot-cache-memory');

	var server = http.createServer(donot(__dirname + '/public', {
		cache: new MemoryCache()
	}));

	server.listen(8000);

> Remark. It does not make sense to use caching without one or more engine plug-ins - as only an engine's output is cached. See [donot](https://github.com/donotjs/donot) for available engine plug-ins.

# Memory Usage

This plug-in keeps all cache in memory and it does not take memory usage into account.

If you need large amounts of caching - e.g. you have many templates - it is recommended to use the [donot-cache-filesystem](https://github.com/donotjs/donot-cache-filesystem) or [donot-cache-redis](https://github.com/donotjs/donot-cache-redis).

# License

MIT
