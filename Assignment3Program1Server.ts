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
//Below is code for Server
export class Arithmetic
{
  //Characteristics
   Number1 : number;
   Number2 : number;
   //Parametrised Constructor
   constructor(No1:number,No2:number)
   {
      this.Number1=No1;
      this.Number2=No2;
   }
   //Behaviour
   Addition():number
   {
     return this.Number1+this.Number2;
   }
   
   Subtraction():number
   {
    return this.Number1-this.Number2;
   }
   Multiplication():number
   {
    return this.Number1*this.Number2;
   }
   Division():number
   {
    return this.Number1/this.Number2;
   }
} //End of class Arithmetic
