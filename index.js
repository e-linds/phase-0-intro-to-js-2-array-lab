// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat (name) {
    return cats.push(name);

}

function destructivelyPrependCat (name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat (name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat (name) {
    return cats.shift(name);
}

function appendCat(name) {
    const copyOfCats = [
        ...cats, 
        name
    ]
    return (copyOfCats)
}

function prependCat(name) {
    const copyTwoOfCats = [
        name,
        ...cats
    ]
    return (copyTwoOfCats)
}

function removeLastCat (name) {
const copyThreeOfCats = cats.slice(0, -1)
return copyThreeOfCats
}

function removeFirstCat(name) {
    const copyFourOfCats = cats.slice(1)
    return copyFourOfCats
}
