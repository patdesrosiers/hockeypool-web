import { Serie } from "./serie";

export class Round {
    number: number;
    series: Serie[];    

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}