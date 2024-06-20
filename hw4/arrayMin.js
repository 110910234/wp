function arrayMin(a) {
    if (a.length === 0) {
        throw new Error("Array is empty");
    }

    let min = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}


let arr = [3, 5, 1, 8, 2];
let result = arrayMin(arr);
console.log(result);  
