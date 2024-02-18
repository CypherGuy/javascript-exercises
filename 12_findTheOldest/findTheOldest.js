const findTheOldest = function(peopleList) {
    function getAge(death, birth){
        if (!death){
            death = new Date().getFullYear()
        }
        return death - birth
    }
    return peopleList.reduce((oldestPerson, currentPerson) => {
        oldAge = getAge(oldestPerson["yearOfDeath"], oldestPerson["yearOfBirth"])
        newAge = getAge(currentPerson["yearOfDeath"], currentPerson["yearOfBirth"])
        if (oldAge >= newAge) {
            return oldestPerson;
        } else {
            return currentPerson;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
