/*
Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
Input : “Pune Kothrud Marvellous Infosystems”
Output : String contains Marvellous in it.
*/
var inputString:string="Pune Kothrud Marvellous Infosystems";
var contains:boolean=false;
contains = CheckString(inputString);
function CheckString(sourceString:string):boolean
{
 var present : boolean = false;
 var splits : string[];
 splits = sourceString.split(" ");
 //console.log(splits);
for(var i:number=0;i<splits.length;i++)
{
    if(splits[i]==="Marvellous")
    {
      present=true;
      break;
    }
}
 return present;
}
if(contains)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contain Marvellous in it");
}