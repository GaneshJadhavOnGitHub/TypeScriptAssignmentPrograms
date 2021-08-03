/*
Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.
Addition method will add Number1 , Number2 & return result.
Subtraction method will subtract Number1 , Number2 & return result.
Multiplication method will multiply Number1 , Number2 & return result.
Division method will divide Number1 , Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects.
*/
//Below is code for Client

import{Arithmetic} from "./Assignment3Program1Server";
client();
function client():void
{
    var Answer : number =0;
    var obj1= new Arithmetic(20,10);
    var obj2= new Arithmetic(40,10);
    Answer = obj1.Addition();
    console.log(obj1.Number1+" + "+obj1.Number2+" = "+Answer);
    Answer = obj1.Subtraction();
    console.log(obj1.Number1+" - "+obj1.Number2+" = "+Answer);
    Answer = obj1.Multiplication();
    console.log(obj1.Number1+" Multiplied By "+obj1.Number2+" is equal to "+Answer);
    Answer = obj1.Division();
    console.log(obj1.Number1+" Divided By "+obj1.Number2+"  is equal to  "+Answer);
    console.log();
    Answer = obj2.Addition();
    console.log("Addition of "+obj2.Number1+" And "+obj2.Number2+" is : "+Answer);
    Answer = obj2.Subtraction();
    console.log("Subtraction of "+obj2.Number1+" And "+obj2.Number2+" is : "+Answer);
    Answer = obj2.Multiplication();
    console.log("Multiplication of "+obj2.Number1+" And "+obj2.Number2+" is : "+Answer);
    Answer = obj2.Division();
    console.log("Division of "+obj2.Number1+" And "+obj2.Number2+" is : "+Answer);
}
