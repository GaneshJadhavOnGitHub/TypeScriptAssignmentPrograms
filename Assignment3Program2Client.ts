/*
Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
//Below is the code for Client
import {Circle} from "./Assignment3Program2Server";
client();
function client():void
{
    var obj1=new Circle(10);
    var obj2=new Circle(100);
    var areaOfCircle : number =0;
    areaOfCircle = obj1.Area();
    console.log("Area of Circle with radius "+obj1.Radius+ " is "+areaOfCircle);
    console.log();
    areaOfCircle = obj2.Area();
    console.log("Area of Circle with radius "+obj2.Radius+ " is "+areaOfCircle);
}