// //Array of registered students
// const student = ["Moses", "King", "Godspower", "Bola", "Eli"];
// //prompt the user for their names
// const studentName = prompt("Enter your name"); 

// // if (student.includes(studentName)) {
// //     console.log(`${studentName} is present`)
// // } else {
// //     console.log('absent')
// // }

// // fruits = ['apple', 'banana', 'cherry']
// // berries = ['strawberry', 'blueberries', 'raspberries']

// // function studentDate (num1, num2, ...num3) {
// //     return num1 
// // }




// //Normalize the input to ensure consistency (e.g, case sensitivity)
// const userInput = studentName ? studentName.trim(): ""; //Handles null input

// //Flag to check if the student is found
// let isRegistered = false;

// //Loop through the students array to verify the name
// for(let i =0; i < student.length; i++) {
//     if(student[i]===userInput){
//         isRegistered = true; //set flag if match is found
//         break; // Exit loop early since we've found a match
//     }
// }
// // Use switch to check student name

//     switch (student) {
//     case "Moses":
//      console.log(`Welcome, ${studentName}! You are resgistered in the academy.`);
//     break;
//     case "Gospower":
//     console.log(`Welcome, ${studentName}! You are resgistered in the academy.`);
//      break;
//      case "Eli":
//      console.log(`Welcome, ${studentName}! You are resgistered in the academy.`);
//     break;

//     default:
//         console.log("You are not registered. Please register to join the academy.");
// }


function usernameValidate(username){
    let pattern = /^[a-z]{5}\W{1}\d{1}$/i
    if(pattern.test(username)){
        return true
    }
    return false
}
function emailValidate(email){

    
}

// function passwordcheck(password){
//     let pattern = /^[a-z]{5}\W{1}\d{1}$/i
//     if (pattern.test(pass))
// }
while(true){
    let username = prompt("what is your name?")
    let usercheck = usernameValidate(username)

    let email = prompt("enter your email")
    let (emailValidate(email))

    let telphone = prompt("enter your telephone number")
    let (phonecheck(telphone))

    let password = prompt("Enter your password")
    let (passwordcheck(password))
    // let emailValidate = /\w\W@(gmail|yahoo)/

    // let tel = Number(prompt("enter your telphone"))
    // let pattern = /\d{11}/
    // console.log(pattern.test("09045207861"));

    
    if(usercheck){
        alert(`welcome${username}`)

        break;
    }else{
        alert("invalid user data")
        break;
    }
}