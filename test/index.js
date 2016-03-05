var common = require('../index.js');
var assert = require('assert');


describe('crypto: uuid', function () {
  it(
    'should produce uuids',
    function () {
      assert.equal(common.crypto.uuid.v4().length, 36);
    }
  );
});
