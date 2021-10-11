function reverseString(str) {
  if (str === "")
    return "";
else
  return reverseString(str.substr(1)) + str.charAt(0);

}
reverseString("hello")

//Using the substr() and charAt()methods
// Specified Location v. Specified Character
//the substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
//e.g. "hello".substr(1); // "ello" 

//charAT method returns the specified character from a string.
//e.g. "hello".charAt(0)
//returns // "h"

//The depth of the recursion is equal to the length of the String. 

 // Base or terminal case that ends recursive loop.
 //Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
//1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
//2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
//3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
//4th call – reverseString("lo")      will return   reverseString("o")              + "l"
//5th call – reverseString("o")       will return   reverseString("")               + "o"

//Second part of the recursion method
//The method hits the if condition and the most highly nested call returns immediately

//5th call will return reverseString("") + "o" = "o"
//4th call will return reverseString("o") + "l" = "o" + "l"
//3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
//2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
//1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 



 









