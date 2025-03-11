function $(selector) {
  return document.querySelector(selector)
}

function $$(selector) {
  return [...document.querySelectorAll(selector)]
}

function showStarmapTint(color) {
  $('#starmap-container_element').style.setProperty('--display-mode', 'block')
  $('#starmap-container_element').style.setProperty('--color', color)
}

function hideStarmapTint() {
  $('#starmap-container_element').style.setProperty('--display-mode', 'none')
}

function toggablenizer(elem, onActivate, onDeactivate) {
  elem.forEach(child => {
    child.addEventListener("click", () => {
      let checkState = child.classList.contains("checked")
      if (!checkState) {
        for (let _child of elem) {
          _child.classList.remove("checked")
          onDeactivate?.(child)
        }
      }
      if (!checkState) {
        child.classList.add("checked")
        onActivate?.(child)
      } else {
        onDeactivate?.(child)
      }
    })
  })
}

function debounce(cb, delay = 1000) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}