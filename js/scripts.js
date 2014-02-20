var factorialize = function(integer) {
  if (integer < 0){
    return "Not a positive whole number"
  }
  if (integer.toString().indexOf(".") > -1) {
    return "Not a positive whole number"
  }
  if (integer === 0) {
    return 1;
  }
  return (integer * factorialize(integer - 1));
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
