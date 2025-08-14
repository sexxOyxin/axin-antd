import { store } from "./counter.js";

const initState = {
  count: 0,
  str: 'do what?'
}
store.dispatch({ type: 'counter/increase' })
store.dispatch({ type: 'counter/increase' })
store.dispatch({ type: 'counter/increase' })
store.dispatch({ type: 'counter/increase' })
store.dispatch({ type: 'counter/increase' })
store.dispatch({ type: 'counter/increase' })
console.log(store.getState(), 'reduce中调用 运行全周期');

const actions = [
  {type: 'counter/increase'},
  {type: 'counter/increase'},
  {type: 'counter/increase'},
  {type: 'do/increase'},
];

const contReducer = (state = initState, action) => {
  switch (action.type) {
    case 'counter/increase':
      return { ...state, count: state.count + 1 };
    case 'counter/decrease':
      return { ...state, count: state.count - 1 };
    case 'do/increase':
      return { ...state, str: 'inc', count: state.count + 1 };
    case 'do/decrease':
      return { ...state, str: 'dec', count: state.count - 1 };
    default:
      return state;
  }
};
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
[].reduce((pre, cur, index)=> {}, []);

const finalState = actions.reduce(contReducer, initState);
console.log('finalState: ', finalState);