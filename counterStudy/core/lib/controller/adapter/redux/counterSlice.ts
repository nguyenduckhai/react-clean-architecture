import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Counter } from "../../../entities";
import { CounterInteractor } from "../../../useCases";
import { RootState }  from "../../framework";



const initialState = new Counter(0);
// const initialState = {
//   count: 0,
// }

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: state => {
        const interactor = new CounterInteractor(state.count);
        interactor.increment();
        return interactor.counter;
      },
      decrement: state => {
        const interactor = new CounterInteractor(state.count);
        interactor.decrement();
        return interactor.counter;
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        const interactor = new CounterInteractor(state.count);
        interactor.increment(action.payload);
        return interactor.counter;
      }
    }
  }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectState = (state: RootState) => state.counter;

export default counterSlice.reducer;