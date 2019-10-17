const expect = require('chai').expect;
const sort = require('../Drill/Drill.js');

describe('Sort function', () => {
    it('should sort array in ascending order', () => {
        expect(sort([9,7,3,5,1])).to.deep.equal([1,3,5,7,9]);
    });
})