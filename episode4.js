var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
    var suspectThree = 'Harvey'
    console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// 'Suspects include: Jay, Val, Harvey, Rick'
// 'Suspect three is: Harvey'
// wrong!!
//
// var suspectThree = 'Harvey'
// is limited in scope to the allSuspects function

// Suspect three is:Keith