
import { CurrentGame } from './currentGame';
import { MatchupTeam } from './matchupTeam';

export class Serie {
    seriesNumber: number;
    seriesCode: string;
    currentGame: CurrentGame;
    matchupTeams: MatchupTeam[];
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }