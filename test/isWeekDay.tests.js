describe('The isWeekDay function' ,function(){
    it('should return false if day is saturday or sunday' , function(){
        assert.equal(isWeekday('Saturday'), false);
    })
    it('should return true if day is weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    })
})