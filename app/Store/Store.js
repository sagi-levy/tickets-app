// Store/Store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import thunk middleware for async actions
import ticketReducer from './ticketReducer'; // Import ticket reducer



// Define initial state

// Define ticket reducer

// Combine reducers
const rootReducer = combineReducers({
  tickets: ticketReducer,
  // Add more reducers if needed
});

// Create store
export const store = createStore(rootReducer, applyMiddleware(thunk));
