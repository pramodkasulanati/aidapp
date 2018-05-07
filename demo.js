

<script>
var myInput = document.getElementById("psw");


myInput.onkeyup = function() {

  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
  
  } else {
    
  }

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    
  } else {
    
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    
  } else {
  
  }

  if(myInput.value.length >= 8) {
  
  } else {
    
  }
}
</script>
