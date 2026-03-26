// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (array, ...args) {
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array  //for each,her elemana bir kez fonksiyonu uygular.
  array.forEach((item) => {
    // push every element into the new array //bu içerdeki fonka callback fonk deniliyor.
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

//forEach yeni bir array returnlemez ama push vs kendin yaparsın. map ise kendisi otomatik yeni array döndürür.
//...args yerine ...examples vesaire de diyebilirsin. önemli olan ... denilen rest parametre,args reserved değil.

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

module.exports = removeFromArray;
