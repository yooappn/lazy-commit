
export const state = () => ({
  config: {
    module: { from: 2, to: 10 },
  },
  personHours: {
    mono: [],

  }
});


export const mutations = {

  calcfp(state, vals) {
    state.personHours.mono = vals.mono;
  }

};


export const actions = {
  calccfp({commit}, data) {
    commit('calcfp', data)
  }
};
