import { Counter } from "../entities";
// From entities to Interactor
// ! Application-SPECIFIC business rules

export class CounterInteractor {
    higherBound: number = 10;
    lowerBound: number = 0;
    counter: Counter;
  
    constructor(
      startNumber: number,
      lowerBound: number = 0,
      higherBound: number = 10
    ) {
        this.counter = new Counter(startNumber);
        this.lowerBound = lowerBound;
        this.higherBound = higherBound;
    }
  
    increment(qty?: number): Counter {
      if(typeof qty === "number"){
        this.counter.count += qty;
      }else {
        this.counter.count += 1;
      }
  
      if (this.counter.count >= this.higherBound) {
        this.counter.count = this.higherBound;
      }
  
      return this.counter;
    }
  
    decrement(qty?: number): Counter {
      if(typeof qty === "number"){
        this.counter.count -= qty;
      }else {
        this.counter.count -= 1;
      }
  
      if (this.counter.count <= this.lowerBound) {
        this.counter.count = this.lowerBound;
      }
  
      return this.counter;
    }
  }
  