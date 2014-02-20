var factorialize = function(integer) {
var storageArray = [];
  if (integer === 0 || integer === 1) {
    return 1;
  } 
  if (integer > 1) {
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
