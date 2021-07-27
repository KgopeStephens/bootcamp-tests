describe('The totalPhoneBill function' , function(){
    it('should return R7.45 for this string "call, sms, call, sms, sms"' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    }) 
    it('should return R3.40 for this string "call, sms"' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })
    it('should return R1.30 for this string "sms, sms"' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})



