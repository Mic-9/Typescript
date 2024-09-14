var Mezzo = /** @class */ (function () {
    function Mezzo(tipoMezzo, id, disponibile) {
        this.tipoMezzo = tipoMezzo;
        this.id = id;
        this.disponibile = disponibile;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.disponibile) {
            this.disponibile = false;
            console.log("".concat(this.tipoMezzo, ": ").concat(this.id, " assegnato a ").concat(utente.nome, " ").concat(utente.cognome));
        }
        else {
            console.log("".concat(this.tipoMezzo, ": ").concat(this.id, " in uso"));
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.disponibile) {
            console.log("Mezzo prenotato: ".concat(mezzo.tipoMezzo, " ").concat(mezzo.id));
            mezzo.assegnaUtente(this);
        }
        else {
            console.log("".concat(mezzo.tipoMezzo, ": ").concat(mezzo.id, " non \u00E8 disponibile"));
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nomeCitta, mezziDisponibili) {
        this.nomeCitta = nomeCitta;
        this.mezziDisponibili = mezziDisponibili;
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log("".concat(mezzo.tipoMezzo, ": ").concat(mezzo.id, " aggiunto al parco mezzi di ").concat(this.nomeCitta));
    };
    return Citta;
}());
var bici = new Mezzo("bici", 123, true);
var vespa = new Mezzo("scooter", 456, false);
var monopattino = new Mezzo("monopattino", 789, true);
var utente1 = new Utente("Mario", "Rossi", "mariorossi@gmail.com", "paypal");
var utente2 = new Utente("Luigi", "Verdi", "luigiverdi@gmail.com", "carta di credito");
var utente3 = new Utente("Sara", "Bianchi", "sarabianchi@gmail.com", "paypal");
var Milano = new Citta("Milano", [monopattino]);
var Roma = new Citta("Roma", [vespa]);
Roma.aggiungiMezzo(bici);
utente1.prenotaMezzo(monopattino);
