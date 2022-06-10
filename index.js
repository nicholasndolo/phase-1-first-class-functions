function receivesAFunction(callBack){
    return callBack()
}
receivesAFunction(function(){"I'm a callback function"})

function returnsANamedFunction(){
    return function addNumber(a, b){
        return a + b;
    }
}

function returnsAnAnonymousFunction(){
    return(function(){return "I'm an anonymous function"})
}