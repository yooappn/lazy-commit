<template>
<div class="uk-margin uk-card uk-card-default uk-card-body">
    <h3>
        <vk-icon icon="chevron-down" style="cursor:pointer;" @click="toggleParams(false)" v-if="form.collapse" ></vk-icon>
        <vk-icon icon="chevron-up" style="cursor:pointer;" @click="toggleParams(true)" v-if="!form.collapse" ></vk-icon>
        Compare Points
    </h3>

    <div v-if="form.collapse">
        <h3 class="uk-heading-line"><span>Function point</span></h3>

        <vk-grid divided class="uk-child-width-expand@s">
            <div>Item1<input class="uk-input" type="text" @input="recalc();" /></div>
            <div>Item2<input class="uk-input" type="text"/></div>
        </vk-grid>

        <vk-grid divided class="uk-child-width-expand@s">
            <div>Item1</div>
            <div>Item2</div>
        </vk-grid>

        <h3 class="uk-heading-line"><span>System Attributes</span></h3>

    </div>
</div>
</template>


<script>



export default {

  data() {
    return {
      form: {
          collapse: false
      }
    };
  },

  computed: {
    config() {
      return this.$store.getters['data/config'];
    }
  },

  methods : {
    toggleParams(flg) {
      this.form.collapse = flg;
    },
    recalc() {
      const data = {from: this.config.module.from, to: this.config.module.to};

      console.log('reCalc....');
      console.log(data);
    }
  }
}
</script>