/*
Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77
 */

var inputArray : number[]=[23,89,6,29,56,45,77,32];
var secondLargest : number =0;
secondLargest = SecondMaximum(inputArray);
process.stdout.write("Second Maximum number is "+secondLargest.toString());
function SecondMaximum (arr:number[]):number
{
    var secondmax : number = 0;
    var max : number = 0;
    //var temp: number = 0;
    for(var i:number=0;i<arr.length;i++) //Loop to find MAX
    {
      if(arr[i]>max)
      {
          max = arr[i];
      }
    }
    for(var i:number=0;i<arr.length;i++) //Loop to find Second MAX
    {
        if((arr[i]>secondmax)&&(arr[i]!=max)) // omit max , so we can get second Max. 
        {
            secondmax = arr[i];
        }
    }
    return secondmax;
}