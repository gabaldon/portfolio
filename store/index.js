export const state = () => ({
  toogleSideBar: false,
  displayDesktopSideBar: false,
  clickBar: false,
  scrollDown: false,
  isMobile: window.innerWidth < 1024
})

export const mutations = {
  toggleDesktopBar (state, { toggle }) {
    console.log(toggle)
    state.displayDesktopSideBar = toggle
  },
  toogleBar (state) {
    state.toogleSideBar = !state.toogleSideBar
  },
  toggleScrollDown (state) {
    state.scrollDown = !state.scrollDown
  },
  detectClick (state) {
    state.clickBar = !state.clickBar
  }
}
