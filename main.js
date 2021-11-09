// Exercice 1 : Inverser les valeurs des deux variables
// Le bute de l'exercice est de trouver une solution pour inverser les valeurs des variable
// Ne pas oublié de verifier avec la commande "node main.js" dans le terminal


var a = 1; // On assigne la valeur 1 sur la variable a
var b = 5; // On assigne la valeur 5 sur la variable b

console.log("--------------------------Avant Inversion-------------------------");

console.log("A : " + a); // Affichage de la valeur A
console.log("B : " + b); // Affichage de la valeur B


// Inversion de la valeur
var tmp = a; // On assigne la valeur a dans la variable tmp car la variable a changera de valeur 
a = b; // Ici la valeur de a(1) prend la valeur de b(1) qui a l'origine etait 5
b = tmp; // Ici le valeur de b(5) prend la valeur de tmp(1)



console.log("--------------------------Après Inversion-------------------------");

console.log("A : " + a); // Affichage de la valeur A
console.log("B : " + b); // Affichage de la valeur B

