describe('The findItemsOver20 function' , function(){
    it('should return all items with quantity over 20 from itemList', function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual(results, findItemsOver20(itemList));
        
    }) 
    it('should return all items with quantity over 20 from itemList2', function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual(results2, findItemsOver20(itemList2));
    })
        
it('should return all items with quantity over 20 from itemList3', function(){
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    assert.deepEqual(results3, findItemsOver20(itemList3));
   
})   
})











