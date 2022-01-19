const age = parseInt (prompt("How old are you?")); 

if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18) {
    console.log("you are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("you can drink");
} else{
    console.log("you can't drink")
}
