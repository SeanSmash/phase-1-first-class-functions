function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("")
    }
}