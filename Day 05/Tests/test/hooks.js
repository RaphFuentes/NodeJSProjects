var assert = require('assert');
describe("hooks", function () {
    var count = 0;
    beforeEach(function () {
        count++;
    });
    it("This should pass also", function () {
        assert.equal(count, 1, "value of count is 1");
    });
    it("This should pass", function () {
        assert.equal(count, 2, "value of count is 2");
    });
});