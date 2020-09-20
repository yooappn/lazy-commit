<template>
    <div class="uk-margin uk-card uk-card-default uk-card-body">
      <h3>
        <vk-icon icon="chevron-down" style="cursor:pointer;" @click="toggleParams(false)" v-if="form.collapse" ></vk-icon>
        <vk-icon icon="chevron-up" style="cursor:pointer;" @click="toggleParams(true)" v-if="!form.collapse" ></vk-icon>
        Parameters
       </h3>

        <vk-grid class="uk-child-width-expand@s" v-if="form.collapse">
            <div class="uk-form-controls">
            <label class="uk-form-label" for="form-stacked-text">Module Number from</label>
            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." v-model="config.module.from" >
            </div>
            <div class="uk-form-controls">
            <label class="uk-form-label" for="form-stacked-text">to</label>
            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." v-model="config.module.to" >
            </div>
        </vk-grid>
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
      return this.$store.state.data.config;
    }
  },

  methods : {
    toggleParams(flg) {
      this.form.collapse = flg;
      console.log(this.form.collapse);
    }
  }

}
</script>