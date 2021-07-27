describe('The countAllPaarl function' ,function(){
    it('should return number of registrations from Paarl in the string, i.e 2' ,function(){
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
    }) ;
    it('should return number of registrations from Paarl in the string, i.e 0' ,function(){
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
    });
    it('should return number of registrations from Paarl in the string, i.e 1' ,function(){
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });
})