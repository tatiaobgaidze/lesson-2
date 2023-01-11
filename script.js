// შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
// ფუნქციას გადაეცით ობიექტი არგუმეტნად 

// let sampleObject = {
//     isItarable : false,
//     sampleArray : [12,63,21,34,98,57]
// }
// თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
// თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

let sampleObject = {
    isItarable : false,
     sampleArray : [12,63,21,34,98,57]
 } 


function itera(sampleObject){
  if(sampleObject.isItarable == true){
    console.log(sampleObject);
  }else{
    console.log("provided array isn't itarable");
  }
}

itera(sampleObject)


//Task 2
/*
შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
წინააღმდეგ შემთხვევაში false

*/

function checkPythagoras(x,y,z){
    if(x*2 + y*2 == z*2){
       console.log(true);
    }else{
        console.log(false);
    }
}

checkPythagoras(2,3,5)


//Task 3
/*
დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
დააბრუნოს "Min value is 2 and Max value is 75"
*/

let min = (array, min=array[0])=>{
    for(let i=0; i<array.length; i++){
        if(min > array[i])min = array[i]
    }
    return min
}

let max = (array, max=array[0])=>{
    for(let i=0; i<array.length; i++){
        if(max < array[i])max = array[i]
    }
    return max
}

const minMax = [2,14,25,75,11,6]

console.log(`Min value is ${min(minMax)} and Max value is ${max(minMax)}`);





//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

function checkDeg (deg) {
if(deg < 90 & deg >= 0){
    console.log('Acute angle'); 
}else if(deg == 90){
    console.log('Right angle'); 
}else if(deg > 90 & deg < 180){
    console.log('Obtuse angle'); 
}else if(deg == 180){
    console.log('Straight angle'); 
}
}

checkDeg(66)

// Task 5
/*
დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
მიღებული მასივი დააბრუნებინეთ ფუნქციას .

0-50 = F
51-60 = E
61-70 = D
71-80 = C
81-100 = A

საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
[{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/

const studentsList = [ {name: "student1", grade : 91}, {name: "student2", grade : 71}, {name: "student3", grade : 45} ]


console.log(studentsList.finalResult);

function checkStudentGrade() {
    for (i=0; i<studentsList.length; i++){
        console.log(studentsList[i]);
       
        if(studentsList[i].grade >= 0 && studentsList[i].grade < 50){
studentsList[i].finalResult = 'F'
        }else if(studentsList[i].grade >= 51 && studentsList[i].grade < 60) {
           studentsList[i].finalResult = 'E' 
        }else if(studentsList[i].grade >= 61 && studentsList[i].grade < 70) {
           studentsList[i].finalResult = 'D' 
        }else if(studentsList[i].grade >= 71 && studentsList[i].grade < 80) {
           studentsList[i].finalResult = 'C' 
        }else if(studentsList[i].grade >= 81 && studentsList[i].grade < 100) {
           studentsList[i].finalResult = 'A' 
        }
    }
}

checkStudentGrade()

console.log(studentsList);