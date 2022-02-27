function palindrome(str) {
    var regEx = /[\W_]/g;
    
    var sampleString = str.toLowerCase().replace(regEx,"");
    
    
     var toCheck = sampleString.split("").reverse().join("");
     if(toCheck === sampleString) 
     
     return true;
     return false; 
    }
    
    // palindrome("eye");
    
     console.log(palindrome("eye"));
