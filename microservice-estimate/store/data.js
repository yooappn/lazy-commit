import { eachFpCalc, gsc } from '@/calc/fpcalculator.js';
import { defaultFpParameters } from '../calc/fpcalculator';

const toChartData = (lbl, bg, v) => {
  return {
    label: lbl, fill: false,
    borderColor: bg,
    data: v.map((e) => { return e.point;})
  };
};

const toModuleData = (lbl, v) => {
  return {
    label: lbl, type: 'bar',
    data: lbl.map((e) => e)
  };
};

export const state = () => ({
  config: defaultFpParameters(),
  personHours: {
    mono: [],
    chartData: {
      labels: [ '1', '2', '3', '4'],
      datasets: [
          {label: 'Mono', data: [40, 30, 20, 10] },
          {label: 'Micro', data: [10, 20, 22, 28] },
          {label: 'Param', data: [4, 6, 8, 10], type: 'bar' }
      ],
    }
  }
});

export const getters = {

  module(state) {
    return state.config.module;
  },

  personHoursChartData(state) {
    return state.personHours.chartData;
  },

  fp(state) {
    return state.config.fp;
  },

  gscParams(state) {
    return state.config.gsc;
  },
};

export const mutations = {

  module(state, val) {
    Object.keys(val).forEach((k) => {
      state.config.module[k] = val[k];
    });
  },

  calcfp(state) {
    const ret = eachFpCalc(state.config.module.from, state.config.module.to);
    console.log(ret);
    console.log('calc......');
    const labels = ret.mono.map(e => '' + e.n);
    const datasets = [ toChartData('Mono', "#3e95cd", ret.mono), toChartData('Micro', '#8e5ea2', ret.micro) ];
    state.personHours.chartData = { labels, datasets};
  }

};

export const actions = {
  module({commit}, data) {
    console.log('actions.....');
    commit('module', data);
    commit('calcfp');
  }
};