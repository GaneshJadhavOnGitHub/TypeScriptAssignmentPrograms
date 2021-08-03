/*
Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/
var no:number = 21;
function Fibonacci (inputNo:number):void
{
	var i:number = 1;
	var j:number = 1;
	var numberInSeries : number =0;
	
	//console.log(i);
	//console.log(j);
	process.stdout.write(i.toString()+" ");
	process.stdout.write(j.toString()+" ");
	while(numberInSeries<inputNo)
	{
		numberInSeries=i+j;
		//console.log(numberInSeries);
		process.stdout.write(numberInSeries.toString()+" ");

		i=j;
		j=numberInSeries;
	}
}
Fibonacci(no);
//Run following command before running this program 
//It will install a package locally which will support process.stdout.write.
//npm i --save-dev @types/node
//Above package is local to directory(project) where we run our current typescript file.
//process.stdout.write is used to display on console without new line.
