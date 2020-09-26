import { eachFpCalc } from '@/calc/fpcalculator.js';


export const state = () => ({
  config: {
    module: { from: 2, to: 10 },
  },
  personHours: {
    mono: [],

  }
});

export const getters = {

  config(state) {
    return state.config;
  }

};

export const mutations = {

  module(state, val) {
    Object.keys(val).forEach((k) => {
      state.config.module[k] = val[k];
    });

    console.log(val);
    console.log(state.config.module);
  },

  calcfp(state, vals) {
    state.personHours.mono = vals.mono;
  }

};
