// This is the entities: (1st Layer)
// * Init all the business object and rules
// ? Why immer: to make this class mutable => for redux toolkits 
import { immerable } from "immer";

export class Counter {
    [immerable] = true;
    private _count: number;

    constructor(startNumber: number){
        this._count = startNumber;
    }
    
    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }
}