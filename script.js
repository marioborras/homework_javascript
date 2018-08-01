//1 
var numOne = 5,
    numTwo = 10;
var sum = numOne + numTwo;
console.log(sum);

var firstName = "Mark",
    secondName = "Vic";
console.log(firstName + secondName)
//2
var Marvel = ["Spider-Man", "Wolverine", "Hulk"],
    DC = ["Batman", "Superman", "Aquaman"],
    Heroes = [Marvel, DC];
console.log(Marvel[0])
console.log (DC[1])

//3&4 
var num = prompt("please enter a number")
    if(num <100){
        alert("that number is less than 100");
    }else{
         alert("that number is more than 100");
    }

//5 
var red = "red",
    blue = "blue";
if (red === blue){
    alert("red equals blue");
} else {
    alert("red does not equal blue");
}

//6
function greetUser(name) {
    alert("Hello you've written the name " + name + "!");
 }
 
  greetUser("Joe");


 //7
 function consoleHello(){
     console.log("Hi There I am the console");
 }

consoleHello()

 //8 this is the function prizes
 function prizes() {
        var door = prompt("Pick door number 1, 2 or 3!");
        if (door === "1") {
            alert("You picked door #1 You win $50");
        } else if (door === "2") {
            alert("You picked door #1 You win $500");
        } else if (door === "3") {
            alert("You picked door #3 You win $1");
        } else {
             alert("There are only 3 doors, try again");
      }  
    
}

prizes();