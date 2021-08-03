/*
Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
//Below is the code for Server
export class Circle
{
 //Characteristics
  Radius:number;
  PI:number;
  //Parametrised Constructor
  constructor(rad:number)
  {
    this.Radius=rad;
    this.PI = 3.14;
  }
  //Behaviour
  Area():number
  {
    return this.PI*this.Radius*this.Radius;
  }

}//End of class Circle