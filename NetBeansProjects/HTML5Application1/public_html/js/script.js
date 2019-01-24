/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ar_esami=[];

function printRis(){
    let tx="";
    let txo="";
    
    for (let i=0;i<ar_esami.length;i++){
        let es= ar_esami[i];
        //tx+=es.nome + " " + es.cognome + " ha preso " + es.voto + "<br>";
        tx += es.html();
        
    }
    //output
    document.getElementById("d_ris").innerHTML=tx + "<br>---<br>" + txo;
}


function addEsame(){
   let newnome =document.getElementById("in_nome").value;
   let newcognome =document.getElementById("in_cognome").value;
   let newvoto =document.getElementById("in_voto").value * 1;
   //creo oggetto esame alunno
   let alunno ={
       nome: newnome,
       cognome:newcognome,
       voto: newvoto,
       html: function(){
           let ris= this.nome + " " + this.cognome + " ha preso " + this.voto + "<br>";
         return ris;  
       }
   };
   ar_esami.push(alunno);
   document.getElementById("in_nome").value="";
   document.getElementById("in_cognome").value="";
   document.getElementById("in_voto").value ="";
  document.getElementById("in_nome").focus();
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