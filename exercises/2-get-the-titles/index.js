/**
 *
 */
const getTheTitles = (books) => {
    let result = [];
    for (let book of books) {
      result.push(book.title);
    }
    return result;
};

module.exports = getTheTitles;
