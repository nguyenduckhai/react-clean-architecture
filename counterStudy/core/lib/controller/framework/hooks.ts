import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './redux';
// ? Why we create this:
// Save time init type for useState
// Dispatch does not know what thunk is, clarifing type of dispatch thunks

// ? Why in here
// Avoiding circular import 

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 