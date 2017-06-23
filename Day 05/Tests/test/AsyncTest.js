

var sinon = require('sinon');
var rewire = require('rewire');
var expect = require("chai").expect;

var rectangle = rewire('../rectangle');


describe('our test suite', function () {
    beforeEach(function () {
        this.console = {
            log: sinon.spy(),
            time: sinon.spy()
        }
        rectangle.__set__("console", this.console);
    });
    it('My async function should pass', function (done) {
        var _this = this;
        rectangle(2, 3, function () {
            expect(_this.console.log.callCount).to.equal(1);
            expect(_this.console.time.callCount).to.equal(4);
            done();
        });
    });
    it('My async function should fail', function (done) {
        rectangle(-2, 3, function (err) {
            done(err);
        });
    });
});