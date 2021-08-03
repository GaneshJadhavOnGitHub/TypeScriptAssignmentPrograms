/*
Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input : 23 89 6
Output : Maximum number is 89
*/
var no1:number = 23;
var no2:number = 89;
var no3:number = 6;
var largest:number=0;

function Maximum(a:number,b:number,c:number):number
{
  var largest : number = 0;
  if((a>b)&&(a>c))	
  {
	  largest = a;
  }
  else if((b>a)&&(b>c))
  {
	 largest = b;   
  }
  else 
  {
	largest =c;
  }
  return largest;
}
largest = Maximum(no1,no2,no3);
console.log("Largest number is : ",largest);