// Your code here
 class Polygon {
   constructor(sides){
     this.sides=sides;
   }
   
   get countSides(){
     return this.sides.length;
   }
   
   get perimeter() {
     let sum=0;
     for(let i=0;i<sides.length;i++){
       sum+=sides[i];
     }
     return sum;
   }
 }
   class Triangle extends Polygon{
    get isValid(){
      if(this.sides[0]+this.sides[1]>this.sides[2] && this.sides[0]+this.sides[2]>this.sides[1] && this.sides[2]+this.sides[1]>this.sides[0] ) return true;
      else return false;
      
    }
   }
   
   class Square extends Polygon {
     get isValid(){
     if(this.sides[0]==this.sides[1] && this.sides[2]==this.sides[3] && this.sides[0]==this.sides[2]) return true;
     else return false;
     }
     
     get area() {
       return this.sides[0]*this.sides[1];
     }
   }
 