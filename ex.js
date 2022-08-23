// Contexte du projet

/*Ecrire le code en français correspond aux besoins suivants.
Puis écrire les mêmes algorithmes dans le language de programmation
 de votre choix.*/

// Exercice 1
// Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.

//{exo 1} ALGO;
// DÉBUT
//   demander une varriable [n]
//   TANT QUE VRAI
//     SI [n] EGALE 1,2 OU 3
//       afficher "GREAT JOB"
//       QUITTER LA RÉSULTAT APRES
//     FIN DE SI
//     SI [n] EST PAS EGALE À 1,2,3
//       afficher "RENTREZ"
//     FIN DE SI
//   FIN DE BOUCLE TANT QUE
// FIN


// Exercice 1
// Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.



function exo1() {
  let n = parseInt(prompt("Entrez un nombre entre 1 et 3"));
  while (true) {
    if (n == 1 || n == 2 || n == 3) {
      console.log(`Great job, your number was ${n}`)
      return
    }
    n = parseInt(prompt(`retentez un nombre entre "1" et "3"`))
  }
}
exo1()

// Exercice 2
// Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

//{exo2} ALGO;

// DÉBUT
//   demander une varriable [z]
//   TANT QUE [z] inférieur à 10 ou supérieure à 20
//     SI [z] inférieur à 10
//       demander une varriable [z] plus grand
//     FIN DE SI
//     SI [z] supérieure à 20
//       demander une varriable [z] plus petit
//     FIN DE SI
//   afficher "NICE"
//   FIN DE BOUCLE TANT QUE
// FIN
    

function exo2() {
  let z = parseInt(prompt("Choisissez un nombre de 10 à 20"))
  while (z < 10 || z > 20) {
    if (z < 10) {
      z = parseInt(prompt('Plus grand!'))
    } else if (z > 20) {
      z = parseInt(prompt('Plus petit!'))
    }
  }
  console.log('Nice')
}
exo2()


// Exercice 3
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.

// DÉBUT
//   demander une varriable [x]
//   TANT QUE [x] n'est pas egale à [y + 10]
//     afficher les prochain 10 valeurs de [x]
//   FIN DE LA BOUCLE TANT QUE
// FIN

function exo3() {
  let x = parseInt(prompt("Choisissez un nombre de départ"))
  let y = x
  while (x != y + 10) {
    x++
    console.log(x)

  }
}
exo3()


// Exercice 4
// Réécrire l'algorithme précédent, en utilisant cette fois l'instruction Pour (Si ce n'est pas déjà le cas)

// {exo 4}
// DÉBUT  
//   demander une varriable [number]
//   POUR [i] egale [number] et number est moin de [i+10]
//     afficher les prochin 10 numbers 
//   FIN DE LA CONDITION POUR
// FIN

function exo4(){
  let number = parseInt(prompt("Entrez un nombre"))
  for (i = number ; number <i+10 ; number++){
    console.log(`votre numéro ${i} plus ${number-i+1} = ${number+1}`)
  }
}
exo4()


// Exercice 5
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce

// nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :
// Table de 7 : 7 x 1 = 7 7 x 2 = 14 7 x 3 = 21 ... 7 x 10 = 70

// {exo5}
// DÉBUT
//   demander une varriable [num1]
//     POUR [result5] EGALE 0 ET [result5] N'EST PAS ÉGALE À [NUM1*10]
//       afficher la table de multiplication DE[num1]
//   FIN DE LA BOUCLE POUR
// FIN

function exo5() {
  let result5 = 0;
  let num1 = parseInt(prompt("Choisissez un nombre a multiplier"));
  let num2 = 0;
  for (result5 = 0; result5 != num1 * 10; num2++) {
    result5 = num1 * num2;
    console.log('Table de ' + num1 + ' : ' + num1 + ' X ' + num2 + ' = ' + result5);
  }
}
exo5();

// Exercice 6
// Ecrivez un algorithme calculant la somme des valeurs d’un
// tableau (on suppose que le tableau a été préalablement saisi).

// DEBUT
//   CREE UN tableau
//   INISSIALISER [j] À 0
//   POUR [i] EGALE 0 ET [i] INFERIEUR À TABLEAU*LARGEUR
//     [j] += tableau de lindex [i]
//   FIN DE LA BOUCLE POUR
// FIN

const tab = [1, 2, 3]

function exo6() {
  let j = 0
  for (let i = 0; i < tab.length; i++) {
    j += tab[i]
  }
  return j
}
let result6 = exo6()
exo6()

// Exercice 7
/* Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur,
et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :
 Entrez le nombre numéro 1 : 12 Entrez le nombre numéro 2 : 14 etc. Entrez le nombre numéro 20 :
  6 Le plus grand de ces nombres est :
   14 Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été saisie ce nombre :
}    C’était le nombre numéro 2*/

/*CRÉE UN TABLEAU
DÉBUT 
  CRÉE UNE VARIABLE [MAX]
  CRÉE UNE AUTRE VARIABLE [POS]
  POUR [I] EGALE 0 ET I EST MOIN DE 20
    DEMANDER UNE VARIABLE [n]
    AJOUTER LA RESULTAT AU TABLEAU
    SI TABLEAU[i] EST MOIN DE MAX
      METTER MAX EGALE TABLEAU[I]
      METTER POS EGALE i+1
    FIN DE SI
  FIN DE POUR
  AFFICHER LE MAX NUMERO     
FIN
*/



const tableau = []

let max = 0;
let pos = 0;
let number = 0;
for (let i = 0; i < 20; i++) {
  number = i
  let n = parseInt(prompt(`Choisissez un nombre ${number + 1}`))
  tableau.push(n)
  if (tableau[i] > max) {
    max = tableau[i]
    pos = i + 1
  }
}
console.log(`Le plus grand de ces nombres est ${max} C’était le nombre numéro ${pos}`)

// Exercice 8
/* Réécrire l’algorithme précédent, mais cette fois-ci on ne
 connaît pas d’avance combien l’utilisateur souhaite saisir de
  nombres.
 La saisie des nombres s’arrête lorsque l’utilisateur entre un 
 zéro.*/

//ALGO8:

// DÉBUT 
//   CRÉE UNE VARIABLE [MAX]
//   CRÉE UNE AUTRE VARIABLE [POS]
//   CRÉE UNE AUTRE VARIABLE [NUMBER] ET L'INISSIALISSER A FALSE
//   TANT QUE [NUMBER] EST FALSE
//       DEMANDER UNE VARIABLE [n]
//       AJOUTER LA RESULTAT AU TABLEAU
//       SI [n] VEUT 0
//         POUR I MOIN DE LARGEUR DE TABLEAU
//           SI L'INDEX I DE TABLEAU EST SUPERIEUR À MAX
//             METTER MAX EGALE TABLEAU[I]
//             METTER POS EGALE i+1
//           FIN DE SI
//         FIN DE POUR
//       FIN DE SI
//   FIN DE TANT QUE
// AFFICHER LE MAX NUMERO     
// FIN

const tableau = []

let max = 0;
let pos = 0;
let number = false
while ( number === false){
  let n = parseInt(prompt(`Choisissez un nombre`))
  tableau.push(n)
  if ( n === 0){
    for (let i = 0; i<tableau.length;i++){
      if (tableau[i] > max){
          max = tableau[i]
          pos = i+1
          number = true 
      }
    }
  } 
}
console.log(`Le plus grand de ces nombres est ${max}, C’était dans la ${pos}ème position`)

// Exercice 9
/* Lire la suite des prix (en euros entiers et terminée par zéro)
 des achats d’un client.
 Calculer la somme qu’il doit, lire la somme qu’il paye,
  et simuler la remise de la monnaie en affichant les textes "10
   Euros",
   "5 Euros" et "1 Euro" autant de fois qu’il y a de coupures de
    chaque sorte à rendre.
}*/

//algo8;

// DEBUT 
//   CREE UN tableau
//   CREE UNE VARIABLE SOMME ET L'INISIALISER À 0
//   CREE UNE VARIABLE left ET L'INISIALISER À 0
//   CREE UNE VARIABLE ten ET L'INISIALISER À 0
//   CREE UNE VARIABLE five ET L'INISIALISER À 0
//   CREE UNE VARIABLE one ET L'INISIALISER À 0
//   POUR I EGALE 0 
//     DEMANDER UNE VARIABLE APP 
//     METTER CETTE VALEUR AU tableau
//     SOMME += tableau[I]
//   FIN DE POUR
//   DEMANDER UNE VARIABLE TOGIVE 
//   MODIFIER LA VARIABLE LEFT POUR QUELLE EGALE TOGIVE MOIN SOMME
//   SI TOGIVE EST PLUS PETIT QUE SOMME 
//     REFAIRE LA DOMANDE DE VARIABLE TOGIVE
//   FIN DE SI
//   SI TOGIVE EST PLUS GRAND OU EGALE SOMME
//     AFICHER LE REST D'ARGENT ET DE BILLER 10,5 ET 1
//   FIN DE SI
// FIN

const tab = [];
function exo9(){
  let somme = 0;
  let left = 0;
  let ten = 0;
  let five= 0;
  let one = 0;
  for (let i = 0; tab[ i - 1] != 0; i++){
    let app = parseInt(prompt("Entrez le montant"));
    tab.push(app);
    somme+= tab[i]
  }
  let togive = parseInt(prompt("Vous devez payer"));
  left = togive - somme;
  if (togive < somme){
    let togive = parseInt(prompt(`Vous devez payer au minimum ${somme}`));
    left = togive - somme;
  }
  else {
      while (left >=10){
        left -= 10
        ten++
      }
      while (left >=5){
        left -= 5
        five++
      }
      while (left >=1){
        left -= 1
        one++
      }
      window.alert(`Le total de vos achats ${somme} Vous avez payer ${togive} il vous reste ${togive - somme}`);
      return ten + " fois de billet de 10, " + five + " fois de billet de 5 et " + one + " fois de billet de 1."
    }
}
console.log(exo9());
