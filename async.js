// node async.js
let promise = new Promise((resolve, reject) => {
    let a = 4;
    if (a % 2 === 0) {
        resolve("it is even");
    } else {
        reject("it is odd")
    }
})

promise
    .then((str) => {
        return str + '.';
    })
    .then((str) => {
        return str.split(" ");
    })
    .then((str) => {
        console.log(str)
    })
    .catch((error) => {
        console.log(error)
    })

let p1 = new Promise((resolve, reject) => {
    resolve("first")
});
let p2 = new Promise((resolve, reject) => {
    resolve("second")
});
let p3 = new Promise((resolve, reject) => {
    resolve("third")
});
let p4 = new Promise((resolve, reject) => {
    resolve("fourth")
});

Promise.all([p1, p2, p3, p4]).then((result) => {
    console.log(result);
})