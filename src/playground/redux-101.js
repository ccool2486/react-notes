import { createStore } from 'redux';

const store = createStore((state = { count: 1 }) => {
  return state;
});

console.log(store.getState());

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
