function findMatching(driver, match){
    let driverMatch = driver.filter(driver => driver.toLowerCase() === match.toLowerCase())
    return driverMatch
}

function fuzzyMatch(driver, match){
    let letterMatch = driver.filter(driver => driver.toLowerCase().indexOf(match.toLowerCase()) === 0)
    return letterMatch
}

function matchName(driver, match){
    let nameMatch = driver.filter(driver => driver.name === match)
    return nameMatch
}
