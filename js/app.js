{
    // Task 1
let k = 5;
let n = 3;
for (let i = 0; i < n; i++) {
    console.log(k);
}
}

{
    // Task 2
    let a = 2;
    let b = 5;
    let count = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
            count++;
        }
        console.log( count);
    } else {
        console.log("hato");
    }
}

{
    // Task 3
    let a = 3
    let b = 6
    count = 0;
    if (a < b) {
        for (let i = b; i >= a; i--) {
            console.log(i);
            count++;
        }
        console.log(count);
    } else {
        console.log("hato");
    }
}

{
    // Task 4
    let price = 10;
    let kg = 1;
    while (kg <= 10) {
        console.log(kg + " kg: $" + (price * kg).toFixed(2));
        kg++;
    }
}

{
    // Task 5
    let price = 5
    kg = 1;
    while (kg <= 9) {
        console.log((kg / 10) + " kg: $" + (price * (kg / 10)).toFixed(2));
        kg++;
    }
}

{
    // Task 6
    let price = 4
    kg = 12;
    while (kg <= 20) {
        console.log((kg / 10) + " kg: $" + (price * (kg / 10)).toFixed(2));
        kg += 2;
    }
}

{
    // Task 7
    a = 2;
    b = 5;
    let sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        console.log("Sum:", sum);
    } else {
        console.log("hato");
    }
}

{
    // Task 8
    let a = 3
    let b = 6
    let product = 1;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            product *= i;
        }
        console.log("Product:", product);
    } else {
        console.log("hato");
    }
}

{
    // Task 9
    let a = 3
    let b = 6
    sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i * i;
        }
        console.log(sum);
    } else {
        console.log("hato");
    }
}

{
    // Task 10
    n = 5;
    sum = 0;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            sum += 1 / i;
        }
        console.log(sum.toFixed(0));
    } else {
        console.log("hato");
    }
}