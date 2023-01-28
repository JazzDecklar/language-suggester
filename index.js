const inputOne = document.getElementById("inputOne")
const inputTwo = document.getElementById("inputTwo")
const inputThree = document.getElementById("inputThree")
const inputFour = document.getElementById("inputFour")
const inputFive = document.getElementById("inputFive")

// let valueOne = inputOne.value
// let valueTwo = inputTwo.value
// let valueThree = inputThree.value
// let valueFour = inputFour.value
// let valueFive = inputFive.value

const btn = document.getElementById("form-button")

function getAnswers(e) {
  e.preventDefault();
  console.log(inputThree.value)

if (inputOne.value < 2) {
  console.log("Only one aminal")
} else if (inputOne.value < 3) {
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
} else if (inputFour.value === "no") {
  console.log("oh.")
} else {
  console.log("why you no choose a simple yes or no???")
}

if (inputFive.value === "cake") {
  console.log("not a risk taker?")
} else if (inputFive.value === "death") {
  console.log("oooh, that's spicy")
} else {
  console.log("Not a choice.")
}

} 

btn.addEventListener("click", getAnswers)
