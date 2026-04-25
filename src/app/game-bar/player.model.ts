import { Relic } from "./relic.model";


export interface Player {
    id?: string;
    name?: string;
    relics?: Relic[];
}