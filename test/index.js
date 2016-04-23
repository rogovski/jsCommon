var common = require('../index.js');
var assert = require('assert');


describe('crypto: uuid', function () {
  it(
    'should produce uuids',
    function () {
      // console.log(common.util.moment());
      assert.equal(common.crypto.uuid.v4().length, 36);
    }
  );
});

describe('data: exception', function () {
  it(
    'have errors field',
    function () {

      assert.throws(function () {
        throw new common.data.exception.InvalidConstructorArgsError('yoyo');
      }, Error);

      assert.equal(common.crypto.uuid.v4().length, 36);
    }
  );
});