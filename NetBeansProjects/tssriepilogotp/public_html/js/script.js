/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
function saluta() {
    //recupero le info dalla pagina html e le metto in variabili per poterle usare
    //dagli oggetti input prendo il valore dell'attributo value
    let nome = document.getElementById("in_nome").value;
    let cognome = document.getElementById("in_cognome").value;
    // elaboro il risultato in ris
    let ris = "Hello " + nome + " " + cognome;
    //faccio vedere il risultato nellapagina HTM nello span sp_saluta
    
    document.getElementById("sp_saluta").innerHTML = cleanText(ris);
}

function valutaVoto() {
    //recupero input
    let ris = "";
    let miovoto = document.getElementById("in_miovoto").value;
    let soglia = document.getElementById("in_sogliapromozione").value;
    //elaboro se ho preso piu della soglia promosso se no bocciato

    if (isNaN(miovoto) || isNaN(soglia)) {
        alert("attenzioni scrivi numeri");
        ris="dati non correti";
    } else {
        miovoto = Number.parseInt(miovoto);
        if (miovoto >= soglia) {
            ris = "promosso";
        } else
        {
            ris = "bocciato";
        }
        
        ris = document.getElementById("in_cognome").value + " è stato " + ris;
        ris=cleanText(ris);
    }

    //ultima fase output
    document.getElementById("sp_valutazione").innerHTML = ris;

}

//es chiamata    txok=cleanText(miotesto);
function cleanText(testo){
    let txok="";
    txok=testo.toUpperCase().trim();
    return txok;
}


