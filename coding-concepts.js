// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(""))

// a) Your answer: This will log a new array in which each element, at each index position, is seperated into individual elements. ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '2']
// b) Verify and explain: split() method splits a string into a new array of individual strings, without changing the original string. because the string "Echo 2022" has nine elements, the new array will split each element into an individual string.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: this will log undefined because "Learn Student" has not been declared.
// b) Verify and explain: the function is working as designed, however, because the argument "LEARN Student" has not been declared, the console.log(greeter("LEARN Student")) will return undefined.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[ 8, 10, 12, 14, 16 ]
// b) Verify and explain: .map will go through each element in the specified array and multiply each number by a factor of 2. A new array will return with the the product of [i]*2


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13,15]
// b) Verify and explain: the .filter method will return a new array of elements that passed the test provided by the function. in this case only the odd numbers from the original function.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: the console.log will return the string "Javascript".
// b) Verify and explain: the array languages has two index positions, and the console.log is asking for the [0] index. so, "Javascript" will return.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Echo', year: 2022 }
// b) Verify and explain: within the class Learn, the contsructor function witch contains the this. method which referes to an object. the variable learnStudent is passed through the console.log requesting a return of the specified name, along with the objects contained within the function constructor.
