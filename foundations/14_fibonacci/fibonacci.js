const fibonacci = function(n) {
    n = Number(n)  //string girilirse int'e çevirmek için

    if(n < 0){
        return "OOPS";
    }

    if (n === 0){
        return 0;
    }

    if (n===1 || n ===2){
        return 1;
    }

    let a = 1;
    let b = 1;

    for(i =3; i <= n; i++){
        let next = a + b;
        a = b; //next'i önceki b ile toplamak için a b , b next değerini almalı.
        b = next;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
