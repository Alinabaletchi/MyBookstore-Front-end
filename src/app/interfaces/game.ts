
export enum GameType {
    LEGO = 'LEGO',
    SOCETY_GAME= 'SOCETY_GAME',
    PUZZLE='PUZZLE',
    BABY_GAME='BABY_GAME'
    
}

export interface Game {
    id: number;
    name: string;
    gameType:GameType;
    description: string;
    price: number;
    quantity: number;
    image: string;

}
