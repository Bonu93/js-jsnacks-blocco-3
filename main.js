/** 
Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
Snack 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

*/


//strings to gen player code
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

//basketball player
const player = {
    code: genString(3, characters) + genString(3, numbers),
    name: 'Stephen',
    lastName: 'Curry',
    age: 33,
    ppg: parseFloat(genRandNum(0, 50).toFixed(2)),
    threePtPerc: parseFloat(genRandNum(0, 100).toFixed(2)),
};

//print player details
const {name, lastName, age, code} = player;
console.table({name, lastName, age, code});














/************FUNCTIONS******************/

/**
 * 
 * @param {number} charsNum 
 * @param {string} characters
 * @returns a random string of chars characters
 */
function genString(charsNum, characters) {
    let result = '';
    for ( let i = 0; i < charsNum; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}


/**
 * 
 * @param {number} max 
 * generates a random number from 0 to max
 */ 
function genRandNum(min, max) {
    let rand = Math.random() * (max - min + 1) + min;
    return rand;
}