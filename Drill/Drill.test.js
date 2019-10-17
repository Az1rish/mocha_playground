const expect = require('chai').expect;
const drill = require('../Drill/Drill');

describe('Array function', () => {
    it('should list array in ascending order', () => {
        expect(drill([9,7,3,5,1]).to.deep.equal([1,3,5,7,9]))
    });
})