// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*

// ### 1. Récupère et affiche le premier enfant de la dernière div

let div = document.getElementsByTagName("div");
console.log(div[div.length - 1].firstElementChild);

// ### 2. Récupère et affiche le dernier enfant de la dernière div

let div = document.getElementsByTagName("div");
console.log(div[div.length - 1].lastElementChild);

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le en console

let div = document.getElementsByTagName("div");
let p = div[div.length - 1].getElementsByTagName("p");
let i = p[0].getElementsByTagName("i");
console.log(i[0]);

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le

let div = document.getElementsByTagName("div");
let p = div[div.length - 1].getElementsByTagName("p");
let b = p[p.length - 1].getElementsByTagName("b");
console.log(b[0]);

// ### 5. Affiche l'élément parent de l'élément i

let i = document.getElementsByTagName("i");
console.log(i[0].parentElement);

// // ### 6. affiche l'élément parent de l'élément b

let b = document.getElementsByTagName("b");
console.log(b[0].parentElement);

// ### 7. affiche l'élément suivant le premier enfant de la dernière div

let div = document.getElementsByTagName("div");
console.log(div[div.length - 1].firstElementChild.nextElementSibling);