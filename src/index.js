module.exports = function reverse (n) {
    let array = (Math.abs(n)).toString().split('');
    let newArray = [];
    console.log(array);
    for(let i = array.length; i > 0; i--) {
        newArray.push(array[i - 1]);
    }
    return newArray.join('');
};
