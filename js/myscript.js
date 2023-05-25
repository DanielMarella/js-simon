

/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!



Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno? = 24
Da quanti minuti è composta un'ora? = 60
Da quanti secondi è composto un minuto? = 60
Da quanti millisecondi è composto un secondo? = 1000

Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
Buon divertimento a tutte e a tutti!
*/

// const hours = (1000 * 60 * 60 * 24);
// const minuts = (1000 * 60 * 60);
// const seconds = (1000 * 60);

// const hoursInaDay = hours / (1000 * 60 * 60);
// console.log(hoursInaDay);

// const minutsInaDay = minuts / (1000 * 60);
// console.log(minutsInaDay);

// const secondsInaDay = seconds / (1000);
// console.log(secondsInaDay);


// function contoAllaRovescia(){
// }
//     let dateToCheck = new Date('May 26, 2023 9:30:00').getTime();
//     console.log(dateToCheck);



let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
