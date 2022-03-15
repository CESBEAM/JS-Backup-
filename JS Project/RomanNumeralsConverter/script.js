   //the goal here:
   //convert number into Roman numeral
   // 1 - I
   // 5 - V
   // 10 - X
   // 50 - L
   // 100 - C
   // 500 - D


//1. find the larget decimal number 'r' in the Table above which <= num

//2. Write the roman numeral corresponding to the decimal number 'r'

//3. Subtract the 'r' from 'num' i.e num = num - r.

//4 Repeat steps 1,2 and 3 until the num is reduce to 0.


// function convertToRoman(num) {
//     while (num){
//         if( num >= 1000){
//            const str = 'M';
//            num = num - 1000;
//            result = str;
//            console.log(str)

//         }else if(num >= 900){
//             const str = 'CM';
//             num = num - 900
//             result = str;
//             console.log(str)

//         }else if(num >= 500){
//             const str = 'D';
//             num = num - 500
//             result = str;
//             console.log(str)

//         }else if(num >= 400){
//             const str = 'CD';
//             num = num - 400 
//             result = str;
//             console.log(str)

//         }else if(num >= 100){
//             const str = 'C';
//             num = num - 100
//             result = str;
//             console.log(str)
          
//         }else if(num >= 90){
//             const str = 'XC';
//             num = num - 90
//             result = str;
//             console.log(str)
         
//         }else if(num >= 50){
//             const str = 'L';
//             num = num - 50
//             result = str;
//             console.log(str)
      
//         }else if(num >= 40){
//             const str = 'X';
//             num = num - 40
//             result = str;
//             console.log(str)

//         }else if(num >= 10){  
//             const str = 'X';
//             num = num - 10
//             result = str;
//             console.log(str)

//         }else if(num >= 9){
//             num = num - 9
          
//         }else if(num >= 5){
//             const str = 'V';
//             num = num - 5;
//             result = str;
//             console.log(str)
         
//         }else if(num >= 4){
//             num = num - 4
//             const str = 'IV';
//             result = str;
//             console.log(str)
         
//         }else if(num >= 1){
//             const  str = 'I';
//             num = num - 1
//             result = str;
//             console.log(str)

           
//         }
//    }
//    return num;

// }
   
//    console.log(convertToRoman(48));
   





// let romanNumerals ={
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
// }



// function convertToRoman(num) {

//     for(let i = 13; i>romanNumerals.length; i++)
//     {

    
//         while(num >= romanNumerals[i]){
//             num += 1;
            
//             console.log(num)
//             }
//         }
//     // while(num){
//     //     if(num >= romanNumerals)

//     //     return num;
//     // }



//     // return num;
//    }
   
//    console.log(convertToRoman(36));




// function convertToRoman(num) {
//     let romanNumerals;
    
    
//       while (num > 0){
//           if( num >= 1000){
//             romanNumerals += 'M';
//              num -= 1000;
  
//           }else if(num >= 900){
//             romanNumerals += 'CM';
//               num-= num - 900
      
//           }else if(num >= 500){
//             romanNumerals += 'D';
//               num -= 500
  
//           }else if(num >= 400){
//             romanNumerals += 'CD';
//               num -=  400 
  
//           }else if(num >= 100){
//             romanNumerals += 'C';
//               num -= 100
            
//           }else if(num >= 90){
//             romanNumerals += 'XC';
//               num -= 90
             
//           }else if(num >= 50){
//             romanNumerals += 'L';
//               num -= 50
        
//           }else if(num >= 40){
//             romanNumerals += 'X';
//               num -= 40

  
//           }else if(num >= 10){  
//             romanNumerals += 'X';
//               num -= 10
      
//           }else if(num > 9){
//             romanNumerals += 'IX'
//               num -= 9
            
//           }else if(num > 5){
//             romanNumerals += 'V';
//              num -= 5;
            
           
//           }else if(num >= 4){
//             romanNumerals += 'IV';
//               num -= 4
              
           
//           }else if(num >= 1){
//             romanNumerals += 'I';
//               num -= 1
             
//           }
          
//      }

//      return romanNumerals;
//   }
  
     
//      console.log(convertToRoman(4));
     
  
  
  //new

  // let romanNumerals ={
//     "M": 1000,
//     "CM": 900,
//     "D": 500,
//     "CD": 400,
//     "C": 100,
//     "XC": 90,
//     "L": 50,
//     "XL": 40,
//     "X": 10,
//     "IX": 9,
//     "V": 5,
//     "IV": 4,
//     "I": 1
// }



// function convertToRoman(num) {
// var romanNumerals =''
// var number =0;
// while(num>0){
//     if(1000<num){
//         romanNumerals +='M';
//         number -= 900;
//     }
// }


//    }
   
//    console.log(convertToRoman(1000));



function convertToRoman(num) {
    let romanStr = '';
    
        while(num > 0){
           if(num < 4){
                romanStr += 'I';
                num -= 1;
           }else if(num<5){
                 romanStr += 'IV';
                num -= 4;
           }else if (num < 6){
               romanStr += 'V';
                num -= 5;
           }else if (num<10){
                romanStr += 'IX';
                num -= 9;
           }
        }
        return romanStr;
       }
       
       console.log(convertToRoman(6));
    
    
    