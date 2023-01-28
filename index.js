const inputOne = document.createElementById("inputOne")
const inputTwo = document.createElementById("inputTwo")
const inputThree = document.createElementById("inputThree")
const inputFour = document.createElementById("inputFour")
const inputFive = document.createElementById("inputFive")

const btn = document.getElementById("form-button")

function getAnswers() {
if (inputOne.value <= 1) {
  console.log("Only one aminal")
} else if (inputOne.value <= 2) {
  console.log("only two babu")
} else {
  console.log("welp, the world may never know")
}

if (inputTwo.value === "banana") {
  console.log("nummy")
} else if (inputTwo.value === "papaya") {
  console.log("also nummy") 
} else if (inputTwo.value === "chicken nuggets") {
  console.log("yes, this is the best vegetable")
} else {
  console.log("Yeah, no. pick a vegetable.")
}

if (inputThree.value === "yes") {
  console.log("toe wedgie...")
} else if (inputThree.value === "no"){
  console.log("what's wrong wiff you?")
} else {
  console.log("errrrrrrrror")
}

if (inputFour.value === "yes") {
  console.log("Okay")
} else if (inputFour === "no") {
  console.log("oh.")
} else {
  console.log("why you no choose a simple yes or no???")
}

if (inputFive === "cake") {
  console.log("not a risk taker?")
} else if (inputFive === "death") {
  console.log("oooh, that's spicy")
} else {
  console.log("Not a choice.")
}
} 


