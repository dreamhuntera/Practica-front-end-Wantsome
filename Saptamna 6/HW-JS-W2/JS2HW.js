//ex 1
//declar functia
//adaug parametru
//transforma in string
// verifica daca string este empty/null/undefined
//extrage primul caracter
//compara cu 1 sau 2
//daca 1-->M
//daca 2-->F
//daca nici, nici --> unknown gender
var regexp = /^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$/g;

function CNPcheck(cnp) {
    var strCnp = cnp.toString();

if (strCnp.length == 0) {
    return "is empty";
} else {
    if (regexp.test(cnp)) {
        if (strCnp.charAt(0) == 1) {
        return "Persona verificata este de sexul M";
    }
        else if (strCnp.chart(0) == 2) {
        return "Persona verificata este de sexul F";
    } else if (strCnp.charAt(0) == 3)  {
        return "Persoana verificata este de sexul M";
    } else if (strCnp.charAt(0) == 4) {
        return "Persoana verificata este de sexul F";
    } else if (strCnp.charAt(0) == 5) {
        return "Persoana verificata este de sexul M";
    } else if (strCnp.charAt(0) == 6) {
        return "Persoana verificata este de sexul F";
    } else if (strCnp.charAt(0) == 7 || strCnp.charAt(0) == 8) {
        return "Persoana verificata este straina rezidenta in Romania";
    }
        else {
        return "unknown gender";
    }
}   else {
        return "Invalid CNP";
}
}
};
console.log(CNPcheck(1880714225902));

//ex2
//declare function expression
//introduce parameter
//introduce switch statement
//introduce case for 1-3
//introduce what it will return in this case
//introduce case for 3-6
//introduce what it will return in this case
//introduce case 7-8
//introduce what it will return in this case
//introduce case for 9
//introduce what it will return in this case
//introduce case for 10
//introduce what it will return in this case
//introduce what happens if non of the above fit--default
//verify function by calling it in the console.log with an argument

var grade = function(points) {
    // if (points === /[0-9]*\d/) {
        switch(true) {
            case (points === 1 || points <= 3): return "Calificativul corespunzator punctajului " + points + " este " + "E";
            break; 
            case (points === 3 || points <= 6): return "Calificativul corespunzator punctajului " + points + " este " + "D";
            break;
            case (points === 7 || points <= 8): return "Calificativul corespunzator punctajului " + points + " este " + "B";
            break;
            case (points === 9): return "Calificativul corespunzator punctajului " + points + " este " + "A";
            break;
            case (points === 10): return "Calificativul corespunzator punctajului " + points + " este " + "A+";
            break;
            default: "absent";
        }
    };
    // else {
    //     return "not a point";
    // }

console.log(grade(4));

//ex3

//var1
var coutryFactory;
function carDescription(carBrand) {
    if (isNaN(carBrand)) {
        if (carBrand === "Toyota") {
            countryFactory = "Japonia";
            return "Marca " + carBrand + " se produce in " + countryFactory;
        } else if (carBrand === "Mercedes") {
            countryFactory = "Germania";
            return "Marca " + carBrand + " se produce in " + countryFactory;
        } else if (carBrand === "Skoda") {
            countryFactory = "Cehia";
            return "Marca " + carBrand + " se produce in " + countryFactory;
        } else if (carBrand === "Sangyong") {
            countryFactory = "China";
            return "Marca " + carBrand + " se produce in " + countryFactory;
        } else if (carBrand === "Dacia") {
            countryFactory = "Romania";
            return "Marca " + carBrand + " se produce in " + countryFactory;
        } else if (carBrand === "Renault") {
            countryFactory = "Franta";
            return "Marca " + carBrand + " se produce in " + countryFactory;
        } else {
            return "Marca " + carBrand + " este necunoscuta";
        }
    } else {
        return "not a car name";
    }
};

console.log(carDescription('Dacia'));

//var2

function carDescript(carType) {
    var car = function(){ return "Marca " + carType + " se produce in " + countryFactory;}
    switch(true) {
        case carType === "Toyota": return(car);
        break;
        case carType === "Mercedes": return(car);
    }
}

//var3

var carDescription = {

    brand: ["Toyota", "Mercedes", "Dacia", "Skoda", "Sangyong", "Renault"],
    countryFactory: ["Romania", "Japonia", "Cehia", "China", "Germania", "Franta"],
    display: function () {
        return "Marca " + this.brand + " se produce in " + this.countryFactory;
    }

};

console.log()