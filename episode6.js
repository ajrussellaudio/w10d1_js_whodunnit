var murderer = 'rick';

var outerFunction = function(){
    var murderer = 'marc';

    var innerFunction = function(){
        murderer = 'valerie';
    }

    innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// valerie
// wrong!!

// murderer = 'valerie'
// only changes the var murderer of the outerFunction().
// var murderer = 'rick'
// is unaffected

// rick