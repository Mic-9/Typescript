interface IMezzo {
  tipoMezzo: "bici" | "scooter" | "monopattino";
  id: number;
  disponibile: boolean;

  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
  nomeCitta: string;
  mezziDisponibili: IMezzo[];

  aggiungiMezzo(mezzo: IMezzo): void;
}

class Mezzo implements IMezzo {
  constructor(
    public tipoMezzo: "bici" | "scooter" | "monopattino",
    public id: number,
    public disponibile: boolean
  ) {}

  assegnaUtente(utente: IUtente): void {
    if (this.disponibile) {
      this.disponibile = false;
      console.log(
        `${this.tipoMezzo}: ${this.id} assegnato a ${utente.nome} ${utente.cognome}`
      );
    } else {
      console.log(`${this.tipoMezzo}: ${this.id} in uso`);
    }
  }
}

class Utente implements IUtente {
  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoPagamento: string
  ) {}

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.disponibile) {
      console.log(`Mezzo prenotato: ${mezzo.tipoMezzo} ${mezzo.id}`);
      mezzo.assegnaUtente(this);
    } else {
      console.log(`${mezzo.tipoMezzo}: ${mezzo.id} non è disponibile`);
    }
  }
}

class Citta implements ICitta {
  constructor(public nomeCitta: string, public mezziDisponibili: IMezzo[]) {}

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(
      `${mezzo.tipoMezzo}: ${mezzo.id} aggiunto al parco mezzi di ${this.nomeCitta}`
    );
  }
}

const bici = new Mezzo("bici", 123, true);
const vespa = new Mezzo("scooter", 456, false);
const monopattino = new Mezzo("monopattino", 789, true);

const utente1 = new Utente("Mario", "Rossi", "mariorossi@gmail.com", "paypal");
const utente2 = new Utente(
  "Luigi",
  "Verdi",
  "luigiverdi@gmail.com",
  "carta di credito"
);
const utente3 = new Utente(
  "Sara",
  "Bianchi",
  "sarabianchi@gmail.com",
  "paypal"
);

const Milano = new Citta("Milano", [monopattino]);
const Roma = new Citta("Roma", [vespa]);
Roma.aggiungiMezzo(bici);
utente1.prenotaMezzo(monopattino);
