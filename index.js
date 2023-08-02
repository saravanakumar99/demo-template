console.log(sum(1,2,3,4));

function sum(...items) {
    return items.reduce((a,b) => a+b);
}