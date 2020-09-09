let expect = require('chai').expect;
let CircleWords = require('../CircleWords.js');

describe('Test CircleWords', function() {

  context('without arguments', function() {
    it('should return false', function() {
      expect(CircleWords.validate()).to.equal(false);
    })
  })

  context('with a single string', function() {
    it('should return false', function() {
      expect(CircleWords.validate('house')).to.equal(false);
    })
  })

  context('with a single word', function() {
    it('should return false', function() {
      expect(CircleWords.validate(['house'])).to.equal(false);
    })
  })

  context("with a valid matching words (['chair', 'height', 'racket', 'touch', 'tunic'])", function() {
    it('should return: "chair racket touch height tunic"', function() {
      const inputTestCase = ['chair', 'height', 'racket', 'touch', 'tunic'];
      const outputTestCase = 'chair racket touch height tunic';
      expect(CircleWords.validate(inputTestCase)).to.equal(outputTestCase);
    })
  })

  context("with a non valid matching words (['chair', 'house', 'racket', 'clinic', 'tunic'])", function() {
    it('should return false', function() {
      const inputTestCase = ['chair', 'house', 'racket', 'clinic', 'tunic'];
      expect(CircleWords.validate(inputTestCase)).to.equal(false);
    })
  })
    
});