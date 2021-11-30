import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../adapter/redux/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// ? ReturnType<type>: Contructs a type of the return type of function
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch