/*jshint expr: true*/

'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const MemoryCache = require('../');

const cache = new MemoryCache();

describe('cache', () => {

  it ('should set data without error', () => {
  	return cache.set('test', { created: new Date() }).should.eventually.be.fulfilled;
  });

  it ('get data without error and correct format', () => {
    return cache.get('test').then((data) => {
      expect(data).to.be.an('object');
      expect(data.created).to.be.instanceof(Date);
    }).should.eventually.be.fulfilled;
  });

});
