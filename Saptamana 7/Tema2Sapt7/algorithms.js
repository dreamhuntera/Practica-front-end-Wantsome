//ex1
//initializam named function cu variabila
//impartim string-ul in sectiuni
//luam bucata de la inceput pana la "@" si o salvam intr-o variabila 
//functia returneaza stringul de la inceput pana la jumatate din lungimea variabilei temporare apoi concateneaza ... si concateneaza 
//rest email de la @ pana la final

function protectEmailPass(email) {
    
    var temp = email.slice(0, email.indexOf("@"));
    return email.substring(0, (temp.length/ 2)) + "..." + email.slice(email.indexOf("@"));

};

console.log(protectEmailPass("dominicus.stanescu.vlad@test.com"));


//ex2
//create function

//make array of each word of the inserted argument
//call first letter of each string of the array
//transform it to upperCase
//get the rest of the words by concatenating each string position, slicing at 1 index so that it would be the rest of the word 
//and set it to lower case



function upperCase(txt) {
    
    var arr = txt.split(' '); 
    for (i = 0; i<= arr.length; i++) {
        console.log(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
 
};

console.log(upperCase("i am superman"));

//ex3
//facem o functie careia ii dam un parametru pt a o putea chema ulterior cu argumetul nostru
//facem un looop de tip for in care mergem pe fiecare litera a stringului 
//verificam daca e upper or lower prin conditionalul if
//pt ca apoi sa o schimbam

function changeLetterCase(str) {
    var arr = str.split(' ');
    for (i = 0; i<=str.length; i++) {
        if ((arr[i].charCodeAt(i) <= 90) || (arr[i].charCodeAt(i) >= 65)) {
            words = arr[i].toLowerCase();
        } else if ((arr[i].charCodeAt(i) <= 122) || (arr[i].charCodeAt(i) >= 97)) {
           words =  arr[i].toUpperCase();
        } else {
            return "not a letter. please, introduce letters";
        }
    } return (words.join(' '));
};
 
console.log(changeLetterCase('aCcepTlETters'));

function changeLetterCase(str) {
    var regEx = /([A-Z])/;
    var emptyArr = [];
    str = str.split('');

    for(var x in str) {
        if (regEx.test(str[x])) {
            emptyArr.push(str[x].toLowerCase())
        }
    }
}

//ex4
//avem nevoie de o functie cu doi parametri, unul pentru string si ununl pt de cate ori sa concateneze stringul
//avem nevoie de o variabila intermediara in care sa stocam parametri
//rulam un loop de tip while in care daca conditia este true si anume daca  nr de  ori de 
//care vrem sa concatenam string-u e mai mare ca zero 
//adaugam in stringul intermediar strr valoarea proprie--care e goala-- si stringul introdus
//NU uitam sa modificam index-ul times decrementandu-l pt a nu intra in loop infinit
// returnam valoarea stringului intermediar ca rezultat al functiei
//la final call de functie cu valorile si console.log ca sa le si vedem.
function concatStr (str, times) {
    let strr = "";
  while(times>0) {
    strr += str;
    times--;
  }
     return strr;
};
console.log(concatStr("wantsome", 3));

//varianta-ex4
//shorted version
function concatStr (str, times) {
    times > 0 ? str.repeat(times) : "";
    
};
console.log(concatStr("wantsome", 4));

//ex5
//palindrome
//we slice the string in 2 halfs and transform them into arrays
//we compare the first half with the reverse of the second one after we transform the arrays into strings

function palindrome(str) {
    let firstHalf = str.slice(0, str.length/2).split('');
    let secondHalf = str.slice(str.length/2 +1).split('').reverse();
    if (firstHalf.join() === secondHalf.join()) {
        return "palindrome";
    } else {
       return "not palindrome";
    }
};
console.log(palindrome('level'));


//ex6


function arrayOfArray(arry) {
    //initializam un array in care sa stocam cel mai mare numar din fiecare sub-array
    let temp = [];
    //metoda sort- incercata a fi adaptata la numere
    for (let i = 0; i<arry.length; i++){
        for(j=0; j<arry[i].length; j++){
    arry[j].sort(function(a,b) {
            
             switch(true) {
               case (a > b): console.log(temp.push(a));
               case (a < b) : console.log(temp.push(b));
               case(a === b): console.log(temp.push(a));
               default: console.log('none');
            }
        });
    };
}
    return temp;
    };

console.log(arrayOfArray([[1, 2], [3, 4], [0, 9]]));

//ex7 - reverse la un string
//facem o functie cu parametru de tip string
//initializam un array pe care-l facem egal cu stringul transformat in array pe cuvinte
//afisam array-ul in ordine inversa pe care il transformam in string(cu join);
//apelam functia;

function reverseString(str) {
    var arr= str.split(' ');
    console.log (arr.reverse().join);
};

console.log (reverseString('you are'));

//ex8 - factorialul unui nr
//excludem cazul in care numarul este egal cu zero sau 1, factorialele lor fiind mereu 1
//facem un loop for ce porneste indexarea de la numar -1 si indexeaza pana cand se ajunge la 1
//si facem numarul sa fie egal cu el inmultit cu indexul(care initial e numarul - 1)
//afisam numarul dupa ce se termina loop-ul
//apelam functia si dam argument


function factorial(no) {
    if (no === 0 || no=== 1) {
        return 1;
    };
    for (i= (no-1); i > 1; i--) {
        no *= i;
        
    };console.log(no);
};
console.log(factorial(4));

//ex9- 2 strings - verifica daca primul se termina cu al doilea
//facem array-uri pe litere din string-urile introduse ca argumente; le facem si de aceelasi Case
//verificam daca trecand prin elementele primului array este vreounul care coincide cu primul element din array 2
//atunci cand il gasim folosim un alt array in care stocam bucata slice-uita din primul array de la elementu gasit comun
//ale celor doua array-uri de comparat
// verificam daca corespund lungimile array-ul 2 inputat cu cel al array-ului intermediar
//daca lungimile nu corespund atunci nu se indeplineste conditia- returnam mesaj
//daca da verificam ca fiecare element din array-ul intermediar sa fie egal cu array-ul 2 
//returnam adevarat daca corespund
//returnam fals altfel


function isLastEndFirst(firstStr, secondStr) {
    arr1 = firstStr.toLowerCase().split('');
    arr2 = secondStr.toLowerCase().split('');
    for (i =0; i<=arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            ary = arr1.slice(i);
        }
    };
    if (ary.length === arr2.length) {
        for (i=0; i<=ary.length; i++) {
            for (j=0; j<=arr2.length; j++) {
                if (ary[i] === arr2[j]) {
                    return "true";
                } else {
                    return "false";
                }
            }
        }
    } else {
        return "close but not enough";
    }

};
console.log(isLastEndFirst('Archbishop', 'bishop'));

//ex10
//implementam o functie de adevar cu un parametru
//in care vrem sa testam daca un numar e multiplu de 3
//verificam daca modulo 3 este egal cu zero
//daca da, true, altfel, false
//implemetam o alta functie firstElemofArray cu parametri un array si functia implementata anterior
//parcurgem array-ul, de la zero pana la lungime array

///NU FUNCTIONEAZA!!!!

function multiplesOfThreefn(no) {
    if (no % 3 === 0) {
    return true;
    } else {  
        return false;
    }
};
function firstElemOfArray(arr, multiplesOfThree) {
    for (let i=0; i< arr.length; i++) {
        return arr[i].multiplesOfThree;
    }
    
};

console.log(firstElemOfArray([0,4,9,10], multiplesOfThreefn));


//-----ex 11
//facem o functie cu doi parametri 
//transformam string-urile in array-uri, pe litere
//le facem si de acelasi case
// facem 2 loop-uri in care mergem de la index zero pana la lungimea string-ului si
//verificam pe rand daca inputurile din fiecare array sunt egale
//NU FUNCTIONEAZA!!!!!!!!!!!!!!!!!
function checkString(firstStr, secondStr) {
    arr1 = firstStr.toLowerCase().split('');
    arr2 = secondStr.toLowerCase().split('');

    for (i =0; i<arr1.length; i++) {
            for (j=0; j<arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    return "true. Contains all the letters of the second string";
                } else {
                    return "false. Does not.";
                }
            }
        }
   

};
console.log(checkString('Mother', 'mom'));

//varianta
//transformam direct string-ul 2 in loweCase, il facem array pe litere
//folosim metoda care testeaza daca toate elementele din array respecta conditia implementata
//de functia care are un parametru si care
// returneaza folosind metoda includes ce determina daca un string se gaseste in altul, nu uitand sa aducem toate caracterele
//string-ului 1 la lowerCase pt a evita cazurile cu uppercase
//se va folosi la metoda includes acelasi parametru ca al functiei metodei every

function checkString(string1, string2) {
    return string2.toLowerCase().split('').every(function(character){
        return string1.toLowerCase().includes(character);});
};
console.log(chesckString('jscripts','javascript'));

//----ex12
//implementam functia cu2 paramateri un array si o valoare
//parcurgem fiecare element din array cu un for loop
//verificam fiecare element din array daca e egal cu valoarea introdusa
// adaugam fiecare element verificat intr-un array nou
//cand intalnim valoare ne oprim
//afisam noul array in care am stocat elementele array-ul verificate
let arrResult = [];
function displayUntilValue(arr, no) {
    for (i=0; i<arr.length; i++){
        let counter = arr[i];
        if (counter !== no) {

            counter += arr[i];
        } 
    }; 
    return arrResult.push(counter);
}


console.log(displayUntilValue([1, 2, 5, 3, 303, 50], 3));

//----ex 13
//try to use filter method
//implementam functia cu un parametru
//luam fiecare element din array si il verificam cu un for loop
//daca array de index este = cu falsa sau null sau 0 sau "", undefined ori NaN
//atunci splice de i si scoatem de la indexul gasit elementul ce corespunde
// NU FUNCTIONEAZA!!

let fauxValeur = [false, null, 0, "", undefined, NaN];
function removeFalseValues2(arry){
    for (let i=0; i<arry.length; i++){
        for (let j=0; j<fauxValeur.length; j++){
            if (arry[i] === fauxValeur[j]) {
                let exclusionArr = [];
                exclusionArr.push(arry[i]);
            }
        }
    } return arry.splice()
}
function removeFalseValues(arr) {
    for (i=0; i<arr.length; i++) {
        if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || arr[i] === NaN ){
            var result = arr.splice(i, 1);
        }
    } return result;
}
console.log(removeFalseValues([false, 0, 2, 3, "", NaN, null, undefined]));


//filter method creaza un nou array care respecta conditia din functie
//conditia din functie e ca toate elementele sa fie true
//valorile date de testat: NaN, 0, null, undefined, "", false sunt considerate in JS ca fiind falsy
//inseamna ca daca sunt supuse unei conditii de adevar vor returna false.
//de aceea din functia atunci cand se intreaba prin arrow function sa se returneze toate elementele true, cele falsy
//sunt excluse automat si se formeaza noul array datorita metodei filter

function removeFalslyValues(arr) {
    return arr.filter(x=>x);
}
console.log(removeFalslyValues([false, 0, 2, 3, "", NaN, null, undefined, 7]));

//----ex14 ---function repeats string n times
//write function with 2 parameters: string and no of times
//for loop with index starting from 0 until the number of times inputed in argument of function
//use a variabile to remeber result by applying repeat method to the string and specify how many times
//tell function what to return
// call function with arguments;

function repeatString(str, no) {
    for(i=0; i<=no; i++){
       var result = str.repeat([i]);
    }
    return result;
}

console.log(repeatString("again", 3));



