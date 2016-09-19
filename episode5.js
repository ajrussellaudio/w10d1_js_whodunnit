var detective = {
        name : 'Ace Ventura',
        pet : 'monkey'
    }

var printName = function(detective) {
    return detective.name
}

var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
}

console.log(detectiveInfo());

// 'Poirot'