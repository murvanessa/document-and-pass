/**
 *
 */
const fibonacci = (n) => {
    if( n < 0){
        return 'OOPS';
    } else if(typeof n === 'string'){
        let x = Number(n);
        return (x < 2)? x: fibonacci(x-2)+ fibonacci(x-1);
    } else{
        return (n < 2)? n: fibonacci(n-2)+ fibonacci(n-1);
    }

}

module.exports = fibonacci
