'use strict';
var multiplicativePersistence = require('../modules/multiplicativePersistence');
var assert = require('assert');

describe('#getFirstNumberWith()', function(){

    it('should return 0 when passed value "0"', function(){
        assert.equal(0, multiplicativePersistence.getFirstNumberWith(0));
    });

    it('should return 10 when passed value "1"', function(){
        assert.equal(10, multiplicativePersistence.getFirstNumberWith(1));
    });

    it('should return 25 when passed value "2"', function(){
        assert.equal(25, multiplicativePersistence.getFirstNumberWith(2));
    });

    it('should return 39 when passed value "3"', function(){
        assert.equal(39, multiplicativePersistence.getFirstNumberWith(3));
    });


    it('should return 77 when passed value "4"', function(){
        assert.equal(77, multiplicativePersistence.getFirstNumberWith(4));
    });

    it('should return 679 when passed value "5"', function(){
        assert.equal(679, multiplicativePersistence.getFirstNumberWith(5));
    });

    it('should return 6788 when passed value "6"', function(){
        assert.equal(6788, multiplicativePersistence.getFirstNumberWith(6));
    });

    it('should return 68889 when passed value "7"', function(){
        assert.equal(68889, multiplicativePersistence.getFirstNumberWith(7));
    });

    it('should return 2677889 when passed value "8"', function(){
        assert.equal(2677889, multiplicativePersistence.getFirstNumberWith(8));
    });

});

xdescribe('#getSteps()', function(){

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

    it('should return 1 when passed 10', function(){
        assert.equal(1, multiplicativePersistence.getSteps(10));
    });

    it('should return 1 when passed 11', function(){
        assert.equal(1, multiplicativePersistence.getSteps(11));
    });
    it('should return 2 when passed 34', function(){
        assert.equal(2, multiplicativePersistence.getSteps(34));
    });

    it('should return 3 when passed 39', function(){
        assert.equal(3, multiplicativePersistence.getSteps(39));
    });

});