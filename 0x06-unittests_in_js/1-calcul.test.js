const assert = require('assert');
const calculate = require('./1-calcul');

describe('calculate', () => {
    describe('SUM', () => {
        it('should return the sum of two rounded numbers', () => {
            assert.equal(calculate('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the difference of two rounded numbers', () => {
            assert.equal(calculate('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of two rounded numbers', () => {
            assert.equal(calculate('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by zero', () => {
            assert.equal(calculate('DIVIDE', 1.4, 0), 'Error');
        });
    });
});