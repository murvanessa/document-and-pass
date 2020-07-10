/**
 *
 */
const removeFromArray = (ArrayofNumb, ...toremove) => {
    for (let i = 0; i < toremove.length; i++) {
      for (let j = 0; j < ArrayofNumb.length; j++) {
        if (ArrayofNumb[j] === toremove[i]) {
          ArrayofNumb.splice(j, 1);
        }
      }
    }
    return ArrayofNumb;
  };

module.exports = removeFromArray
