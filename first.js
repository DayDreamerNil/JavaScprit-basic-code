var names="nildolon";
console.log(names);
var isHot="true"
console.log(isHot);

var price1 =25;
var price2=35;
var total=price1+price2;
console.log(total);

//math
var price3=5;
price3++;
console.log(price3);

//conditional case
var price4=90;
if(price4>100){
    console.log(" ywes its minw");
}
else{
    console.log("nifffnbh")
     
}
var num="3";
num=+num;
console.log(num);
var num=3;
num=''+num;
num1=5;
console.log(num+num1);

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
//array
var friendage=['34','37'];
var sonali=friendage[1];
console.log(sonali);
//loop
var nums=['33','44','36','38','30'];
var i=0;
for(i=0;i<nums.length;i++){
        var element=nums[i];
        console.log(element);
}

//double
function doubleIt(num){
        var result=num*3;
        console.log(result);

}
doubleIt(5);
//object creation
var student={id:33,nam:"sadi"};
var student2={id:332,nam:"sadia"};
var ids=student.id;
console.log (ids);
console.log(student);

//update id
student.id=79;
console.log(student.id);
