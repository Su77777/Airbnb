// 此工具是确保第一次获取到数据之后立马传给子组件 并且让useState第一次渲染的时候使用数据,这样就不会导致第一次渲染的时候本该拿到的就是正确的值 结果它不使用
export function isEmptyObject(obj = {}) {
  return !!Object.keys(obj).length
}