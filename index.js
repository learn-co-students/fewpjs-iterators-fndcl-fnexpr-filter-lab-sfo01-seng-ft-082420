// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(s =>
        s.toLowerCase() === str.toLowerCase()
    );

}

function fuzzyMatch(drivers, str) {
    return drivers.filter(s => s.charAt(0) === str.charAt(0))
}

function matchName(drivers, str) {
    return drivers.filter(s => s.name === str)
}