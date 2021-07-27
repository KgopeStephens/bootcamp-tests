describe('The findItemsOver function', function(){
    it('should return items over specified quantity for each itemList', function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    }) 
})
