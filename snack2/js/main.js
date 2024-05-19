//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.//

const squadra = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
      },
      {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
      },
      {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
      },
]
//GENERO NUMERI RANDOM AL POSTO DEGLI ZERO IN ENTRAMBE LE PROPRIETA'

for (let i = 0; i < squadra.length; i++) {
    squadra[i].puntiFatti = Math.floor(Math.random() * 100);
    squadra[i].falliSubiti = Math.floor(Math.random() * 100);
}
//CREO NUOVO ARRAY CONTENENTE SOLO NOME DELLA SQUADRA E FALLI SUBITI

const squadraFalli = [];

for (let i = 0; i < squadra.length; i++) {
    squadraFalli.push({
        nome: squadra[i].nome,
        falliSubiti: squadra[i].falliSubiti
    });
}
//MOSTRO IN CONSOLE IL RISULTATO

console.log(squadraFalli);