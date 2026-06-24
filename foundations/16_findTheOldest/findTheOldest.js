const findTheOldest = function(people) {
    return people.reduce((oldest , person) => {
        const getAge = (p) => {
            const end = p.yearOfDeath || new Date().getFullYear();
            return end - p.yearOfBirth ;
        };
        
        return getAge(person) > getAge(oldest) ? person : oldest;
        
    }) //ilk adım yazmazsan default ilk eleman ilk adım oluyor.
};

// Do not edit below this line
module.exports = findTheOldest;
