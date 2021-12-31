// spread
function putCookieInAnyArray(arr) {
    return [...arr, 'cookie'];
}
console.log(putCookieInAnyArray(['I', 'want', 'a']))

const person = {
    name: "Todd",
    age: 29,
};

const copyOfTodd = { ...person };

// rest
function addFiveToABunchOfNumbers(...numbers) {
    return numbers.map(x => x + 5);
}

console.log(addFiveToABunchOfNumbers(1,2,3,4,5,6,7,8,9,10))
