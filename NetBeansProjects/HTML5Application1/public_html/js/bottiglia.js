/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Bottiglia(marca, capacita, qta_corrente) {
    this.marca = marca;
    this.capacita = capacita;
    this.qta_corrente = qta_corrente;
    this.colore = "azure";
    this.bevo = function (quanto) {
        let ris = 0;
        //decremento la quantita' bevuta
        // se qta maggiore di quanto ok....
        if (this.qta_corrente - quanto >= 0) {
            this.qta_corrente = this.qta_corrente - quanto;
            ris = quanto;
        } else {
            ris = 0;

        }
        return ris;
    };
    this.riempio = function (quanto) {
        let ris = 0;
        //decremento la quantita' bevuta
        // se qta maggiore di quanto ok....
        if (this.qta_corrente + quanto*1 <= this.capacita) {
            this.qta_corrente = this.qta_corrente + quanto*1;
            ris = quanto;
        } else {
           //lo rimepiro all'orlo salvo in ris quanto ne riempiro'
            ris = this.capacita-this.qta_corrente;
            // e poi lo cambio con il massimo
            this.qta_corrente=this.capacita;
        }
        return ris;
    };
    this.riempioFULL = function (quanto) {
        let ris = 0;
        //decremento la quantita' bevuta
        // se qta maggiore di quanto ok....
        //mi salvo quanto ce ne era
        let qt_prima=this.qta_corrente;
        //sporco ma metto tutto
        this.qta_corrente = this.qta_corrente + quanto*1;
        // se ho sforato gli metto la capacita' della bottiglia    
        if (this.qta_corrente > this.capacita) {
            this.qta_corrente = this.capacita;
            //ritorno quanto sono riuscito a caricare
            ris = this.capacita-qt_prima;
        } else {//tutto ok l'ho riempito di quanto
           ris=quanto;
        }
        return ris;
    };
    
    this.stato = function () {
        let ris = "";
        // sono una bottiglia SANTANNA di capacita' 100 e me ne rimangono 60
        ris = "sono una bottiglia " + this.marca + " di capacita' "
                + this.capacita + " e me ne rimangono " + this.qta_corrente;
        return ris;
    }
}

//creo variabili globali uina sola volta
var bot;
var dris;
var sp_bevo;
var sp_riempio;
var in_riempio;
var in_bevo;


function refresh(){
    sp_bevo.innerHTML=in_bevo.value;
    sp_riempio.innerHTML=in_riempio.value;
    
}

function disBottiglia(){
    // mi serve la qta corrente
    let qta=bot.qta_corrente;
    let heightMax=document.getElementById("dbox").clientHeight;
    let cap=bot.capacita;
    let nuovah=heightMax*qta/cap;
    document.getElementById("dbot").style.height=nuovah+"px";
 
    
    
    
}


function creaBottiglia(){
    //inizializzo oggetti globali
    dris = document.getElementById("d_ris");
    sp_bevo=document.getElementById("sp_bevo");
    sp_riempio=document.getElementById("sp_riempio");
    in_bevo=document.getElementById("in_quantobevo");
    in_riempio=document.getElementById("in_quantoriempio");
    
    let marca= document.getElementById("in_marca").value;
    let capacita= document.getElementById("in_capacita").value;
    bot = new Bottiglia(marca,capacita,capacita);
    
    let prn=bot.stato();
    dris.innerHTML=prn;
    disBottiglia();
}
function bevoBottiglia(){
    //recupero le info
    let bevoqta= in_bevo.value*1;
    //eseguo la bevuta
    let ris=bot.bevo(bevoqta);
    //preparo l'output
    let prn="Sono riuscito a bere " + ris;
    prn += "<br>"+ bot.stato();
    //visualizzo l'output
    dris.innerHTML=prn;
    disBottiglia();
}
function riempioBottiglia(){
    let riempioqta= in_riempio.value*1;
    let ris=bot.riempio(riempioqta);
    let prn="Sono riuscito a riempire " + ris;
    prn += "<br>"+ bot.stato();
    dris.innerHTML=prn;
    disBottiglia();
}

/*
dvs = document.getElementById("div_stato");
var bot = new Bottiglia("santanna", 100, 100);
var prn = bot.stato();
prn += "<br> ho bevuto " + bot.bevo(60);
prn += "<br>" + bot.stato();
prn += "<br> ho bevuto " + bot.bevo(60);
prn = prn + "<br>" + bot.stato();
prn += "<br> ho bevuto " + bot.bevo(30);
prn = prn + "<br>" + bot.stato();
//vedo output in div dvs
dvs.innerHTML = prn;
*/



