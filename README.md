donot-cache-memory
======================

[![Build Status](https://travis-ci.org/donotjs/donot-cache-memory.svg?branch=master)](https://travis-ci.org/donotjs/donot-cache-memory)

Memory cache engine for [donot](https://github.com/donotjs/donot).

# How to Use

Usage: `memCache()`

## Example

	var http = require('http'),
	    donot = require('donot'),
	    memCache = require('donot-cache-memory');

	var server = http.createServer(donot({
		cache: memCache()
	}));

	server.listen(8000);

> Remark. It does not make sense to use caching without template engine plug-ins - as only template renderings are cached. See [donot](https://github.com/donotjs/donot) for available template plug-ins.

# Memory Usage

This plug-in keeps all cache in memory and it does not take memory usage into account.

If you need large amounts of caching - e.g. you have many templates - it is recommended to use the [donot-cache-memory](https://github.com/donotjs/donot-cache-filesystem) file system cache plug-in.

# License

MIT
