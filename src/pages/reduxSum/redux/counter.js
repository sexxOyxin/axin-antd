import { createStore } from 'redux';

const initState = {
  count: 0,
  str: 'do what?'
};

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

// const store = createStore(contReducer);
export const store = createStore(contReducer);

// 触发事件 更新state的唯一办法
store.dispatch({ type: 'do/increase' })
store.dispatch({ type: 'counter/increase' })

// 解决store中state太多
const selectorFunc = (store) => ({str: store.str, con: store.count});
const selectorFunc1 = (store) => store.str;
console.log('selectorFunc: ', selectorFunc(store.getState()));
console.log('selectorFunc1: ', selectorFunc1(store.getState()));
console.log('initStatewwwwwwwwww: ', initState); // 这里打印出的还是最原本的state值
