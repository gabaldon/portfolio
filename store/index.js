export const state = () => ({
  toogleSideBar: false,
  displayDesktopSideBar: false,
  clickBar: false,
})

export const mutations = {
  toggleDesktopBar (state, { toggle }) {
    state.displayDesktopSideBar = toggle
  },
  toogleBar (state) {
    state.toogleSideBar = !state.toogleSideBar
  },
  detectClick (state) {
    state.clickBar = !state.clickBar
  }
}
