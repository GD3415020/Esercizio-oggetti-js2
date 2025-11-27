let nome;
let telefono;

let agenda = {
    contatti: [
        { nome: 'Giovanni', telefono: 2222222222 },
        { nome: 'Luca', telefono: 3333333333 },
        { nome: 'Antonio', telefono: 4444444444 },
        { nome: 'Marco', telefono: 5555555555 },
        { nome: 'Elena', telefono: 6666666666 }
    ],

    mostratutti: function () {
        this.contatti.forEach(contatto => console.log(`${contatto.nome}: ${contatto.telefono}`));
    },

    mostra: function (name) {
        let contatto = this.contatti.find(contatto => contatto.nome == name);
        if (contatto) {
            console.log(`${contatto.nome}: ${contatto.telefono}`);
        } else {
            console.log(`${name} non presente in agenda`);
        }
    },

    elimina: function (name) {
        let contatto = this.contatti.find(contatto => contatto.nome == name);
        let index = this.contatti.indexOf(contatto);
        if (index >= 0) {
            this.contatti.splice(index, 1);
            console.log(`CONTATTO ELIMINATO`);
            this.mostratutti();
        } else {
            console.log(`contatto non trovato`);
        }
    },

    aggiungi: function (name, number) {
        let contatto = this.contatti.find(contatto => contatto.nome == name);
        if (contatto) {
            console.log(`Contatto già presente in rubrica`);            
        } else {
            this.contatti.push ({nome: name, telefono: number});
            console.log(`CONTATTO AGGIUNTO`);
            this.mostratutti();
        }
    }
}

// agenda.mostratutti();
// agenda.mostra(`Giovanni`);
// agenda.elimina(`Pippo`);
agenda.aggiungi(`Giovanni, 7777777777`);