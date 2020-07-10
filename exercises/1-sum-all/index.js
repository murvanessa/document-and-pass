/**
 *
 */
const sumAll = (start, end) => {
    let sumnumb = 0;
    if(typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0){
        sumnumb= 'ERROR';
    } else{
        for(let i = Math.min(start, end); i <= Math.max(start, end); i++){
            sumnumb += i;
        }
    }
    return sumnumb

}

module.exports = sumAll
