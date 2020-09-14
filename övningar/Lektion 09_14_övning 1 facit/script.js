
/*
A bartender is writing a simple program to determine whether he should serve drinks to someone. 
He only serves drinks to people 18 and older and when he's not on break.
Given the person's age, and whether break time is in session, 
create a function named shouldServeDrinks which returns whether he should serve drinks.
Example
shouldServeDrinks(17, true) ➞ false
shouldServeDrinks(19, false) ➞ true
shouldServeDrinks(30, true) ➞ false

(age >= 18) && working   // Äldre eller lika med 18 är samma sak som äldre än 17


*/

/*

//Solution nr 1

function shouldServeDrinks(age,working){    
    // Kolla om åler är 18 eller mer
    let ageIsOkay= age>17;   // Om uttrycket (age>17) stämmer så är det sant/true och värdet på
                             // ageIsOkay är då true annars är det false;
    
    let serveDrinks = false;  // Vi förutsätter att det aldrig är ok att servera drinkar
                              // varje gång denna rad läses så får variablen serveDrinks värdet false

    if(ageIsOkay && working){  // Sedan kollar vi om det ändå är så att vi ska servera drinkar
        serveDrinks = true;    7/ Om uttrycket (ageIsOkay && working) är sant så ändrar vi 
                               // variabeln serveDrinks till true.
    }

    return serveDrinks;        // Vi skickar tillbaka värdet som variabeln serveDrinks har dvs. sant eller falskt
                               // true / false i datorn.
}



let answer = shouldServeDrinks(17,true); // På denna rad sker det fyra saker;


   Här kommer en förklaring !!!

// Det första som händer på raden ovanför är att en variabel som heter answer deklareras.  

   let answer

// Nr2 som händer är att variabeln tilldelas ett värde.
   
   let answer = 

// Nr3 som händer är att en funktion anropas som sedan returnerar ett värde
   värdet som returneras från funktionen tilldelas variabeln answer.
   
   shouldServeDrinks(17,true); är ett anrop på en funktion

   let answer = shouldServeDrinks(17,true) // Variabeln answer tilldelas det returnerade värdet från funktionen

   console.log(answer); // Här skrivs värdet som finns i variabeln answer ut i konsollen.

*/

/*
Solution nr2
function shouldServeDrinks(age,working){    
    
    let serveDrinks = false;  // Vi förutsätter att det aldrig är ok att servera drinkar
                              // varje gång denna rad läses så får variablen serveDrinks värdet false

    if((age>17) && working){  // Sedan kollar vi om det ändå är så att vi ska servera drinkar
        serveDrinks = true;   // Vi använder hela uttrycket i en o samma rad.
                              // ((age>17) && working) detta uttryck kan antingen vara sant eller falskt.
    }

    return serveDrinks;        // Vi skickar tillbaka värdet som variabeln serveDrinks har dvs. sant eller falskt
                               // true / false i datorn.
}

*/


// Deklarerar en funktion
function shouldServeDrinks(age,working){    
    return (age > 17) && working;  // Returnerar värdet av uttrycket ((age > 17) && working )
}

let answer = shouldServeDrinks(17,true); // Deklarerar en variabel som tilldelas 
                                         // resultatet av en funktion som anropas.

console.log(answer);  // Skriver ut värdet på variabeln answer i konsollen.


// En dator kan bara förstå en enda fåga !
// Är detta påstående sant ?
// Det är den enda frågan som går att ställa !

