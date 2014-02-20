var factorialize = function(integer) {
var storageArray = [];
  if (integer < 0){
    return "Not a positive whole number"
  }
  
  if (integer.toString().indexOf(".") > -1) {
    return "Not a positive whole number"
  } 

    if (integer === 0) {
    return 1;
  } 
  
  if (integer > 0) {
    for (var i = 0; i < integer; i++) {
      storageArray += (integer-i)
    }
  storageArray = storageArray.split('').map(Number)
  storageArray = storageArray.reduce(function(x, y) {return x*y } );
  };  
  
  return storageArray
};

$(document).ready(function() {
  $("form#factorial-number").submit(function(event) {
    var factNumber = $("input#factNumber").val();
    var result = factorialize(factNumber);

    $(".result").text(result);
    
    $("#result").show();
    event.preventDefault();
  });
});
