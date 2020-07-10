/**
 *
 */
const translate = (str) => {
    return str
    .replace(/^[aeiou]\w*/, "$&ay")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
    
};


module.exports = translate;

