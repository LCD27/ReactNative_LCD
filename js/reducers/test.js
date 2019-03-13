/**
 * email 756355668@qq.com
 * https://github.com/LCD27/Github_LCD
 * 增强对RN的练习
 */


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