function allFromTown(regNumString, regIdentifier) {
    const list = regNumString.split(',');
   //console.log(list)
    var fromStellies = [];
   for (var i=0;i<list.length;i++) {
      const product = list[i].trim();
      if (product.startsWith(regIdentifier)) {
      fromStellies.push(list[i].trim()); 
        //console.log(product)
     }
    }
   return fromStellies;
  }
  