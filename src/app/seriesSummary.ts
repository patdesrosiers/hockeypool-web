export class SeriesSummary {
    gamePk: number;
    gameLabel: string;
    gameTime: string;
    seriesStatus: string;

  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }