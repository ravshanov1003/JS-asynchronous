// ES 2018

async function getUsers() {
    try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await users.json();
        console.log(json[0].name);
    } catch (error) {
        console.log(error)
    }
}
let user = {
    fullName: "john doe",
    age: 25,
    gender: 'male',
    job: 'coder'
}

function getMessage(obj) {
    const { fullName, age, ...rest } = obj
    return `this is ${fullName} and he is ${age} years old. He is ${rest.gender} and he is ${rest.job}`
}

console.log(getMessage(user));