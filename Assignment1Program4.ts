/*
Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 10
Output : It is prime number
*/
var result:boolean=false;
result = CheckPrime(10);
if(result)
{
	console.log("It is Prime number");
}
else
{
	console.log("It is not prime number");
}
function CheckPrime(no:number):boolean
{
	var i:number = 2;
	var count:number=0;
	var prime:boolean=false;
	for(i=2;i<no;i++)
	{
		if((no%i)==0)
		{
			count++;
		}
	}
	if(count==0)
	{
		prime=true;
	}
	return prime;
}