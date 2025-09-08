const students = [
    {
        name: 'Arjun',
        age: 23,
        marks: 78,
        class: '10th',
        rollno: 1
    },
    {
        name: 'Sita',
        age: 17,
        marks: 85,
        class: '10th',
        rollno: 2
    },
    {
        name: 'Ravi',
        age: 19,
        marks: 92,
        class: '10th',
        rollno: 3
    },
    {
        name: 'Maya',
        age: 21,
        marks: 67,
        class: '10th',
        rollno: 4
    },
    {
        name: 'Pooja',
        age: 16,
        marks: 54,
        class: '10th',
        rollno: 5
    },
    {
        name: 'Bishal',
        age: 22,
        marks: 88,
        class: '10th',
        rollno: 6
    },
    {
        name: 'Pratik',
        age: 18,
        marks: 77,
        class: '10th',
        rollno: 7
    },
    {
        name: 'Laxmi',
        age: 20,
        marks: 91,
        class: '10th',
        rollno: 8
    },
    {
        name: 'Shiva',
        age: 24,
        marks: 65,
        class: '10th',
        rollno: 9
    },
    {
        name: 'Suman',
        age: 1,
        marks: 80,
        class: '10th',
        rollno: 10
    }
];


// 1. Get only names of students

const studentNames = students.map(student => student.name);
console.log("1. Getting only names of student: " + studentNames);

// 2. Find average age of students

const averageAge = students.reduce((sum, student) => sum + student.age, 0) / students.length;
console.log("2. Average age of students is " + averageAge);

//3. Check weather every age is GenZ

const currentYear = new Date().getFullYear();

const GenZcheck = students.every(student => {
    const birthYear = currentYear - student.age;
    return birthYear >= 1997 && birthYear <= 2012;
});

console.log(GenZcheck ? "3. All students are GenZ." : "3. Not all students are GenZ.");

// 4. List only GenZ students

const GenZstudents = students.filter(student => {
    const birthYear = currentYear - student.age;
    return birthYear >= 1997 && birthYear <= 2012;
});
console.log("4. Name of students from GenZ: " + JSON.stringify(GenZstudents));


