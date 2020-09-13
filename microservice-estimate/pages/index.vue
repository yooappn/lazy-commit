<template>
  <div class="uk-row-first">
    <div class="uk-margin uk-card uk-card-default uk-card-body">
      <h3>Hello</h3>

      <div class="uk-margin">
        <div class="uk-form-controls uk-width-1-2@s">
          <label class="uk-form-label" for="form-stacked-text">Module Numbers</label>
          <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." v-model="config.module.from" >
        </div>
        <div class="uk-form-controls uk-width-1-2@s">
          <label class="uk-form-label" for="form-stacked-text">Module Numbers</label>
          <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." v-model="config.module.to" >
        </div>
      </div>

   </div>

    <div class="uk-margin uk-card uk-card-default uk-card-body">
      <h3>Compare Point</h3>

      <vk-grid divided class="uk-child-width-expand@s">
        <div>Item1</div>
        <div>Item2</div>
      </vk-grid>
    </div>

    <div class="uk-margin uk-card uk-card-default uk-card-body">
      <h3>Chart</h3>


      <vk-grid divided class="uk-child-width-expand@s">
        <div>
          <h4>Monolith</h4>


          <BarChart :chartData="chartData"/>
        </div>
        <div>
          <h4>Microservice</h4>
        </div>
      </vk-grid>

    </div>

  </div>
</template>



<script>
import BarChart from '@/components/BarChart.js';

export default {

  data() {
   return {
      chartData: {
        labels: [ 'Jan', 'Feb'],
        datasets: [
            {label: ['Data One'], data: [40]},
        ],
      },
    };
  },

  computed: {
    config() {
      return this.$store.state.data.config;
    }
  },

}
</script>
