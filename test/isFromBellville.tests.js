
describe('The isFromBellville function' , function(){
    it('should return true if registration is from Bellville' , function(){
       assert.equal(isFromBellville('CY 123'), true);
    });
     it('should return false if registration is not from Bellville' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
     });    
    });  
   