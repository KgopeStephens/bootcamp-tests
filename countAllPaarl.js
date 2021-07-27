function allPaarl(paarlString) {
    const product = paarlString.split(',');
    var regNumbersForPaarl = [];
    for (var i=0;i<product.length;i++) {
     var product2 = product[i].includes('CJ');
      if (product2 == true) {
       regNumbersForPaarl.push(product[i].trim());
    }
   }
    //console.log('There are ' + regNumbersForPaarl.length + ' Paarl reg numbers.')
    return regNumbersForPaarl;
  }