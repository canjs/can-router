var QUnit = require('steal-qunit');
var router = require('./can-router');

QUnit.module('can-router');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof router, 'function');
});
