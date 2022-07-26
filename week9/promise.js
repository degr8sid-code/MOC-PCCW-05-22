function a () {
    return new promise(function(resolve) {
        setTimeout(function() {
            resolve('a');
        },3000)
    });
}

function b () {
    return new promise(function(resolve) {
        setTimeout(function() {
            resolve('b');
        },3000)
    });
}

function c () {
    return new promise(function(resolve) {
        setTimeout(function() {
            resolve('c');
        },3000)
    });
}

const list = [a, b, c];

for (fn in list) {
    console.log(fn);
    fn.then(function(done) {
        console.log(done);
    });
}