var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Dishes = require('../dishes');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('sinon-mongoose');
describe("Get all Dishes", function () {
    // Test will pass if we get all dishes
    it("should return all dishes", function (done) {
        var DishesMock = sinon.mock(Dishes);
        var expectedResult = { name: "Test", image: "fff" };
        DishesMock.expects('find').yields(null, expectedResult);
        Dishes.find(function (err, result) {
            DishesMock.verify();
            DishesMock.restore();

            expect(result.name).to.be.a('string');
            done();
        });
    });
});