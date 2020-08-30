<template>
  <div class="uk-row-first">
    <div class="uk-margin uk-card uk-card-default uk-card-body">
       <h3>Hello</h3>
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


          <BarChart :data="chartData"/>
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
  }

}
</script>