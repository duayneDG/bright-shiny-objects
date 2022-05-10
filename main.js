
// ### `createUser`

// * Accepts two parameters, a user's first name and last name
// * Returns a user objects

function createUser (firstName, lastName){
    let userObject = {
        firstName : firstName,
        lastName : lastName,
        // fullName : `${firstName} ${lastName} `
    };
    return userObject
};


// ### `setAge`

// * Accepts two parameters, a user object and an age
// * Adds a new `age` field to the user
// * Returns the user object

// Example:
// const user = { 
//     firstName: 'Tim',
//     lastName: 'Horton'
// };

function setAge(userObj, age){
    userObj.age = age; 
    return userObj
};
// setAge(user, 19)


// ### `incrementAge`

// * Accepts a user object
// * Increments the age field by one
// * Returns the user object

// ```
// Example:

const user = { 
    firstName: 'Angela',
    lastName: 'Merkel',
    age: 66
};

function incrementAge(userObj){
    let newAge = userObj.age;
    newAge += 1;
    userObj.age = newAge
    // console.log(userObj)
    return userObj
}; 

incrementAge(user)

/* ### `fixCar`

* Accepts a car object
* Sets the `needsMaitenance` field to `false`
* Returns the car object

```
Example
fixCar(car) =>

    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: false
}
*/

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: true
};

function fixCar(carObj){
  car.needsMaitenance = false; 

  return (carObj) 
};

fixCar(car)

/*
### `addGrades`

* Accepts two parameters, a student object and an array of grades
* Adds each new grade to the student's `grades` array
* Returns the student object

```
Example
*/

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

function addGrades (student, newGrades){
    let grades = student.grades;
    let updatedGrades = grades.concat(newGrades)
    student.grades = updatedGrades; 

    return student
}
// addGrades(student, newGrades)

/*

### `getDataType`

* Accepts two parameters, an object and a key in that object
* Returns the data type of the value at that key in the object

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: false
};
 */
function getDataType(object, objkey){
    // get the property of the object ex. car[object].needsMaintenace.[object property]
    const objProperty = object[objkey];
                        //car[property: make, mdel ....]
    let objDataType = typeof objProperty;
    return objDataType
};

// console.log(getDataType(car, "needsMaitenance")); 
// console.log(getDataType(car, "year")); 

// ### `addTodo`

// * Accepts two parameters, an array of to-do items and a new to-do item
// * Adds the new-todo item to the array
// * Returns the array of to-do items

// Example

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false 
    },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
]; 
const newTodo = [
    {
        title: 'Call mom', 
        isComplete: false
    }
        
];

function addTodo(todo, newTodo){
    // console.log(typeof todo, typeof newTodo)
    // console.log(todo) 
    todo.push(newTodo)
    return todo

}
// (addTodo(todos, newTodo))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

// ### `addSong`

// 1. * Accepts two parameters, a playlist object and a song object
function addSong(playlistObj, songObj){

 // 2. * Updates the duration of the playlist
    // console.log(playlistObj.songs)
    // console.log(playlistObj.title)
    // console.log(playlistObj.duration)
    let durationKey = playlistObj.duration
    let newSongDuration = songObj.duration
    //duration key is set to add the time of the songs
    durationKey += newSongDuration;
    // console.log(newSongDuration)
    console.log(durationKey)

        // 3. * Adds the song to the playlist's `songs`
    let songTitle = playlistObj.songs
        // console.log(songTitle)
        // Gets objects associated from the playlist Object
        newSongTitle = songObj
        // Gets song from New Song
        // console.log(newSongTitle)

        songTitle.push(newSongTitle)
        //adds new song to the songTitle Obj
        // console.log(songTitle)

        playlistObj.songs = songTitle;
        playlistObj.duration = durationKey;
        return playlistObj
}
// * Returns the playlist object 
// console.log(addSong(playlist, newSong))

/*
### `updateReportCard`



* Adds the new grade to the report card's grades

Examples
 */


// The return Value should look like this

// updateReportCard(reportCard, 62) =>
// {
//     lowestGrade: 62,
//     highestGrade: 95,
//     averageGrade: 77,
//     grades: [70, 95, 80, 62]
// }
const reportCard = {
    lowestGrade: 70,
    highestGrade: 95,
    averageGrade: 82,
    grades: [70, 95, 80]
};

// 1. Accepts two parameters, a report card and a new grade (a number between 0 and 100)
function updateReportCard(reportCard, newGrade){

// 2. Updates the report card's lowest grade, highest grade, and average grade

    let schGrades = reportCard.grades
    schGrades.push(newGrade)

    //sorted Grades array: low to high
    sortedGrades = schGrades.sort(function(a, b){return a - b});
    let arrLength = sortedGrades.length 
    lowGrade = sortedGrades[0]
    reportCard.lowestGrade = lowGrade;
    reportCard.highestGrade = sortedGrades[sortedGrades.length -1]
    
 
    let sortInitializer = 0
    let gradeSum = reportCard[grades].reduce(avgScore, sortInitializer)
        // console.log(gradeSum/4) 76.7 truncate to 2 sig. figures
        averageGrade = Math.ceil(gradeSum/arrLength)
        // console.log(averageGrade)
        reportCard.averageGrade = averageGrade

    function avgScore(previous, current, index, array){
        return sortInitializer += current 
    };
    return reportCard
}

console.log(updateReportCard(reportCard, 62))
// console.log(updateReportCard(reportCard, 100))























// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
