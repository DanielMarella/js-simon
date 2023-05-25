

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

// Funzione che mi fa il conto alla rovescia
function contoAllaRovescia(){
    
    // Data da confrontare
    let dateToCheck = new Date('May 26, 2023 9:30:00').getTime();
    console.log(dateToCheck);
    
    // Funzione che mi aggiorna  il countdown ogni secondo
    let interval = setInterval(function(){

        // Variabile che mi prende il giorno e l'ora attuale
        let actualDateTime = new Date ().getTime();
        
        //Variabile che mi calcola il tempo che  c'e fra la data di partenza e la data di arrivo
        let timeDistance = dateToCheck - actualDateTime;
        let hours = Math.floor(timeDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minuts = Math.floor(timeDistance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(timeDistance % (1000 * 60) / 1000);
        document.getElementById("countDown").innerHTML = hours + "ore "+ minuts + "minuti " + seconds + "secondi ";
        
        // Controllo che mi fa interropere il ciclo quando è finito
        if (actualDateTime < 0) {
            clearInterval(interval);
            document.getElementById("countDown").innerHTML = ('complimenti non hai sbagliato nulla sei stato straordinario');
        }
    }, 1000)
}

let time = contoAllaRovescia();
console.log(time);
