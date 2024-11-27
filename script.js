/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

// Calcola qual e' la zucchina piu corta

const zucchine = [
  {
    varieta: 'varieta1',
    peso: 10,
    lunghezza: 30
  },
  {
    varieta: 'varieta2',
    peso: 12,
    lunghezza: 31
  },
  {
    varieta: 'varieta3',
    peso: 15,
    lunghezza: 40
  },
  {
    varieta: 'varieta4',
    peso: 20,
    lunghezza: 40
  },
  {
    varieta: 'varieta5',
    peso: 34,
    lunghezza: 50
  },
  {
    varieta: 'varieta6',
    peso: 16,
    lunghezza: 9
  },
  {
    varieta: 'varieta7',
    peso: 20,
    lunghezza: 40
  },
  {
    varieta: 'varieta8',
    peso: 17,
    lunghezza: 45
  },
  {
    varieta: 'varieta9',
    peso: 13,
    lunghezza: 46
  },
  {
    varieta: 'varieta10',
    peso: 20,
    lunghezza: 35
  },
]

let pesoTotale = 0;

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  const peso = zucchina.peso;

  pesoTotale += peso;
}

console.log(pesoTotale);

let zucchinaCorta = zucchine[0];

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  if (zucchina.lunghezza < zucchinaCorta.lunghezza) {
    zucchinaCorta = zucchina;
  }
}

console.log(`La zucchina piu' corta e' ${zucchinaCorta.varieta}`);