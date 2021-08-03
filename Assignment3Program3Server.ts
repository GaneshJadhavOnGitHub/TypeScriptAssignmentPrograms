/*
Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/

//Below is the code for Server

import {Circle} from "./Assignment3Program2ClientServerApproach/Assignment3Program2Server";

export class CircleX extends Circle
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