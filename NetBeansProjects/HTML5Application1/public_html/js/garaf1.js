
var ar_gara = [];

function printRis() {
    let tx = "";
    for (let i = 0; i < ar_gara.length; i++) {
        let es = ar_gara[i];
        tx += es.htmlTR();

    }
    //output
    document.getElementById("d_ris").innerHTML = "<table>" + tx + "</table>";
}

function setGriglia() {

    for (let i = 0; i < ar_gara.length; i++) {
        let es = ar_gara[i];
        es.griglia = i + 1;

    }
    printRis();
}
function setRisultato() {
    let newgriglia = document.getElementById("in_griglia").value;
    let newrisultato = document.getElementById("in_risultato").value;
    ar_gara[newgriglia - 1].risultato = newrisultato;
    printRis();
}


function addPartecipante() {
    let newnome = document.getElementById("in_pilota").value;
    let newauto = document.getElementById("in_auto").value;

    //creo oggetto esame alunno
    let partecipante = {
        pilota: newnome,
        auto: newauto,
        griglia: "",
        risultato: "",

        htmlTR: function () {
            let ris = "<tr><td>" + this.pilota + "</td><td>" + this.auto + "</td><td>" + this.griglia + "</td><td>" + this.risultato + "</td></tr>";
            return ris;
        }

    };
    ar_gara.push(partecipante);
    document.getElementById("in_pilota").value = "";
    document.getElementById("in_auto").value = "";
    document.getElementById("in_pilota").focus();
    printRis();
}

/*
 var Alunno ={
 nome: "",
 cognome:"",
 voto: 0,
 html: function(){
 let ris= this.nome + " " + this.cognome + " ha preso " + this.voto + "<br>"
 return ris;  
 }
 };
 */
function printRisSort() {
    let tx = "";
    for (r = 1; r <= ar_gara.length; r++) {
        for (let i = 0; i < ar_gara.length; i++) {
            let es = ar_gara[i];
            if (es.risultato == r) {
                tx += es.htmlTR();
                var node = document.createElement("DIV");
                node.style = "position:absolute;left:" + (r-1) * 100 + "px;"
                node.innerHTML = es.pilota;
                document.getElementById("stage").appendChild(node);

            }

        }
    }
    //output
    document.getElementById("d_ris").innerHTML = "<table>" + tx + "</table>";
}

