/*
Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89
*/
var inputArray:number[]=[23,89,6,29,56,45,77,32];
var maximumnumber : number =0;
maximumnumber = Maximum(inputArray);
//console.log("Maximum nunber is : ",maximumnumber);
process.stdout.write("Maximum nunber is : "+maximumnumber.toString());
function Maximum(arr:number[]):number
{
    var max:number=0;
    for(var i:number=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}

