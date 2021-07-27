//console.log(greet("Kgope"))
describe('The greet function' , function(){
    it('should return "Hello, Kgope" when I greet Kgope' , function(){
        assert.equal('Hello, Kgope',greet('Kgope'));
    });
    it('should return "Hello, Jaden" when I greet Jaden' , function(){
        assert.equal('Hello, Jaden',greet('Jaden'));  
    })
    it('should return "Hello" when no name is entered' , function(){
        assert.equal('Hello',greet());  
    })
    });