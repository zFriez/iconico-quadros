function checkCurrentContent(parent) {
  for (let current of parent) {
    if (current.style.display == "block") {
      return current
    }
  }
}

function fadeAnimationApply(fadeOutElement, fadeInElement) {
  if (fadeOutElement.className == fadeInElement.className) return

  fadeOutElement.classList.add("fade-out")
  setTimeout(() => {
    fadeOutElement.classList.remove("fade-out")
    fadeOutElement.style.display = "none"
    
    fadeInElement.classList.add("fade-in")
    fadeInElement.style.display = "block"
  }, 290)

  setTimeout(() => {
    fadeInElement.classList.remove("fade-in")
  }, 590)
}

function navDetailsTabClicked() {
  svgBackgroundFrame.classList.remove("selected-red")
  svgBackgroundDetails.classList.add("selected-yellow")

  let selectedContent = checkCurrentContent([...right_container.children])
  fadeAnimationApply(selectedContent, detailsContent)
  infoContentInteraction()
}

function navFrameTabClicked() {
  svgBackgroundDetails.classList.remove("selected-yellow")
  svgBackgroundFrame.classList.add("selected-red")
  
  let selectedContent = checkCurrentContent([...right_container.children])
  fadeAnimationApply(selectedContent, frameContent)
  frameContentInteraction()
}

let detailsContent = $(".info-content")
let frameContent = $(".frame-content")

svgBackgroundDetails.classList.add("selected-yellow")
setTimeout(() => {
  infoContentInteraction()
}, 1000)

navDetailsTab.addEventListener("click", () => {
  navDetailsTabClicked()
})

navFrameTab.addEventListener("click", () => {
  navFrameTabClicked()
})

