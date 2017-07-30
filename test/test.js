'use strict'

var expect = require('chai').expect;
var math = require('../index');

describe('#math', function () {
    it('add two numbers', function () {
       var result = math.add(5,4);
       expect(result).to.equal(9);
    });

    it('add two string numbers', function () {
        var result = math.add("5","4");
        expect(result).to.equal("54");
    });

});