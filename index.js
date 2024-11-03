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
for (let i = 0; i < numbers.length; i++) {
    sum= sum + numbers[i];
}
console.log("summation is ",sum);

//21
let maxnumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
   if(numbers[i] > maxnumber)
   {
    maxnumber = numbers[i];
 
   }
}
console.log(maxnumber)

//22

let doubleNumbers = numbers;


for(let i=0;i<doubleNumbers.length;i++)
{
    console.log(doubleNumbers[i],"* 2 =  ",doubleNumbers[i]*2)
}


//23

let summ=0;
for (let i = 0; i < numbers.length; i++) {
    summ= summ + numbers[i];
}
console.log("medelvärde är ",summ/numbers.length);


//24
let minnumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
   if(numbers[i] < minnumber)
   {
    minnumber = numbers[i];
 console.log("minst talet är ",minnumber)
 
   }
}

//25 //26
const positiveNumbers = [3,-5,12,-1,8,-6]

for(let i=0;i<positiveNumbers.length;i++)
{
if(positiveNumbers[i]>0)
{
    console.log(positiveNumbers[i])
}
}

const mixedNumbers = [3,-5,12,-1,8,-6]
//27
/*
let i =0;
console.log("//27 : ")
while(mixedNumbers[i])
{
    if(mixedNumbers[i]<10)
    {
        console.log(mixedNumbers[i])
       
    }

    i++;
}
*/

//28
let n = 0;
let i =0;
while (i<mixedNumbers.length)
{
if(mixedNumbers[i]<0)
{

    n++;

}

i++;
}
console.log("jag hittade ",n," negativa tal")

//29
const words = ["banana","apple","kiwi","strawberry","peach"]

for(let i=0;i<words.length;i++)
{
    console.log("the word ",words[i], " has ",words[i].length," character")

}
//30
//let semo = "semo"
//console.log(semo[0])
let string =""
for(i=0;i<words.length;i++)
{
   string +=words[i][0]  
}
console.log(string)

//31
const numberss = [5,8,12,20,3]

// sum = 0;
//  i=0;
// while(sum<25)
// {
// sum = sum+numbers1[i]
// i++
// }
// console.log("summation is ",sum)


// //32 
// sum=0;
// for(const number of numbers)
// {
//     sum = number +sum
// }
// console.log("summation is ",sum);

// //33
// const temp = [15,22,19,30,28,18,25 ]
// let hogtemp =temp[0] 

//     for(i = 0 ; i<temp.length; i++)
//     {
// if(hogtemp < temp[i])
// {
//     hogtemp = temp[i];
    
// }
//     }
//     console.log("Heightest temp is ",hogtemp)
//    // console.log("  ",words[0].length, "characters in ",words[0])

// //34
//    let countWord 
//     for(i=0;i<words.length;i++)
//     {
//         if(words[i].length>5)
//         {
//            console.log( words[i] , "has ",words[i].length,"characters");
//         }
//     }


   //35
   i =0;
   
   while(i<numbers.length)
    {
if(numbers[i]%2!==0)
{
console.log("first odd number is ",numbers[i])
break;
}
i++;
    } 

let FON = numbers.find(num=>num%2!==0)
console.log("first odd number ",FON)


