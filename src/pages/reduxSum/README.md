ttttdo
react-redux可以做一个todolist 参考：https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/


Action是一个具有字符串type的js对象。描述应用程序中发生了什么的事件，类别域/事件名称。{type:'todos/addEvent',payload:'这里加附加信息'}
Reducer是一个函数，接收当前的state和action。只能使用action和state计算新的state。禁止直接修改state，必须通过复制的方式【为啥？也没报错呀，因为Redux 不允许直接修改 state，是为了可预测性、性能优化、调试友好性，它要确保每一次状态变化都是显式、可控、可追踪的。】。禁止异步逻辑。


# 是什么？
是一个独立的js库。
Redux 是一个使用叫作 "actions" 的事件去管理和更新应用状态的模式和工具库。 它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

# redux库和工具
React-Redux
Redux 可以结合任何 UI 框架一起使用，最常与 React。React-Redux是我们的官方库。它让 React 组件与 Redux 有了交互，可以从 store 读取一些 state，可以通过 dispatch actions 来更新 store。

Redux Toolkit
Redux Toolkit 是我们推荐的编写 Redux 逻辑的方法。 它包含我们认为对于构建 Redux 应用程序必不可少的包和函数。 Redux Toolkit 构建在我们建议的最佳实践中，简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序变得更加容易。

Redux DevTools 拓展
Redux DevTools 拓展 可以显示 Redux 存储中状态随时间变化的历史记录。这允许你有效地调试应用程序，包括使用强大的技术，如“时间旅行调试”。

# Redux
## Store
store是保存所有状态的仓库
状态更新：需要通过 action -> dispatch -> reducer()

所有 Redux 应用的中心都是 store 。"store" 是保存应用程序的全局 state 的容器。

store 是一个 JavaScript 对象，具有一些特殊的功能和能力，使其与普通的全局对象不同：

切勿直接修改（modify）或更改（change）保存在 Redux 存储中的状态
相反，导致状态更新的唯一方法是创建一个描述“应用程序中发生的某些事情”的普通 action 对象，然后将该 action dispatch 到 store 以告诉它发生了什么。
当一个 action 被 dispatch 后，store 会调用根 reducer 方法，让其根据 action 和旧 state 计算出新 state
最后，store 会通知 订阅者(subscribers) 状态已更新，以便可以使用新数据更新 UI。

## State
Redux中state是不可变的，不能直接修改，就算直接修改了也捕获不到，不会影响到getState()。
