//ex1
function is_string(parameter1){
    return (typeof(parameter1) === "string");
   
}
console.log(is_string('w3school'));
console.log(is_string([1, 2, 4, 0]));

//ex2

function is_blank(str) {
    return (!str || 0 === str.length);
}
console.log(is_blank(''));
console.log(is_blank('abc'));

//ex3
function string_to_array(str) {
    var result = str.split('');
    return result;
}
console.log(string_to_array("Robin Singh"));

//ex4
function abbrev_name(str){
    var result = str.substr(0, 7) + ".";
    return result;
}
console.log(abbrev_name("Robin Singh"));

//ex5
function capitalize(str){
    var result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
}
console.log (capitalize('js string exercises'));

//ex6

function truncate_string(str){
    var result = str.slice(0, 4);
    return result;
}

console.log (truncate_string("Robin Singh", 4));
//ex7
    //var1
    function isUpperCaseAt(str, poz) {
        return str.charAt(poz).toUpperCase() === str.charAt(poz);
    }
    console.log(isUpperCaseAt('Js STRING EXERCISE', 1));

    //var 2
    function isUpperCaseAt(str, poz) {
        
        return str.charAt(poz) === /[A-Z]/g;
    }
    console.log(isUpperCaseAt('Js STRING EXERCISES', 1)); //nu-mi iese decat cu valoarea indexului 1, da si la celelate false. Help!

//ex8
    //var 1
    function insert(str, strr, poz) {
    var position = str.charAt(poz);
        return str.replace(position, strr);
    }
    console.log(insert('We are doing some exercises.','JavaScript ',18));

    //var 2
    function insert(str, strr, poz) {
        return str.substr(0, poz) + strr + str.substr(poz);
    }
    console.log(insert('We are doing some exercises.','JavaScript ',18));

//ex9
function remove_first_occurence(str, strr) {
    return str.trim(strr);
}
console.log(remove_first_occurence("The quick brown fox jumps over the lazy dog", 'the'));

//ex10
function compare_strings(str, strr) {
    return str === strr;
}

console.log(compare_strings('abcd', 'AbcD'));

// function compare_strings(str, strr) {
//     return str.test() === strr.test();}
//     console.log(compare_strings('abcd', 'AbcD'));

    //nu merge, ofc

//ex11
function Uncapitalize(txt) {
    return txt.substr(0,1).toLowerCase() + txt.substr(1);

}
console.log(Uncapitalize('Js string exercises'));

