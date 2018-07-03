import { Round } from "./round";

export class Playoff {
    rounds: Round[];

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}