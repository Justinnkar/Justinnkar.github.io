/*
//Madlibs of the Amazon
`Once upon a time there were some intrepid explorers who wandered into the Amazon. They found some amazing things! Piranhas are more ${adjective} during the day, so make sure you cross the ${noun} at night. Piranhas are attracted to fresh ${liquid} and will most likely take a bite out of your ${bodyPart} if you ${verb}. Whatever you do, if you have an open ${noun} try and find another way to get back to ${place}. Good luck!`

var adjective = prompt("Please enter an adjective.")
var noun = prompt("Please enter a noun.")
var verb = prompt("Please enter a verb.")
var liquid = prompt("Please enter a liquid.")
var bodyPart = prompt("Please enter a bodyPart.")
var place = prompt("Please enter a place.")

//World Domination Challenge
//This is a Javascript function
const askFunction = () => {
    var usersName = prompt("Please enter your name.")
    var writeCode = prompt("Can you write code?")

    if (writeCode.toLowerCase()=== "yes"){
        alert(`You will rule the world, ${usersName}`)
    }
    else{
        alert("Well good luck with that.")
    }
    return 
}

//Magic8 8 Ball
const magic8 = () => {
    prompt("Ask the Magic8 8 Ball a question.")
    var randomNumber = Math.floor(Math.random() * 3)
}
*/

// Treasure hunt
var death = Math.floor(Math.random()* 9 )
var win = Math.floor(Math.random() * 9 )

// if(id === death) {
//     document.getElementById(treasure).disabled = true;
//     return alert ("Game Over!")
// }

const treasure = (id) => {
  console.log()

  if (id === death) { 
    document.getElementById(death). innerHTML="🧟‍♂️"
    return alert (" You Died. ")
    } 
    else if ( id === win) {
    document.getElementById(win). innerHTML="💉"
    return alert (" You survived. ") 
    } 
    else {
    document.getElementById (id) . innerHTML= "🧱"
  }
}