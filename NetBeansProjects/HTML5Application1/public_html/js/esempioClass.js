

var lega;

function init() {
// creo la lega
    lega = new Lega("IFL", "campionato italiano di football americano con tre divisioni");
//creo arbitro
    let arbr = new Arbitro("Andrea guerrini", "111222333", "019", "M", "Senior");
    lega.aggiungiArbitro(arbr);
// creo giocatori e squadre
    var sq = new Team("Mastini", "ivrea", "grigio bianco", "seconda divisione");
    var gioc = new Giocatore("mario guerrini", "222333444", "009", "M", 88, "quarterback");
    sq.compraGiocatore(gioc);
    gioc = new Giocatore("demetrio spaccaossa", "22332211", "011", "M", 123, "lineback");
    sq.compraGiocatore(gioc);
    gioc = new Giocatore("Attilio REGOLO", "22332211", "22", "M", 112, "lineback");
    sq.compraGiocatore(gioc);
    lega.aggiungiSquadra(sq);
//creo altra suqadra e giocatori
    sq = new Team("Sirbons", "cagliari", "rossi bianco", "seconda divisione");
    gioc = new Giocatore("mario piras", "222333444", "110", "M", 88, "quarterback");
    sq.compraGiocatore(gioc);
    gioc = new Giocatore("demetrio pirus", "22332211", "111", "M", 123, "lineback");
    sq.compraGiocatore(gioc);
    gioc = new Giocatore("Attilio paris", "22332211", "112", "M", 112, "lineback");
    sq.compraGiocatore(gioc);
    lega.aggiungiSquadra(sq);
//creo altra suqadra e giocatori
    sq = new Team("Lanceri", "novara", "azzurro", "seconda divisione");
    gioc = new Giocatore("mario rossi", "222333444", "220", "M", 88, "quarterback");
    sq.compraGiocatore(gioc);
    gioc = new Giocatore("demetrio bianchi", "22332211", "221", "M", 123, "lineback");
    sq.compraGiocatore(gioc);
    gioc = new Giocatore("Attilio verdi", "22332211", "222", "M", 112, "lineback");
    sq.compraGiocatore(gioc);
    lega.aggiungiSquadra(sq);
    var camp = new Campionato("stagione 2019");
    part = new Partita("2109-02-02", "ivrea", "Mastini", "Sirbons", 19);
    camp.aggiungiPartita(part);
    part = new Partita("2109-02-12", "ivrea", "Mastini", "Lanceri", 19);
    camp.aggiungiPartita(part);
    part = new Partita("2109-02-22", "cagliari", "Sirbons", "Lanceri", 19);
    camp.aggiungiPartita(part);
    part = new Partita("2109-03-02", "cagliari", "Sirbons", "Mastini", 19);
    camp.aggiungiPartita(part);
    part = new Partita("2109-03-12", "novara", "Lanceri", "Mastini", 19);
    camp.aggiungiPartita(part);
    part = new Partita("2109-03-22", "novara", "Lanceri", "Sirbons", 19);
    camp.aggiungiPartita(part);
    lega.aggiungiCampionato(camp);
    document.getElementById("d_ris").innerHTML = lega.el_campionati[0].visPartite();
}


function selPartita() {
    let ris = 0;
    return ris;
}
function addRisultato() {
    let pt1 = document.getElementById("inpt1").value * 1;
    let pt2 = document.getElementById("inpt2").value * 1;
    let indexP = document.getElementById("s_partite").value;
    if (indexP == "")
    {
        alert("devi selezionare una partita");
        return;
    }
    let camp = lega.el_campionati[0];
    let part = camp.el_partite[indexP];
    part.pt1 = pt1;
    part.pt2 = pt2;
    document.getElementById("d_ris").innerHTML = lega.el_campionati[0].visPartite();

}

/*
 const uomo = new Anagrafica("luca guerrini", "333444555", "007", "Maschio");
 alert(uomo.saluta());
 const arbr = new Arbitro("Andrea guerrini", "111222333", "019", "M", "Senior");
 alert(arbr.saluta());
 
 var sq = new Team("MAstini", "ivrea", "grigio bianco", "seconda divisione");
 var gioc = new Giocatore("mario guerrini", "222333444", "009", "M", 88, "quarterback");
 sq.compraGiocatore(gioc);
 gioc = new Giocatore("demetrio spaccaossa", "22332211", "011", "M", 123, "lineback");
 sq.compraGiocatore(gioc);
 gioc = new Giocatore("Attilio REGOLO", "22332211", "22", "M", 112, "lineback");
 sq.compraGiocatore(gioc);
 
 alert(sq.visTeam());
 
 const lega = new Lega("IFL", "campionato italiano di football americano con tre divisioni");
 
 lega.aggiungiSquadra(sq);
 
 alert(lega.visLega());
 
 var camp = new Campionato("stagione 2019");
 var part;
 part = new Partita("2109-03-02", "cagliari", "mastini", "sirbons", 19);
 camp.aggiungiPartita(part);
 
 part = new Partita("2109-02-02", "cagliari", "sirbons", "mastini", 19);
 camp.aggiungiPartita(part);
 
 part = new Partita("2109-04-02", "ivrea", "mastini", "sirbons", 19);
 camp.aggiungiPartita(part);
 
 part = new Partita("2109-05-02", "ivrea", "mastini", "terryfing", 19);
 camp.aggiungiPartita(part);
 
 lega.aggiungiCampionato(camp);
 lega.el_campionati[0].aggiungiPartita(part);
 document.write(lega.el_campionati[0].visPartite());
 */
