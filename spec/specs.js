describe('factorialize', function() {
  it('it returns the factorial for the number zero', function() {
    factorialize(0).should.equal(1);
  });

  it('it returns the factorial for the number one', function() {
    factorialize(1).should.equal(1);
  });
  
  it('it returns the factorial for any number', function() {
    factorialize(2).should.equal(2);
  });
  
  it('it returns the factorial for any number', function() {
    factorialize(3).should.equal(6);
  });
  
  it('it returns the factorial for any number', function() {
    factorialize(5).should.equal(120);
  });
  
  it('still works with big numbers(up to 9)', function() {
    factorialize(9).should.equal(362880);
  });
});
