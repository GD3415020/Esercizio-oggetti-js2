let id;
let tel;
let select = Number(prompt(`Scegli:\n1 per visualizzare tutta la rubrica\n2 per visualizzare un contatto\n3 per aggiungere un contatto\n4 per eliminare un contatto\n5 per modificare un contatto`));

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
            this.contatti.push({ nome: name, telefono: number });
            console.log(`CONTATTO AGGIUNTO`);
            this.mostratutti();
        }
    },

    modifica: function (name, number) {
        let contatto = this.contatti.find(contatto => contatto.nome == name);
        if (contatto) {
            contatto.telefono = number;
            console.log(`CONTATTO MODIFICATO`);
            this.mostratutti();
        } else {
            console.log(`Contatto non presente in rubrica`);
        }
    }
}

switch (select) {
    case 1:
        agenda.mostratutti();
        break;
    case 2:
        id = String(prompt(`inserisci il nome da visualizzare`));
        agenda.mostra(id);
        break;
    case 3:
        id = String(prompt(`inserisci il nome da aggiungere`));
        tel = Number(prompt(`inserisci il numero di telefono`));
        agenda.aggiungi(id, tel);
        break;
    case 4:
        id = String(prompt(`inserisci il nome da eliminare`));
        agenda.elimina(id);
        break;
    case 5:
        id = String(prompt(`inserisci il nome da modificare`));
        tel = Number(prompt(`inserisci il nuovo numero di telefono`));
        agenda.modifica(id, tel);
        break;

    default:
        console.log(`scelta non valida`);
        break;
}
