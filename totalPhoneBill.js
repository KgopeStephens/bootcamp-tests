function totalPhoneBill(itemStrng) {
    //let counter = 0;
    const product = itemStrng.split(',');
    let total = 0;
    for (var i=0;i<product.length;i++) {
    //console.log(product)
      const product2 = product[i].trim();
      if (product2 === 'call') {
          total += 2.75;
    } else if (product2 === 'sms') {
         total += 0.65;    
    }
    }
    return 'R' + total.toFixed(2);
   }