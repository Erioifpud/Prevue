let listener

export default {
  inserted (el, binding) {
    const callback = binding.value
    listener = (e) => {
      const direction = e.deltaY > 0 ? 'down' : 'up'
      callback(direction)
    }
    el.addEventListener('mousewheel', listener)
  },
  unbind (el) {
    if (listener) {
      el.removeEventListener('mousewheel', listener)
    }
  }
}
