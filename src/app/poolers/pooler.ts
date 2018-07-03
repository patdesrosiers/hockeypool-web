import { Prediction } from "../prediction";

export class Pooler {  

    score: number;
    lastname: string;
    firstname: string;
    predictions: Prediction[];

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }