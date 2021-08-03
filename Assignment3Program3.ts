/*
Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/
import {Circle} from "./Assignment3Program2ClientServerApproach/Assignment3Program2Server";

class CircleX extends Circle
{
  constructor(rad:number)
   {
    super(rad);
   }
    //Behaviour
  Circumference():number
  {
      return 2*this.PI*this.Radius;
  }
} //End of class CircleX

var obj1 = new CircleX(10);
var obj2 = new CircleX(20);
var result : number =0;

result = obj1.Area();
console.log("Area of Circle With Radius "+obj1.Radius+" is "+result);
result = obj1.Circumference();
console.log("Circumference of Circle with Radius "+obj1.Radius+" is "+result);
console.log();

result = obj2.Area();
console.log("Area of Circle with Raduis "+obj2.Radius+" is "+result);
result = obj2.Circumference();
console.log("Circumference of Circle with Radius "+obj2.Radius+" is "+result);