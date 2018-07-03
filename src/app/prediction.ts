
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

// public long Id { get; set; }
//         public string Season { get; set; }
//         public int RoundNumber { get; set; }
//         public int SerieNumber { get; set; }
//         public int TeamId { get; set; }
//         public int IdUser { get; set; }

//         public int NumberOfGames { get; set; }

//         [NotMapped]
//         public int Score { get; private set; }