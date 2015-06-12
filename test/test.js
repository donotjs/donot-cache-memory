var expect = require('chai').expect;
var cache = require('../')();

describe('cache', function() {

  it ('should set data without error', function(done) {
    cache.set('test', { created: new Date() }, function(err) {
      expect(err).to.be.null;
      done();
    })
  });

  it ('get data without error and correct format', function(done) {
    cache.get('test', function(err, data) {
      expect(err).to.be.null;
      expect(data).to.be.an('object')
      expect(data.created).to.be.instanceof(Date);
      done();
    });
  });

});
