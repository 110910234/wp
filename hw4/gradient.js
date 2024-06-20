function gradient(f, p, h = 1e-5) {
    let n = p.length;
    let grad = new Array(n);

    for (let i = 0; i < n; i++) {
        let p1 = p.slice();
        let p2 = p.slice();

        p1[i] += h;
        p2[i] -= h;

        grad[i] = (f(...p1) - f(...p2)) / (2 * h);
    }

    return grad;
}


function f(x, y) {
    return x * x + y * y;
}


let p = [1, 2];
let result = gradient(f, p);
console.log(result);  
