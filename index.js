function receivesAFunction(food) {
    console.log(food())
};
receivesAFunction(function () { return "I like to jump around"})

function returnsANamedFunction() {
    function fightingSpirit() {
        console.log("I'm a named fuction!")
    }
    return fightingSpirit;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I love to feet")
    }
}