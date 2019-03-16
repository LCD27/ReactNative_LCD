/**
 * email 756355668@qq.com
 * https://github.com/LCD27/Github_LCD
 * 增强对RN的练习
 */

/**
 *
 *
 首先必须明确的是，整个应用只有一个单一的 reducer 函数：这个函数是传给 createStore 的第一个参数。一个单一的 reducer 最终需要做以下几件事：

 reducer 第一次被调用的时候，state 的值是 undefined。reducer 需要在 action 传入之前提供一个默认的 state 来处理这种情况。
 reducer 需要先前的 state 和 dispatch 的 action 来决定需要做什么事。
 假设需要更改数据，应该用更新后的数据创建新的对象或数组并返回它们。
 如果没有什么更改，应该返回当前存在的 state 本身。
 *
 * */
function test(state = 'aaa', action) {
  switch (action.type) {
    case 'test':
      return action.test
  }
  return state
}

export {
  test
}