/*
Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52
*/

var inputArray:number[]=[23,6,7,4,5,7];
var summationOfAll:number=0;
summationOfAll = Summation(inputArray);
process.stdout.write("Addition is : "+summationOfAll.toString());
function Summation(arr:number[]):number
{
    var sum : number = 0;
    for(var i:number=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}