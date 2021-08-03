/*
Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.
Input : 153
Output : It is Armstrong number
*/
var no : number = 153;
var result : boolean = false;
result = CheckArmstrong(no);
if(result)
{
    console.log("It is Armstrong number.");
}
else
{
    console.log("It is not Armstrong number.");
}
function CheckArmstrong(num:number):boolean
{
 var isArmstrong : boolean = false;
 var numberOfDigits : number = 0;
 numberOfDigits = CountDigits(num);
 //console.log("Number of Digits are ",numberOfDigits);
 var j:number =0;
 var sum:number =0;
 sum = GetTotalSum(num,numberOfDigits)
 //console.log(sum);
 if(sum==num)
 {
    isArmstrong =true;  
 }
 return isArmstrong;
}
function GetTotalSum(num:number,numberOfDigits:number):number 
{
    var digit : number =0;
    var power : number = 0;
    var TotalSum :number=0;
    while(num!=0)
    {
      digit = num % 10;
      power = GetPower(digit,numberOfDigits);
      //console.log(digit+" raised to "+numberOfDigits+" is "+power);
      TotalSum = TotalSum + power;
      num = num /10;
      num = parseInt(num.toString());
    }
    return TotalSum;
}
function GetPower(digit:number,numberOfDigits:number):number
{
    var power : number = 0;
    var multiplication : number = 1;
    for(var i:number=0;i<numberOfDigits;i++)
    {
      multiplication  = multiplication*digit;
    }
    power=multiplication;
    return power;
}
function CountDigits(num:number):number
{
    var Digits : number = 0;
    while(num!=0)
    {
        num = num /10;
        num = parseInt(num.toString());
        Digits++;
    }
    return Digits;
}