/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

I tipi di dato più usati sono::
number: numeri sia interi sia decimali (nel caso di numeri decimali si usa il punto al posto della virgola)
string: sequenza di lettere che vanno a formare parole e frasi
boolean: che come valore può essere vero o falso 

*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Francesco";
console.log("Name: " + name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = 0;
let a;
let b;
a = 12;
b = 20;
sum = a + b;
console.log("a=" + a + " b=" + b);
console.log("la somma di " + a + " e " + b + " è " + sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("x = " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name = "Di Clemente";
console.log("nuovo name: " + name);

// const name2 = "Alberto"; //restituisce errore  'Assignment to constant variable.'
// name2 = "Piero";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num = 4;
let diff = num - x;
console.log("sottrazione:");
console.log(num + " - x = " + diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";

console.log(name1 + " è uguale a " + name2 + " ? ");
console.log(name1 === name2 ? "VERO" : "FALSO");

console.log(name1.toLowerCase() + " è uguale a " + name2.toLowerCase() + " ? ");
console.log(name1.toLowerCase() === name2.toLowerCase() ? "VERO" : "FALSO");
