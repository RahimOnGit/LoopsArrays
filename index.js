//1
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
//console.log(names[3])

//2

//names.push("Drogba"); //drogba i sist av array
//console.log(names[names.length-1])

//3

//names.unshift("Figo"); //Figo i början av array
//console.log(names[0])

//4
//names.pop()
//console.log(names[names.length-1])


/*//skriv ut all element i array 
names.forEach((names) => {
    console.log(names);
});

//const allnames = names.join(" | ");
//console.log(allnames)

*/

//5

/*{
console.log(names)
names.pop();
console.log(names)
names.unshift("Ronaldo")
console.log(names)
}
*/

//6
/* även fast vi definierar arrayen med en const-variabel 
så tillåts vi ändå att modifiera arrayn.
 Vad kan detta bero på?
 A: const förhindrar referensen av arrays ändras men tilllåter inhållet modiferas 
*/
//7  incldues


const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];


if (players.includes("Messi")) //returns false för att messi är inte med i listan
{
    console.log("Messi är med i listan!")
}
else {
    console.log("Messi är inte med i listan!")
}

//8
if (players.includes("Zlatan")) {
    console.log("Zlatan är med i listan!")
}
else {
    console.log("Zlatan är inte med i listan!")
}
//9
console.log(players.indexOf("Maradona")) //resulat är 5 för att maradona ligger på index 5

//10
console.log(players.indexOf("Messi")) //return a negative value -1 because messi not exist in the array

//11 
console.log(players.join(",     "));


//12
console.log(players.join(" - "));

//13
/*
players.splice(1,2);
console.log(players.join(" - "));

//14.
players.splice(2,0,"Ronaldinho");
console.log(players.join(" - "));

//15
/*players.splice(players.indexOf("Ronaldo"),1);
console.log(players.join(" - "));
*/

//16
const newplayers = players.slice(0, 3);
console.log(newplayers.join(" ,(new) "))

//17
const fewplayers = players.slice(2)
console.log(fewplayers.join("-few- "))


//18
const updatedplayers = players.with(1, "Mbappe")
console.log("Updated players with", updatedplayers)


//19
const numbers = [5, 8, 12, 20, 3];
//console.log(numbers.length)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//20
let sum=0;
for (i = 0; i < numbers.length; i++) {
    sum= sum + numbers[i];
}
console.log("summation is ",sum);

//21
let maxnumber = numbers[0];
for (i = 1; i < numbers.length; i++) {
   if(numbers[i] > maxnumber)
   {
    maxnumber = numbers[i];
 
   }
}
console.log(maxnumber)