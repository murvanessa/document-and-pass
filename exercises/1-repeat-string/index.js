/**
 *
 */
const repeatString = (stringtorepeat, repetitionStr) => {
    let repeated = '';
    if(repetitionStr < 0) return 'ERROR';
    for (let i = 0; i < repetitionStr; i++) {
        repeated += stringtorepeat;
      }
 return repeated;
}

module.exports = repeatString
