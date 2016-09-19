var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
    myAnimals = ['Ducks', 'Dogs', 'Lions'];
    for(var i=0;i<myAnimals.length; i++){
      console.log(i + ": " + myAnimals[i]);
    }
}

listAnimals();

// 0: 'Ducks'
// 1: 'Dogs'
// 2: 'Lions'