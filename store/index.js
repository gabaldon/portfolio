export const state = () => ({
  toogleSideBar: false
})

export const mutations = {
  toogleBar (state) {
    state.toogleSideBar = !state.toogleSideBar
  }
}
