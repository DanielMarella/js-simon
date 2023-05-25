


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
    }, 1000) //1000 = intervallo di aggiornamento della funzione (la funzione si ripete ogni 1s)
}

// Richiamo la funzione per farla funzionare
let time = contoAllaRovescia();
