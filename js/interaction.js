// #region inicializador
let navDetailsTab = $(".svg-info")
let svgBackgroundDetails = $(".svg-info-container")

let navFrameTab = $(".svg-frame")
let svgBackgroundFrame = $(".svg-frame-container")

let right_container = $(".right-container")

let starmap_container = $("#starmap-container")
let starmap_info_wrapper = [...$(".starmap-info-wrapper").children]

let constellation_state = false
let constellation_labels_state = false
let planets_state = false
let planet_labels_state = false
let gridlines_state
let galaxy_state
let addresses, lat, lon
// #endregion

// #region checagem dos inputs responsaveis pela aparencia do quadro na tab de detalhes
function namesToggle(option, toggle_check = false) {
  let detail_options = [...$$(".option")]
  let detail_names = $(".name-options")
  let disable_constellation = [...detail_names.children][0]
  let disable_planets = [...detail_names.children][2]

  if (option.id == "constellation" && toggle_check) {
    let constellation_element = [...detail_names.children][1]
    disable_constellation.disabled = false
    callVirtualSky("constellation_t")

    constellation_element.style.display = "inline"
    detail_names.style.display = "flex"
    detail_names.style.animation = `fadeIn 300ms forwards`
  }
  else if (option.id == "constellation" && !toggle_check && !detail_options[1].classList.contains("checked")) {
    detail_names.style.animation = `fadeOut 300ms forwards`
    setTimeout(() => { detail_names.style.display = "none" }, 220)
  }
  
  if (option.id == "constellation" && !toggle_check) {
    disable_constellation.disabled = true
    callVirtualSky("constellation_f")
  }

  if (option.id == "planets" && toggle_check) {
    let planets_element = [...detail_names.children][3]
    disable_planets.disabled = false
    callVirtualSky("planets_t")
    
    planets_element.style.display = "inline"
    detail_names.style.display = "flex"
    detail_names.style.animation = `fadeIn 300ms forwards`
  }
  else if (option.id == "planets" && !toggle_check && !detail_options[0].classList.contains("checked")) {
    detail_names.style.animation = `fadeOut 300ms forwards`
    setTimeout(() => { detail_names.style.display = "none" }, 220)
  }
  
  if (option.id == "planets" && !toggle_check) {
    disable_planets.disabled = true
    callVirtualSky("planets_f")
  }

  disable_planets.addEventListener("click", () => {
    if (disable_planets.checked) callVirtualSky("planet_labels_t")
    else callVirtualSky("planet_labels_f")
  })
  
  disable_constellation.addEventListener("click", () => {
    if (disable_constellation.checked) callVirtualSky("constellation_labels_t")
    else callVirtualSky("constellation_labels_f")
  })

  if (option.id == "gridlines" && toggle_check) {
    callVirtualSky("gridlines_t")
  } else if (option.id == "gridlines" && !toggle_check) {
    callVirtualSky("gridlines_f")
  }

  if (option.id == "galaxy" && toggle_check) {
    callVirtualSky("galaxy_t")
  } else if (option.id == "galaxy" && !toggle_check) {
    callVirtualSky("galaxy_f")
  }

}
// #endregion

// #region funcao de interação da tab de detalhes 
function infoContentInteraction() {
  let address_search_result = [...$(".address-search-result").children]
  let address_button = $("#address-button")
  let frame_color_options = [...$(".frame-color-options").children]

  let detail_options = $$(".option")
  let bg_color_pallete = [...$(".bg-color-pallete").children]
  let detail_color_pallete = [...$(".detail-color-pallete").children]
  let bg_star_color_container = [...$(".bg-star-color-container").children]
  let font_options = [...$(".font-options").children]
  let color_input = $$(".user-color")
  let color_range_input = $("#color-range-input")
  
  let frame_background = $(".frame-background")
  let frame_image = $(".frame-image")

  let title_input = $("#title-input")
  let description_input = $("#description-input")
  let font_title_size = $("#title-font-size")
  let font_description_size = $("#description-font-size")

  let goto_frame_button = $("#goto-frame-button")

  let layout = [...$(".layout").children]
  let text_content = [layout[1], layout[2], starmap_info_wrapper[0], starmap_info_wrapper[1]]

  callVirtualSky()
  hideStarmapTint()

  address_search_result.forEach(address => {
    address.addEventListener("click", () => {
      if (address.textContent == "Rio de Janeiro, Rio de Janeiro, Brazil") {
        lat = -22.9110137
        lon = -43.2093727
        text_content[2].textContent = "Rio de Janeiro, Rio de Janeiro, Brazil"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "São Paulo, São Paulo, Brazil") {
        lat = -23.5506507
        lon = -46.6333824
        text_content[2].textContent = "São Paulo, São Paulo, Brazil"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "Recife, Pernambuco, Brazil") {
        lat = -8.0584933
        lon = -34.8848193
        text_content[2].textContent = "Recife, Pernambuco, Brazil"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "Florianópolis, Santa Catarina, Brazil") {
        lat = -27.5973002
        lon = -48.5496098
        text_content[2].textContent = "Florianópolis, Santa Catarina, Brazil"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "Moscow, Moscow, Russia") {
        lat = 55.7505412
        lon = 37.6174782
        text_content[2].textContent = "Moscow, Moscow, Russia"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "Beijing, Beijing, China") {
        lat = 39.9057136
        lon = 116.3912972
        text_content[2].textContent = "Beijing, Beijing, China"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "Berlim, Germany, Germany") {
        lat = 52.5170365
        lon = 13.3888599
        text_content[2].textContent = "Berlim, Germany, Germany"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "New York, New York, United States") {
        lat = 40.7127281
        lon = -74.0060152
        text_content[2].textContent = "New York, New York, United States"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
      else if (address.textContent == "San José, San José, Costa Rica") {
        lat = 9.9325427
        lon = -84.0795782
        text_content[2].textContent = "San José, San José, Costa Rica"
        text_content[3].textContent = `Lat: ${lat} Lon: ${lon}`
        callVirtualSky()
      }
    })
  })

  address_button.addEventListener("click", () => {
    address_button.nextElementSibling.style.display = "block"
    address_button.nextElementSibling.classList.add("drop-down")
  })

  title_input.addEventListener("input", () => {
    let title = layout[1]
    if (title_input.value == "" || title_input.value == " ") title.textContent = "Título aqui"
    else title.textContent = title_input.value
  })
  
  description_input.addEventListener("input", () => {
    let description = layout[2]
    if (description_input.value == "" || description_input.value == " ") description.textContent = "Descrição aqui"
    else description.textContent = description_input.value
  })

  color_input[0].addEventListener("input", () => {
    frame_background.style.backgroundColor = color_input[0].value
  })

  color_input[1].addEventListener("input", () => {
    frame_background.style.color = color_input[1].value
  })

  detail_options.forEach(option => {
    option.addEventListener("click", () => {
      let check_state = option.classList.contains("checked")
      if (!check_state) {
        option.classList.add("checked")
      } else {
        option.classList.remove("checked")
      }
      namesToggle(option, !check_state)
    })
  })

  toggablenizer(frame_color_options, (color) => {
    if (color.id == "frame-color-white") {
      frame_image.src = "./assets/left_container/white-frame.png"
    } else {
      frame_image.src = "./assets/left_container/black-frame.png"
    }
  })

  toggablenizer(bg_color_pallete, (palette) => {
    frame_background.style.backgroundColor = palette.style.backgroundColor ?? "#C7C7C7"
  })

  toggablenizer(detail_color_pallete, (palette) => {
    frame_background.style.color = palette.style.backgroundColor ?? "black"
  })

  toggablenizer(bg_star_color_container)

  color_range_input.addEventListener("input", () => {
    bg_star_color_container[0].style.backgroundColor = `hsl(${color_range_input.value}deg 25% 50%)`
    showStarmapTint(`hsl(${color_range_input.value}deg 25% 50%)`)
  })

  toggablenizer(font_options, (font) => {
    for (let child of text_content) {
      for (let i = 1; i <= 7; i++) {
        child.classList.remove("font" + i)
      }
      child.classList.add(font.className.split(" ")[0])
    }
  })

  font_title_size.addEventListener("input", () => {
    layout[1].style.setProperty('--text-increase', font_title_size.value + "px")
  })
  
  font_description_size.addEventListener("input", () => {
    layout[2].style.setProperty('--text-increase', font_description_size.value + "px")
  })

  goto_frame_button.addEventListener("click", () => {
    navFrameTabClicked()
  })
}
// #endregion

// #region atualiza o preço do quadro 
function updatePriceTag() {
  let price_tag = $("#price-tag span")
  let format_price = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
  let prices_table = { A2: 21790, A3: 9790, A4: 7790, A5: 6790 }
  let current_price

  current_price = prices_table[$(".frame-sizes > .selected").innerHTML]
  price_tag.innerHTML = `${format_price.format(current_price / 100)}`
}
// #endregion

// #region altera o tamanho do quadro
function switchPageSize(option) {
  let frame_sizes = [...$(".frame-sizes").children]
  for (const option of frame_sizes) {
    option.classList.remove("selected")
  }
  option.classList.add("selected")
  updatePriceTag()
}
// #endregion

// #region funcao de interação da tab de quadros 
function frameContentInteraction() {
  let frame_sizes = [...$(".frame-sizes").children]
  let frame_options = [...$(".frame-color-options").children]

  frame_sizes.forEach(option => {
    option.addEventListener("click", () => {
        switchPageSize(option)
    })
  })

  toggablenizer(frame_options)
}
// #endregion
