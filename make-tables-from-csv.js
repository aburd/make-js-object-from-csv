function makeObj( csvData ){
  var a = csvData.split(',')
  var e = csvData.split(/,|\n/)
  
  function determineColumns( table ){
    var totalColumn = 1;
    for(var i = 0; i < table.length; i++){
      var curCell = table[i];
      if(curCell.search('\n') < 0)
        totalColumn++
      else
        totalColumn++
        break;
    }
    return totalColumn;
  }

  function makeTable (columns, data) {
    var table = {}
    for(var i = 0; i<columns; i++){
     columnName = data[i]
     table[columnName] = [];
     for(var o = 2; o<data.length; o+=2){
       table[columnName].push(data[o+i])
     }
    }
    return table;
  }  

  return makeTable( determineColumns( a ), e );
}


