const students = ["Nerd", "Bully", "Teacher's Pet", "Class Clown", "Super Duper Pooper Scooper Awesome Kid (it's me)"]

console.log(students.length)

for (i = 0; i < students.length; i++) {
    console.log("Welcome to class,", students[i])
}

students[0] = "New Kid"

if (students[0] != "Nerd") {
    console.log("Welcome to the group,", students[0])
}