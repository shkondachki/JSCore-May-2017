function quadraticEquation(a, b, c) {
    let d = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    let x = -b / (2 * a);

    if (d > 0) {
        if (x1 > x2) {
            console.log(x2);
            console.log(x1);
        }
        else {
            console.log(x1);
            console.log(x2);
        }
    }
    else if (d == 0) {
        console.log(x);
    }
    else console.log("No");

}