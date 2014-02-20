describe('factorialize', function() {
  it('it returns the factorial for the number zero', function() {
    factorialize(0).should.equal(1);
  });
  
  it('it returns the factorial for any number', function() {
    factorialize(5).should.equal(120);
  });
  
  it('still works with big numbers(up to 9)', function() {
    factorialize(9).should.equal(362880);
  });

  it('it returns error message for negative numbes', function() {
    factorialize(-1).should.equal("Not a positive whole number")
  })
  
  it('it returns error message for non whole numbes', function() {
    factorialize(2.1).should.equal("Not a positive whole number")
  })

});
