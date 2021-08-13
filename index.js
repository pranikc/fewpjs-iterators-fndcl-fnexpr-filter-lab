// Code your solution here
function findMatching(driversArray, name) {
    return driversArray.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(driversArray, string) {
    return driversArray.filter(driver => driver.startsWith(string))
}

function matchName(driversArray, name) {
    return driversArray.filter(driver => driver.name.toUpperCase() === name.toUpperCase())
}
