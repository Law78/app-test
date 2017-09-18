let somma = require('../index');
let expect = require('chai').expect;

describe('La somma di due numeri', () =>{
  it('should be fine.', () => {
    expect(somma(2,4)).to.equal(6);
  })
})