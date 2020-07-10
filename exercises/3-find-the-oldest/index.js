/**
 *
 */
let findTheOldest = function (people) {
    const sorted = people.sort((a, b) => {
        if(b.yearOfDeath === undefined && b.yearOfBirth < a.yearOfBirth){
            return 1
        }
        if((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)){
            return 1
        }
        else{
            return -1
        }
    })
    return sorted[0]
}

module.exports = findTheOldest;
