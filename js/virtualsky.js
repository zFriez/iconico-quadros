function callVirtualSky(state) {
  constellation_state = state == "constellation_t" ? true : state == "constellation_f" ? false : constellation_state
  constellation_labels_state = state == "constellation_labels_t" ? true : state == "constellation_labels_f" ? false : constellation_labels_state

  planets_state = state == "planets_t" ? true : state == "planets_f" ? false : planets_state
  planet_labels_state = state == "planet_labels_t" ? true : state == "planet_labels_f" ? false : planet_labels_state

  gridlines_state = state == "gridlines_t" ? true : state == "gridlines_f" ? false : gridlines_state

  galaxy_state = state == "galaxy_t" ? true : state == "galaxy_f" ? false : galaxy_state

  let planetarium
  S(document).ready(function () {
    planetarium = S.virtualsky({
      id: "starmap-container_element",
      width: 260,
      height: 260,
      mouse: false,
      latitude: lat,
      longitude: lon,
      showdate: false,
      showplanetlabels: planet_labels_state,
      showplanets: planets_state,
      showgalaxy: galaxy_state,
      showposition: false,
      keyboard: false,
      cardinalpoints: false,
      constellations: constellation_state,
      constellationlabels: constellation_labels_state,
      constellationwidth: 0.7,
      galaxywidth: 2,
      gridlines_gal: gridlines_state,
      gridstep: 15,
      fontsize: "9px",
    })
    let help_button = $(".starmap-container_element_btn_help")
    let clock_button = $(".starmap-container_element_clock")
    let position_button = $(".starmap-container_element_position")
    help_button.innerHTML = clock_button.innerHTML = position_button.innerHTML = "" 
    help_button.style.position = clock_button.style.position = position_button.style.position = "absolute" 
  })
}