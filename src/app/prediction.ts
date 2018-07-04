
export class Prediction {
    id: number;
    season: string;
    roundNumber: number;
    serieNumber: number;
    teamId: number;
    idUser: number;
    numberOfGames: number;
    score: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}