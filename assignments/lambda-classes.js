// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs)
        this.specialty = attrs.specialty
        this.favLanguage = attrs.favLanguage
        this.catchPhrase = attrs.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs)
        this.previousBackground = attrs.previousBackground
        this.className = attrs.className
        this.favSubjects = attrs.favSubjects
    }

    listsSubjects() {
        return this.favSubjects.forEach(subject => console.log(subject))
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class TeamLeader extends Person {
    constructor(attrs) {
        super(attrs)
        this.gradClassName = attrs.gradClassName
        this.favInstructor = attrs.favInstructor
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}


const instructor1 = new Instructor({
    name: 'instructor1',
    location: 'Alaska',
    age: 43,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Lecture time'
})

const instructor2 = new Instructor({
    name: 'instructor2',
    location: 'Washington',
    age: 34,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'More data'
})

const student1 = new Student({
    name: 'student1',
    location: 'Florida',
    age: 54,
    previousBackground: 'landscaper',
    className: 'webpt8',
    favSubjects: ['JavaScript', 'Node', 'SQL']
})

const student2 = new Student({
    name: 'student2',
    location: 'Georgia',
    age: 41,
    previousBackground: 'bartender',
    className: 'webpt9',
    favSubjects: ['React', 'Redux', 'MongoDB']
})

const teamLeader1 = new TeamLeader({
    name: 'teamleader1',
    location: 'Colorado',
    age: 37,
    gradClassName: 'web4',
    favInstructor: 'Keiran',
})

const teamLeader2 = new TeamLeader({
    name: 'teamleader2',
    location: 'Texas',
    age: 39,
    gradClassName: 'web6',
    favInstructor: 'Angelo',
})

console.log(instructor1)
console.log(instructor2)
console.log(student1)
console.log(student2)
console.log(teamLeader1)
console.log(teamLeader2)

console.log(instructor1.speak())
console.log(instructor2.demo('css'))
console.log(instructor1.grade(student1, 'css'))

console.log('here ', student1.listsSubjects())
console.log(student2.PRAssignment('javascript'))
console.log(student1.sprintChallenge('javascript'))

console.log(teamLeader1.standUp('webpt8'))
console.log(teamLeader2.debugsCode(student2, 'html'))