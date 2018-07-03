import { Team } from './team';
import { SeriesRecord } from './seriesRecord';

export class MatchupTeam {
    team: Team;
    seriesRecord: SeriesRecord;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }