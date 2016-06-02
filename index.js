'use strict';

const Cache = require('@donotjs/donot-cache');

class MemoryCache extends Cache {

	constructor() {
		super();
		this.cache = {};
	}

	get(filename) {
		return Promise.resolve(this.cache[filename]);
	}

	set(filename, data) {
		return new Promise((resolved) => {
			this.cache[filename] = data;
			resolved();
		});
	}

}

module.exports = exports = MemoryCache;
