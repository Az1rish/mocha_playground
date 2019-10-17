const divide = require('../index');
const expect = require('chai').expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        // define inputs
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;

        // invoke the function
        const actualAnswer = divide(a, b);

        //assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
    });

    it('should throw an error when divide by zero', () => {
        // define inputs
        const a = 8, b = 0;

        // set up the function call, wrapped in another function so Node handling mechanism doesn't kick in
        const fn = () => {
            divide(a, b)
        };

        // assert that exception is thrown, do not invoke fn(), let chai handle that and the exception
        expect(fn).to.throw();
    });

    // it('should try out these assertions', () => {
      // expect(2).to.equal(2, '2 === 2'); // pass
      // expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
      // expect(2).to.equal(3, '2 === 3'); // fail, wrong values
      // expect('hen').to.equal('Hen', "'hen' == 'Hen'"); // fail, string comparison is case sensitive
    // });
});

// below tests written in a more condensed manner, the above was to make easily understandable

/* const expect = require('chai').expect;
const divide = require('../index');

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    expect(() => { divide(8, 0) }).to.throw();
  });
}); */

