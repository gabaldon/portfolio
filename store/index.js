export const state = () => ({
  toogleSideBar: false,
  clickBar: false,
})

export const mutations = {
  toogleBar (state) {
    state.toogleSideBar = !state.toogleSideBar
  },
  detectClick (state) {
    state.clickBar = !state.clickBar
  }
}
