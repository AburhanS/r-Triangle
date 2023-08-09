function pyramide(n){
    if(n == 0){
        return 0;
    } else {
        return pyramide(n-1) + n;
    }
}

console.log(pyramide(0));
console.log(pyramide(1));
console.log(pyramide(2));
console.log(pyramide(4));