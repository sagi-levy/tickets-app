"use client"
import React from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({ store, children }) => {
  return (
    /* Client-side rendering */
    <Provider store={store}>
      {/* Render the children components */}
      {children}
    </Provider>
  );
};
export default StoreProvider;
