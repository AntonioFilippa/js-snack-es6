//CREO ARRAY DI OGGETTI PER RAPPRESENTARE LA BICI DA CORSA
const biciDaCorsa = [
    {
        nome: "Bici 1",
        prezzo: 10
    },
    {
        nome: "Bici 2",
        prezzo: 20
    },
    {
        nome: "Bici 3",
        prezzo: 30
    },
    {
        nome: "Bici 4",
        prezzo: 40
    },
    {
        nome: "Bici 5",
        prezzo: 50
    },
    {
        nome: "Bici 6",
        prezzo: 60
    },
    {
        nome: "Bici 7",
        prezzo: 70
    },
    {
        nome: "Bici 8",
        prezzo: 80
    },
    {
        nome: "Bici 9",
        prezzo: 90
    },
]
    //FUNZIONE PER TROVARE LA BICI CON IL PESO MINORE
    function trovaBiciConPesoMinore(biciDaCorsa) {
        //INIZIALIZZO LA PRIMA BICI COME QUELLA MINORE
        let biciConPesoMinore = biciDaCorsa[0];
        //PER OGNI BICI DELL'ARRAY UTILIZZANDO FOR-OF
        for (let bici of biciDaCorsa) {
            //SE IL PESO DELLA BICI CORRENTE E' MINORE DELLA BICI CON PESO MINORE
            if (bici.prezzo < biciConPesoMinore.prezzo) {
                //LA BICI CON PESO MINORE E' QUELLA CORRENTE
                biciConPesoMinore = bici;
            }
        }
        //RITORNO LA BICI CON PESO MINORE
        return biciConPesoMinore;
    }
    //MOSTRO IN CONSOLE IL RISULTATO
    console.log(trovaBiciConPesoMinore(biciDaCorsa));
    

        
