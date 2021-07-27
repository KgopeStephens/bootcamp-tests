describe('The regCheck function' ,function(){
    it('should return true for this regNUM DC 55 YU GP' ,function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    })
    it('should return false for this regNUM DC 55 YU GP' ,function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    })
    it('should return true for this regNUM 5566 L' ,function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    })
    it('should return false for this regNUM 5566 L' ,function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    })
    it('should return true for this regNUM ERT 123 EC' ,function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    })
    it('should return false for this regNUM ERT 123 EC' ,function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    })
    it('should return true for this regNUM FGT 123 MM' ,function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    })
    it('should return false for this regNUM FGT 123 MM' ,function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    })

})

