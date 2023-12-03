import {configureStore}from '@reduxjs/toolkit'
// configure store comes from reduxtoolkit
import todoReducer from '../App/Features/Todo/TodoSlice'
export const store= configureStore({
    reducer:todoReducer
})

