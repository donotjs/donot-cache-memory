'use strict';

var cache = {};

exports = module.exports = function() {
  return {
    get: function(file, cb) {
      cb(null, cache[file]);
    },
    set: function(file, data, cb) {
      cache[file] = data;
      cb(null);
    }
  };
};
