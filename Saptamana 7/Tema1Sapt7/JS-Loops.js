//ex 1

//facem un for loop
//initializam un index i cu 0
//setam ca i sa fie mai mic decat 20
//incremenetam cu 1
//verificam conditia de par sau impar folosind modulo (%)
//daca i % 2 === 0 atunci numar par
//NU uitam sa scriem CONTINUE;
//daca nu atunci impar

function oddEven() {
    for(i = 0; i < 20; i++) {
        if ((i % 2) === 0) {
            console.log (i + " este numar par");
            continue;} 
            console.log (i + " este numar impar");
    }
};

console.log(oddEven(2));

//DE SCRIS SI CU WHILE
let i = 0;
function oddEven2() {
    while (i < 20) {
        if ((i % 2) === 0) {
            console.log (i + " este numar par");
            continue;} 
            console.log (i + " este numar impar");
    
    }
}
oddEven2(2);

//ex2
//scriu named function
//folosesc for loop in care initializez index cu 0, ii dau conditie sa se opreasca la 10, incrementez cu o unitate
// afisez rezultat i * 9
//apelez functia

function increment() {
    for(i = 0; i < 10; i++) {
        console.log(i + "*" + "9 = " + (i * 9));
    }
};

console.log(increment());

//var   WHILE

//ex3

function multiplication() {
    for(i=0; i <=10; i++) {
        console.log("1 " + "* " + i + " = " + (i * 1)) + "\n";
    }
};

console.log(multiplication());

//ex4


var grade = function (points) {
    for (points = 0; points <= 10; points++){
    switch (true) {
        case (points === 1 && points <= 3): console.log( "Calificativul corespunzator punctajului " + points + " este " + "E");
            break;
        case (points === 3 && points <= 6): console.log( "Calificativul corespunzator punctajului " + points + " este " + "D");
            break;
        case (points === 7 && points <= 8): console.log( "Calificativul corespunzator punctajului " + points + " este " + "B");
            break;
        case (points === 9): console.log( "Calificativul corespunzator punctajului " + points + " este " + "A");
            break;
        case (points === 10): console.log( "Calificativul corespunzator punctajului " + points + " este " + "A+");
            break;
        default: "absent";
    }
}
};

console.log(grade());
