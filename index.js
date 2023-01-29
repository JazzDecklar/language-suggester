const inputOne = document.getElementById("inputOne")
const inputTwo = document.getElementById("inputTwo")
const inputThree = document.getElementById("inputThree")
const inputFour = document.getElementById("inputFour")
const inputFive = document.getElementById("inputFive")
let language = 0;
let inputs = document.querySelectorAll("input")
const btn = document.getElementById("form-button")


function getAnswers(e) {
  e.preventDefault();

if (inputOne.value < 2) {
  console.log("Only one aminal")
  language += 1
} else if (inputOne.value < 3) {
  console.log("only two babu")
  language += 2
} else {
  console.log("welp, the world may never know")
}



if (inputTwo.value === "banana") {
  console.log("nummy")
  language += 3
} else if (inputTwo.value === "papaya") {
  console.log("also nummy") 
  language += 2
} else if (inputTwo.value === "chicken nuggets") {
  console.log("yes, this is the best vegetable")
  language += 3
} else {
  console.log("Yeah, no. pick a vegetable.")
}

if (inputThree.value === "yes") {
  console.log("toe wedgie...")
  language += 4
} else if (inputThree.value === "no"){
  console.log("what's wrong wiff you?")
  language += 1
} else {
  console.log("errrrrrrrror")
  language += 2
}

if (inputFour.value === "yes") {
  console.log("Okay")
} else if (inputFour.value === "no") {
  console.log("oh.")
  language += 6
} else {
  console.log("why you no choose a simple yes or no???")
  language += 3
}

if (inputFive.value === "cake") {
  console.log("not a risk taker?")
} else if (inputFive.value === "death") {
  console.log("oooh, that's spicy")
  language += 4
} else {
  console.log("Not a choice.")
  language += 3
}

// console.log(language)

if (language <= 5) {
  document.getElementById("ruby").removeAttribute("class", "hidden")
  document.getElementById("python").setAttribute("class", "hidden")
  document.getElementById("react").setAttribute("class", "hidden")
} else if (language <= 10) {
  document.getElementById("python").removeAttribute("class", "hidden")
  document.getElementById("ruby").setAttribute("class", "hidden")
  document.getElementById("react").setAttribute("class", "hidden")
} else {
  document.getElementById("react").removeAttribute("class", "hidden")
  document.getElementById("python").setAttribute("class", "hidden")
  document.getElementById("ruby").setAttribute("class", "hidden")
}

inputs.forEach((input) => (input.value = ""))

} 

btn.addEventListener("click", getAnswers)




