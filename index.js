function findMatching(drivers,string){
    return drivers.filter(
        (kindaMatch) => kindaMatch.toLowerCase() === string.toLowerCase()
    )}

function fuzzyMatch(drivers,string){
    return drivers.filter(
          (firstLetter) => firstLetter.toLowerCase().indexOf(string.toLowerCase()) === 0
)}

function matchName(drivers,string){
    return drivers.filter( 
        (homeTown)=> homeTown.name === string)
}
