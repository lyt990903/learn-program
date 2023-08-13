// depth为扁平化级别
function flattenDepth(array, depth = 1) {
    let res = [];
    array.forEach(element => {
        if (Array.isArray(element) && depth > 1) {
            res.push(...(flattenDepth(element, --depth)));
        } else {
            res.push(element);
        }
    });
    return res;
}

const arr = [1, 2, [3, 4, [5]], 6];

console.log(flattenDepth(arr, 3));
console.log(flattenDepth(arr, 2));
console.log(flattenDepth(arr));
