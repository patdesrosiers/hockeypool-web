export class SeriesRecord {
    wins: number;
    losses: number;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }