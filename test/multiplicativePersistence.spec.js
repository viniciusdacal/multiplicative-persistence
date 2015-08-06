'use strict';
var multiplicativePersistence = require('../modules/multiplicativePersistence');
var assert = require('assert');

describe('#getFirstNumberWith()', function(){

    it('should return 0 when passed value "0"', function(){
        assert.equal(0, multiplicativePersistence.getFirstNumberWith(0));
    });

    it('should return 10 when passed value "0"', function(){
        assert.equal(10, multiplicativePersistence.getFirstNumberWith(1));
    });

    it('should return 10 when passed value "0"', function(){
        assert.equal(10, multiplicativePersistence.getFirstNumberWith(3));
    });
});

describe('#getSteps()', function(){

    it('should return 0 when passed values with one digit', function(){
        assert.equal(0, multiplicativePersistence.getSteps(0));
        assert.equal(0, multiplicativePersistence.getSteps(1));
        assert.equal(0, multiplicativePersistence.getSteps(2));
        assert.equal(0, multiplicativePersistence.getSteps(3));
        assert.equal(0, multiplicativePersistence.getSteps(4));
        assert.equal(0, multiplicativePersistence.getSteps(5));
        assert.equal(0, multiplicativePersistence.getSteps(6));
        assert.equal(0, multiplicativePersistence.getSteps(7));
        assert.equal(0, multiplicativePersistence.getSteps(8));
        assert.equal(0, multiplicativePersistence.getSteps(9));
    });

    it('should return 1 when passed values that contains the digit 0', function(){
        assert.equal(1, multiplicativePersistence.getSteps(10));
        assert.equal(1, multiplicativePersistence.getSteps(20));
        assert.equal(1, multiplicativePersistence.getSteps(100));
    });

     it('should return 2 when passed 125', function(){
        assert.equal(2, multiplicativePersistence.getSteps(125));
    });

});