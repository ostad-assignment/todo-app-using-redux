// store/index.js

import { createStore } from "redux"
import rootReducer from "../reducers/todoReducer" // Replace with your combined reducers if you have multiple reducers

const store = createStore(rootReducer) // Make sure rootReducer is passed as an argument

export default store
