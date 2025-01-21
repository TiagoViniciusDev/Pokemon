export interface dataInterface {
    id: string;
    name: string;
    images: {large: string;};
    hp: string;
    rarity: string;
    types: Array<string>;
    supertype: string;
    subtypes: Array<string>
    level: string;
    resistances: Array<{type: string; value: string;}>;
    weaknesses: Array<{type: string; value: string;}>;
    abilities: Array<{name: string; text: string; type: string;}>;
    attacks: Array<{name: string; damage: string; text: string}>;
    set: {images: {symbol: string}; name: string};
    cardmarket: {url: string; prices: {avg1: number; averageSellPrice: number}};
    tcgplayer: {url: string; prices: {holofoil: {market: number; mid: number}}};
  }