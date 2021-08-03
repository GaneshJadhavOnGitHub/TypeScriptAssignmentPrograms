/*
Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10
*/
DisplayFactors(20);
function DisplayFactors (no:number):void
{
	//var factor : number = 1;
	var i: number =1;
	for(i=1;i<=no/2;i++)
	{
		if((no%i)==0)
		{
			console.log(i);
		}	
	}	
}