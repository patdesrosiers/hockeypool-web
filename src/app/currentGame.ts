import { SeriesSummary } from "./seriesSummary";

export class CurrentGame {
  seriesSummary: SeriesSummary;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}