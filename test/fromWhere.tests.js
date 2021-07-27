describe('The fromWhere function' , function(){
    it('should return from Belville for this string "CY"', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    }) 
    it('should return from Paarl for this string "CJ"', function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
})
it('should return from Cape Town for this string "CA"', function(){
    assert.equal(fromWhere('CA'), 'Cape Town');
})
it('should return Some other place for this string "CC"', function(){
    assert.equal(fromWhere('CC'), 'Some other place!');
})
})




