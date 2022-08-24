//exo1:
function exo1(a = "Entrez un nombre entre 1 et 3")
{
  let n = parseInt(prompt(a));
  return n == 1 || n == 2 || n == 3 ?
      (`Great job, your number was ${n}`)
      : exo1(`retentez un nombre entre "1" et "3"`)
}
console.log(exo1());

//exo2:
function exo2(a = "Choisissez un nombre de 10 à 20") {
  let n = parseInt(prompt(a))  
  if (n < 10 || n > 20) {
    return n < 10 ? exo2('Plus grand!'):exo2('Plus petit!');
  }
  return ('Nice');
}
console.log(exo2());

//exo3:
function exo3() {
  let x = parseInt(prompt("Choisissez un nombre de départ"))
  let y = x
  while (x != y + 10) { x++
    console.log(x)
  }
}
exo3()

//exo4:
function exo4(){
  let number = parseInt(prompt("Entrez un nombre"))
  for (i = number ; number <i+10 ; number++){
    console.log(`votre numéro ${i} plus ${number-i+1} = ${number+1}`)
  }
}
exo4()


//exo5:
function exo5() {
  let result5 = 0;
  let num1 = parseInt(prompt("Choisissez un nombre a multiplier"));
  let num2 = 0;
  for (result5 = 0; result5 != num1 * 10; num2++) {
    result5 = num1 * num2;console.log('Table de ' + num1 + ' : ' + num1 + ' X ' + num2 + ' = ' + result5);}
}
exo5();

//exo6:
const arr = [1, 2, 3];
function exo6() {
  let j = 0;
  for (let i = 0; i < arr.length; i++) { j += arr[i]; }
  return j;
}
let result6 = exo6();
console.log(exo6());

//exo7:
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

//exo8:
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

//exo9:
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


